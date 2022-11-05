import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';

@Component({
  selector: 'app-verasignaturas',
  templateUrl: './verasignaturas.page.html',
  styleUrls: ['./verasignaturas.page.scss'],
})
export class VerasignaturasPage implements OnInit {
  asignaturas: Asignatura[];

  constructor(private consumoApi: ConsumoAPIService) { }

  ngOnInit() {
    this.consumoApi.getAsignaturas().subscribe(
      (res) => {
        this.asignaturas = res
        console.log(this.asignaturas);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}



type Asignatura = {
  id: number;
  name: string;
  email: string;
  body: string;
}