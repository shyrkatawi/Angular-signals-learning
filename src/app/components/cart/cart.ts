import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  private readonly cartService = inject(CartService);

  protected readonly isCartEmpty = this.cartService.isEmpty;
  protected readonly cartItems = this.cartService.items;
  protected readonly totalCartPrice = this.cartService.totalPrice;

  protected removeItemFromCart(productId: string): void {
    this.cartService.removeFromCart(productId);
  }
}
