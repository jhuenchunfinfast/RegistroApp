import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';


@Component({
  selector: 'app-veralumnos',
  templateUrl: './veralumnos.page.html',
  styleUrls: ['./veralumnos.page.scss'],
})

export class VeralumnosPage implements OnInit {
  usuarios: User[];
  photos: Photo[];

  constructor(private consumoApi: ConsumoAPIService) { }

  ngOnInit() {
    this.consumoApi.getUsers().subscribe(
      (res) => {
        this.usuarios = res
        console.log(this.usuarios);
      },
      (error) => {
        console.log(error);
      }
    );

    this.consumoApi.getPhotos().subscribe(
      (res) => {
        this.photos = res;
      },
      (error) => {
        console.log(error);
      }
    )

    
  }

}

type Geo = {
  lat: string;
  lng: string;
}

type Address = {
  city: string;
  geo: Geo;
  street: string;
  suite: string;
  zipcode: string;
}

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
}

type User = {
  address: Address,
  company: Company,
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

type Photo = {
  albumId: string,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}