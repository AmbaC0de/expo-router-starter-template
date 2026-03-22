import * as Haptics from "expo-haptics";
import { AccessibilityInfo, Platform } from "react-native";

/**
 * Centralized manager for haptic feedback. All calls should go through this
 * file to ensure consistency and respect system accessibility settings.
 */

async function isEnabled() {
  // AccessibilityInfo (iOS) which disables haptics when "Reduce Motion" or
  // "Touch Accommodations" are active.
  const motionReduced = await AccessibilityInfo.isReduceMotionEnabled();
  return !motionReduced;
}

async function perform(fn: () => Promise<void>) {
  if (await isEnabled()) {
    try {
      await fn();
    } catch (e) {
      // swallow any errors, haptics should never crash the app
      console.warn("Haptics failed", e);
    }
  }
}

// convenient wrappers
export const HapticManager = {
  /** subtle feedback for selections/toggles/tab switches */
  selection: () =>
    perform(async () => {
      if (Platform.OS === "android") {
        await Haptics.performAndroidHapticsAsync(
          Haptics.AndroidHaptics.Keyboard_Tap,
        );
      } else {
        await Haptics.selectionAsync();
      }
    }),

  /** impact with a style (light/medium/heavy) */
  impact: (style: Haptics.ImpactFeedbackStyle) =>
    perform(async () => {
      if (Platform.OS === "android") {
        switch (style) {
          case Haptics.ImpactFeedbackStyle.Light:
            await Haptics.performAndroidHapticsAsync(
              Haptics.AndroidHaptics.Keyboard_Tap,
            );
            break;
          case Haptics.ImpactFeedbackStyle.Medium:
            await Haptics.performAndroidHapticsAsync(
              Haptics.AndroidHaptics.Virtual_Key,
            );
            break;
          case Haptics.ImpactFeedbackStyle.Heavy:
            await Haptics.performAndroidHapticsAsync(
              Haptics.AndroidHaptics.Long_Press,
            );
            break;
          default:
            await Haptics.performAndroidHapticsAsync(
              Haptics.AndroidHaptics.Virtual_Key,
            );
        }
      } else {
        await Haptics.impactAsync(style);
      }
    }),

  success: () =>
    perform(async () => {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }),

  error: () =>
    perform(async () => {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }),
};
