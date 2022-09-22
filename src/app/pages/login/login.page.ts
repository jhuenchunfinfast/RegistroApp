import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, NavController, AnimationController, createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //esto interpreta el formulario de la pagina(validacion)
  formLogin = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    contrasena: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8)])
  })

  constructor(private router: Router, private alertController: AlertController, private animationCtrl: AnimationController) {
    this.animacion();
  }

  ngOnInit() {
  }

  irAlaPaginaDeInicio() {
    let navigationExtras: NavigationExtras = {
      state: {
        correo: this.formLogin.value.correo
      }
    }
    this.router.navigate(['/folder/Inbox'], navigationExtras);
  }

  iniciarSesion() {
    if ('admin@hotmail.com' == this.formLogin.value.correo) {
      this.irAlaPaginaDeInicio();
    } else {
      this.mostrarAlerta();

    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Informacion:',
      message: 'Correo incorrecto',
      buttons: ['Aceptar'],
    })
    await alert.present()
  }

  animacion() {
    const squareA = createAnimation()
      .addElement(document.querySelector('#card'))
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1))', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' }
      ]);

    const parent = createAnimation()
      .duration(2000)
      .iterations(Infinity)
      .addAnimation([squareA]);

    parent.play();
  }
}

//archivo para programar la pagina
