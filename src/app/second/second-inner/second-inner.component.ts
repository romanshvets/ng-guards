import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: 'second-inner.component.html'
})
export class SecondInnerComponent {

  constructor(
    private readonly router: Router
  ) {}

  handleNavigationButtonClick(): void {
    this.router.navigate(['/']);
  }
}
