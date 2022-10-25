import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { ConsumoAPIService } from 'src/app/services/consumo-api.service';
import { Camera, CameraResultType } from '@capacitor/camera';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  responseApi;
  userHome: any;
  value = "dcaresg";
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private consumoApi: ConsumoAPIService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user_name;
      }
    });
  }

  //metodos
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  Mostrar() {
    this.consumoApi.getPosts().subscribe(
      (res) => {
        this.responseApi = '' + res[0].title;
        console.log(res[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Actualizar() {
    let post = {
      userId: 1,
      title: 'Post actualizado',
      body: 'Este post ha sido actualizado',
    };

    this.consumoApi.updatePost(1, post).subscribe(
      (success) => {
        this.responseApi = `${success.title}`;
        console.log(success.title);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Eliminar() {
    this.consumoApi.deletePost(1).subscribe(() => {
      this.responseApi = `El post con id 1 ha sido eliminado`;
    });
  }

  tomarFoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    var imageUrl = image.webPath;
  };
 
}
