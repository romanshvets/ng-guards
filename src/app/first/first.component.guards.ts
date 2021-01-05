import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirstComponent } from './first.component';


@Injectable({ providedIn: 'root' })
export class FirstComponentCanDeactivateGuard implements CanDeactivate<FirstComponent> {
  canDeactivate(
    component: FirstComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const messages: string[] = [];
    messages.push('In FirstComponent\'s CanDeactivate guard');
    messages.push(`Component unique ID: ${component.uniqueID}`);

    const ts = new Date();
    messages.push(`TS: ${ts.getHours()}:${ts.getMinutes()}:${ts.getSeconds()}:${ts.getMilliseconds()}`);

    console.warn(messages.join('\n'));
    return true;
  }
}
