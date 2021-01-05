import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent, FirstComponentCanDeactivateGuard } from './first';
import { SecondComponent, SecondComponentCanActivateGuard } from './second';
import { SecondInnerComponent } from './second/second-inner';


const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'first' },
  {
    path: 'first',
    component: FirstComponent,
    canDeactivate: [FirstComponentCanDeactivateGuard]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [SecondComponentCanActivateGuard]
  },
  {
    path: 'second/inner',
    component: SecondInnerComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    SecondInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
