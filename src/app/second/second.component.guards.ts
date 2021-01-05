import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class SecondComponentCanActivateGuard implements CanActivate {

  constructor(private readonly router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return of(this.router.createUrlTree(['/second/inner'])).pipe(
      delay(1000)
    );
  }
}
