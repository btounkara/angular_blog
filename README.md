# Blog angular 

## Description
This is a a little blog I had to do while I was doing the openclassroom course about angular.

## How to install

It requires [Node.js](https://nodejs.org/) v4+ to run

It uses a bunch of librairies to work (https://www.npmjs.com/): 
* angular V7+ : TypeScript-based open-source front-end web application framework 
* firebase : Google's mobile and web application development platform 
* open-iconic : A free and open icon set

```sh
npm install
```

## How to start

```sh
npm start
```
## Use your own firebase

1. To do that you have to sign in firebase (https://firebase.google.com/) with your Google account.
2. Click on 'Go to console'
3. Create your own project
4. Create your own database
5. Modify the app.component.ts by copying/pasting on the constructor the code Firebase provided
  ```html
<script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB....WC8yHem3Ezo",
    authDomain: "ocr-blog-angular.firebaseapp.com",
    databaseURL: "https://ocr-blog-angular.firebaseio.com",
    projectId: "ocr-blog-angular",
    storageBucket: "ocr-blog-angular.appspot.com",
    messagingSenderId: "......."
  };
  firebase.initializeApp(config);
</script>
  ```
