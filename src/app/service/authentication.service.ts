import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private plataform: Platform,
    public toastController: ToastController
  ) {
    this.plataform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.create();
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true)
      }
    });
  }
  login(correo, contraseña) {
    if (correo == "aaa@hotmail.com") {
      var navigationExtrasOK: NavigationExtras = {
        state: {
          user_id: '1234',
          user_name: 'Fernanda Arrano',
          message: 'Bienvenido'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasOK).then((response) => {
        this.router.navigate(['folder/Inbox'], navigationExtrasOK);
        this.authState.next(true);
      });
    }
    if (correo == "bbb@hotmail.com") {
      var navigationExtrasOK: NavigationExtras = {
        state: {
          user_id: '7777',
          user_name: 'Patricio Salinas',
          message: 'Bienvenido Profesor'
        }
      };
      this.storage.set('USER_PROFESOR', navigationExtrasOK).then((response) => {
        this.router.navigate(['homeprofesor'], navigationExtrasOK);
        this.authState.next(true);
      });
    } else {
      var navigationExtrasOK: NavigationExtras = {
        state: {
          user_id: '',
          user_name: '',
          message: ' Nombre de usuario o contraseña invalidos'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasOK).then((response) => {
        this.router.navigate(['login'], navigationExtrasOK);
        this.authState.next(false);
      });
    }
  }
  logout() {
    this.storage.remove('USER_INFO').then(res => {
      this.router.navigate(['login']);
      this.authState.next(false);
      console.log(res);
    });
  }
  isAuthenticated() {
    return this.authState.value;
  }
}

