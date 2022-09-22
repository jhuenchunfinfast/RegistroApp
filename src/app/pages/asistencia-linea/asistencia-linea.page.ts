import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia-linea',
  templateUrl: './asistencia-linea.page.html',
  styleUrls: ['./asistencia-linea.page.scss'],
})
export class AsistenciaLineaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  generarQr() {
    this.router.navigate(['/qr']);
  }

}
