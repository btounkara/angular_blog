import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyBiUlswdKvpQTXCTebLdRd_WC8yHem3Ezo",
      authDomain: "ocr-blog-angular-4ab8e.firebaseapp.com",
      databaseURL: "https://ocr-blog-angular-4ab8e.firebaseio.com",
      projectId: "ocr-blog-angular-4ab8e",
      storageBucket: "ocr-blog-angular-4ab8e.appspot.com",
      messagingSenderId: "1034866015726"
    };

    firebase.initializeApp(config);
  }
}
