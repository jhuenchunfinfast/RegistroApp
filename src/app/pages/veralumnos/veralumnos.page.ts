import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';


@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.page.html',
  styleUrls: ['./veralumnos.page.scss'],
})

interface Usuario{
  body:string;
  id:number;
  email:string;
  name:string;
  postId:number;

}
export class VeralumnosPage implements OnInit {
  usuarios:Usuario[];

  constructor(private consumoApi: ConsumoAPIService) { }

  ngOnInit() {
    this.consumoApi.getUsers().subscribe(
    (res) => {
      this.usuarios=res
      console.log(this.usuarios);
    },
    (error) => {
      console.log(error);
    }
  );
  }

}
