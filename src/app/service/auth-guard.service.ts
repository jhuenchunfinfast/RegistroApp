import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  CanActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
