import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isLoggedIn() && this.loginService.getUserRole() === 'PARTICIPANTE') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
