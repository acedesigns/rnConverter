## Run App

```
npx react-native start

npx pod-install ios

npx react-native run-ios
npx react-native run-android
```
### To Build App Debug on Android

```bash
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

cd android

./gradlew assembleDebug
```