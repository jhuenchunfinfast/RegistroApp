import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';

@Component({
  selector: 'app-verasignaturas',
  templateUrl: './verasignaturas.page.html',
  styleUrls: ['./verasignaturas.page.scss'],
})

export class VerasignaturasPage implements OnInit {
  asignaturas:any;

  constructor(private consumoApi: ConsumoAPIService) { }

  ngOnInit() {
    this.consumoApi.getUsers().subscribe(
    (res) => {
      this.asignaturas=res
      console.log(this.asignaturas[0].any);
    },
    (error) => {
      console.log(error);
    }
  );
  }

}
