import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import {
  AlertController,
  NavController,
  AnimationController,
  createAnimation,
  SelectValueAccessor,
} from '@ionic/angular';
import { AuthenticationService } from '../../service/authentication.service';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  message;
  //esto interpreta el formulario de la pagina(validacion)
  formLogin = new FormGroup({
    correo: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(50),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(8),
    ]),
  });

  constructor(
    private consumoApi: ConsumoAPIService,
    private authService: AuthenticationService,
    private navCtrl: NavController,
    private router: Router,
    private alertController: AlertController,
    private animationCtrl: AnimationController
  ) {
    this.animacion();
  }

  ngOnInit() {}

  irAlaPaginaDeInicio() {
    let navigationExtras: NavigationExtras = {
      state: {
        correo: this.formLogin.value.correo,
      },
    };
    this.router.navigate(['/folder/Inbox'], navigationExtras);
  }

  iniciarSesion() {
    if (
      this.formLogin.value.correo.trim() != '' &&
      this.formLogin.value.contrasena.trim() != ''
    ) {
      this.authService.login(
        this.formLogin.value.correo,
        this.formLogin.value.contrasena
      );
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Informacion:',
      message: 'Correo incorrecto',
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  animacion() {
    const squareA = createAnimation()
      .addElement(document.querySelector('#card'))
      .duration(5000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);

    const parent = createAnimation()
      .duration(2000)
      .iterations(Infinity)
      .addAnimation([squareA]);

    parent.play();
  }
  Mostrar() {
    this.consumoApi.getPosts().subscribe(
      (res) => {
        this.message = '' + res[0].title;
        console.log(res[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Actualizar() {
    var post = {
      userId: 1,
      title: 'Prueba',
      body: 'buenas tardes',
    };
    this.consumoApi.updatePost(1, post).subscribe(
      (success) => {
        this.message = '' + success.title;
        console.log(success.title);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
