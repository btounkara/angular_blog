import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isNavbarCollapsed = true;
  
  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // We look the state of the autentication
    firebase.auth().onAuthStateChanged(
      (user) => this.isAuth = typeof(user) !== 'undefined' && user != null
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}
