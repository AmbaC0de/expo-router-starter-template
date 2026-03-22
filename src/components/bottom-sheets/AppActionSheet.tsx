import { useTheme } from "@react-navigation/native";
import { PropsWithChildren } from "react";
import ActionSheet, { ActionSheetProps } from "react-native-actions-sheet";

type BottomActionSheetProps = PropsWithChildren & ActionSheetProps;

const AppActionSheet = (props: BottomActionSheetProps) => {
  const { colors } = useTheme();
  return (
    <ActionSheet
      gestureEnabled={true}
      containerStyle={{
        backgroundColor: colors.card,
        paddingTop: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      indicatorStyle={{
        backgroundColor: colors.textSecondary,
        width: 40,
        marginBottom: 20,
      }}
    >
      {props.children}
    </ActionSheet>
  );
};

export default AppActionSheet;
