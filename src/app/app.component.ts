import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url:'folder/Inbox', icon:'home'},
    { title: 'Asistencia en linea', url:'asistencia-linea', icon:'qr-code'},
    { title: 'Ver Alumnos', url:'veralumnos', icon:'qr-code'},
    { title: 'Ver Asignatura', url:'verasignaturas', icon:'qr-code'},
  ];
  constructor() {}
}
