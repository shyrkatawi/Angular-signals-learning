import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);

  protected itemsInCart = this.cartService.totalItems;
  protected totalCartPrice = this.cartService.totalPrice;

  protected isLoggedIn = this.authService.isLoggedIn;
  protected username = this.authService.username;

  protected logout(): void {
    this.authService.logout();
  }
}
