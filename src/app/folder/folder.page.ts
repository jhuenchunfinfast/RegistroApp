import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  userHome: any;
  value = "dcaresg";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userHome = this.router.getCurrentNavigation().extras.state.correo;
        console.log("Dato a mostrar" + this.userHome)
      }
    });

  }


ngOnInit() {
  this.folder = this.activatedRoute.snapshot.paramMap.get('id');
}

}
