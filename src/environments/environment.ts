// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //firebase congif from settingds o websitr
  firebase: {
    apiKey: "AIzaSyD-heZMwaK7FJ5VwvQd73uYk-nf9_ZgZwY",
    authDomain: "todo-list-cs.firebaseapp.com",
    databaseURL: "https://todo-list-cs.firebaseio.com",
    projectId: "todo-list-cs",
    storageBucket: "todo-list-cs.appspot.com",
    messagingSenderId: "466986689802",
    appId: "1:466986689802:web:f998cfff86a03d7c3086f3"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
