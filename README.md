# temi-Skyway
Basic example of [NTT Skyway](https://webrtc.ecl.ntt.com/en/) with temi.

There are two folders:
* `android` contains the Android Studio project
* `webapp` contains a NodeJS Express webapp


## android
* Open up the project in Android Studio
* Add your `API_KEY` and `DOMAIN` in `MainActivity.java`
* Build and run on temi


## webapp
Add a `.env` file at the root of the `webapp/` folder with the following contents:
```
SKYWAY_API_KEY="API-KEY"
```

Make sure you have NodeJS installed. Then run:
```
npm install
npm run start
```

Open up a web-browser and go to https://localhost:5000.
