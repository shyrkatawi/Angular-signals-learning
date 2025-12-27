import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);

  protected toHome = () => {
    this.router.navigateByUrl('/');
  };

  protected toLogin = () => {
    this.router.navigateByUrl('/login');
  };

  protected toCheckout = () => {
    this.router.navigateByUrl('/checkout');
  };
}
