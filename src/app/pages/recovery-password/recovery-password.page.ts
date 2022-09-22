import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss'],
})
export class RecoveryPasswordPage implements OnInit {

  formRecovery = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)])
  })

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  mostrarAlerta() {
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'RegistroAPP',
      subHeader: 'Favor revisar su bandeja de entrada',
      message: 'Si no esta en bandeja de entrada revisar en correos no deseados',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
