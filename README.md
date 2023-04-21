# RNComponents Placeholder

React Native app with Typescript made using React Native 0.71.6

## Clone

`$ git clone `

## Getting started

```
$ yarn install
$ cd ios && pod install
```

## VSCode extensions

- Prettier
- ESLint

## launch iOS

`$ yarn ios` or from XCode opening the workspace file

## launch Android

`$ yarn android` or from Android Studio

### Troubleshoothing

#### `$ANDROID_SDK_ROOT` is not defined

> Make sure to add `$ANDROID_SDK_ROOT` to your machine's env variables.

- [Solutions for Mac](https://stackoverflow.com/questions/29391511/where-is-android-sdk-root-and-how-do-i-set-it/53138471)

- [Solutions for Windows](https://stackoverflow.com/questions/23042638/how-do-i-set-android-sdk-home-environment-variable)

#### IOS `pod install` failed

> Try with `arch -x86_64 pod install`, in case of a Mac M1

- [New Architecture - Troubleshooting](https://reactnative.dev/docs/next/new-architecture-troubleshooting)
- [Apple Silicon (M1) troubleshooting guide (RN 0.64/0.65/0.66)](https://github.com/facebook/react-native/issues/31941)

## Libraries used

- React Native version: 0.71.6.
- TypeScript
- Styled Components
- React Navigation v6

V.1.0.0
