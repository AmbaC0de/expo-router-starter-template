# Expo Router Starter Template

A production-ready starter template for React Native mobile apps with Expo, designed to kickstart new projects with a solid architecture and essential features already in place.

## Why this template?

Every new mobile project requires the same repetitive setup: navigation, state management, authentication, theming, storage... This template bundles all these building blocks so you can focus directly on your app's business logic.

## Quick Start

Create a new project using this template in one command:

```bash
npx create-expo-app -t https://github.com/AmbaC0de/expo-router-starter-template
```

Then configure your environment and start developing:

```bash
cd my-app
npx expo start
```

## Tech Stack

| Category         | Technology                                            |
| ---------------- | ----------------------------------------------------- |
| Framework        | Expo SDK 55, React Native 0.83, React 19              |
| Navigation       | Expo Router (file-based routing)                      |
| State management | Redux Toolkit + RTK Query                             |
| Persistence      | redux-remember, expo-secure-store, react-native-mmkv  |
| Forms            | React Hook Form                                       |
| UI               | react-native-gesture-handler, react-native-reanimated |
| Bottom sheets    | react-native-actions-sheet                            |
| HTTP requests    | Axios (via RTK Query base query)                      |
| Language         | TypeScript (strict mode)                              |

## Features

- **Authentication** : complete login/logout flow with protected navigation via `Stack.Protected`
- **Theming** : light/dark/system mode with a selection bottom sheet
- **Secure storage** : credentials in expo-secure-store, preferences in MMKV
- **UI components** : `AppButton` (contained/outlined/text), `IconButton`, `AppTextInput` (integrated with React Hook Form)
- **Haptics** : centralized haptic feedback that respects accessibility settings
- **API ready** : RTK Query configured with Axios, automatic Bearer token injection
- **Path aliases** : `@/*` maps to `./src/*` for clean imports
- **React Compiler** and **Typed Routes** enabled via Expo experiments

## Project Structure

```
src/
├── app/                    # Routes (Expo Router)
│   ├── _layout.tsx         # Root layout (providers, theme)
│   ├── index.tsx           # Entry point (redirects based on auth)
│   ├── (auth)/             # Public routes
│   │   └── sign-in.tsx
│   └── (protected)/        # Protected routes
│       ├── _layout.tsx
│       └── index.tsx
├── components/
│   ├── ui/                 # AppButton, IconButton
│   ├── form/               # AppTextInput
│   └── bottom-sheets/      # Action sheets, ThemeSheet
├── store/                  # Redux store
│   ├── slices/             # auth, theme
│   ├── config/             # baseQuery (Axios)
│   └── mainApi.ts          # RTK Query API
├── theme/                  # Colors, typography, constants
├── hooks/                  # useAppTheme
├── config/                 # Environment variables
├── storage-driver/         # MMKV + Secure Store drivers
└── utils/                  # Haptics
```

## Environment Setup

Create a `.env` file at the root of your project:

```
EXPO_PUBLIC_API_URL=https://your-api.com
```

## Available Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm start`         | Start the dev server     |
| `npm run android`   | Build and run on Android |
| `npm run ios`       | Build and run on iOS     |
| `npm run web`       | Start the web version    |
| `npm run lint`      | Lint the code            |
| `npm run typecheck` | TypeScript type checking |

## Customization

### Theme

Edit colors in `src/theme/colors.ts` and typography in `src/theme/constants.ts`.

### API

Set the base URL via `EXPO_PUBLIC_API_URL` and add your endpoints in `src/store/mainApi.ts`.

### Navigation

Add your screens in `src/app/(protected)/` for authenticated routes or `src/app/(auth)/` for public routes.

## Resources

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Hook Form](https://react-hook-form.com/)
