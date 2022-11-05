import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';


@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.page.html',
  styleUrls: ['./veralumnos.page.scss'],
})
  
export class VeralumnosPage implements OnInit {
  usuarios:any;

  constructor(private consumoApi: ConsumoAPIService) { }

  ngOnInit() {
    this.consumoApi.getUsers().subscribe(
    (res) => {
      this.usuarios=res
      console.log(this.usuarios[0]);
    },
    (error) => {
      console.log(error);
    }
  );
  }

}
