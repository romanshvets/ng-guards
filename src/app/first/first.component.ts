import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'first.component.html'
})
export class FirstComponent {

  public readonly uniqueID: string;

  constructor(
    private readonly router: Router
  ) {
    this.uniqueID = Math.random().toString(10).substr(2, 6);
  }

  handleNavigationButtonClick(): void {
    this.router.navigate(['/second']);
  }
}
