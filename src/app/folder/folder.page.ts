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
      console.log(this.router.getCurrentNavigation().extras);
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.user_name;
      }
    });
  }

  //metodos
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
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
