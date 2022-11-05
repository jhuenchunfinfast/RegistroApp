import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'folder/Inbox', icon: 'home' },
    { title: 'Asistencia en linea', url: 'asistencia-linea', icon: 'qr-code' },
    { title: 'Ver Alumnos', url: 'veralumnos', icon: 'people' },
    { title: 'Ver Asignatura', url: 'verasignaturas', icon: 'library' },
  ];
  constructor(private readonly authenticationService: AuthenticationService) { }

  cerrarSesion() {
    console.log("click");
    this.authenticationService.logout();
  }

}
