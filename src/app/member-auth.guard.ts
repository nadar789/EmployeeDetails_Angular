import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpService } from './emp.service';

@Injectable({
  providedIn: 'root'
})
export class MemberAuthGuard implements CanActivate {
  constructor(private empService: EmpService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.empService.MemberAuth(route.queryParams['email'], route.queryParams['password'])) {
       return true;
     } else {
       alert("Sorry, you are not allowed to open this link!");
       return false;
     }
  }
}