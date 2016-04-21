# React Native Introduction in Norwegian

## Slides (Norwegian)
Open `slides/index.html` in your favorite browser.

## Prerequisites 
Follow the [Getting started](https://facebook.github.io/react-native/docs/getting-started.html#content)
guide on OS X, or the [Getting started on Linux]
(https://facebook.github.io/react-native/docs/getting-started-linux.html#content)
guide on Linux. Windows should also work, but is not officially supported. OS X is
needed for iOS development. 

## Setup
Clone the repo with

    git clone https://github.com/andybb/react-native-introduction.git

`cd` into the directory and run

    npm install

## Run the apps
### iOS
- While in the project root folder
- `react-native run-ios`
- Hit ⌘-R in the iOS simulator to reload and see changes

### Android
- While in the project root folder
- `react-native run-android`
- Press the menu button (F2 by default, or ⌘-M in Genymotion) and select Reload JS to see your change
- Run `adb logcat *:S ReactNative:V ReactNativeJS:V` in a terminal to see your app's logs
