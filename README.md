<h1 align="center">RNComponents Template</h1>

<div align="center">

[![NPM RN pkg ver](https://img.shields.io/badge/React%20Native-0.71.6-red.svg)](https://github.com/facebook/react-native/releases)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](#)
[![Linter](https://badges.aleen42.com/src/eslint.svg)](#)
[![Formatter: prettier](https://img.shields.io/badge/Formatter-Prettier-f8bc45.svg)](#)
[![App](https://img.shields.io/badge/App-1.0.0-green)](#)

</div>

| Android                                                                                                                                                                  | iOS                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Android](https://raw.githubusercontent.com/Alexander-Lancellott/images/master/RNComponents/Screenshot_1682104124.png?token=GHSAT0AAAAAACBV7JNQPUDZO5KUGHW4JLTMZCC4LCA) | ![iOS](https://raw.githubusercontent.com/Alexander-Lancellott/images/master/RNComponents/Simulator%20Screen%20Shot%20-%20iPhone%2014%20-%202023-04-21%20at%2016.08.52.png?token=GHSAT0AAAAAACBV7JNQ2VQHOLXSW36GCDKWZCC4MNA) |

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
