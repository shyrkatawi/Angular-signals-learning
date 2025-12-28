import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',
  imports: [CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  private readonly cartService = inject(CartService);

  protected readonly confirmed = signal<boolean>(false);

  protected readonly totalCartPrice = this.cartService.totalPrice;
  protected readonly isCartEmpty = this.cartService.isEmpty;
  protected readonly cartItems = this.cartService.items;

  protected confirmOrder(): void {
    this.confirmed.set(true);
    this.cartService.clearCart();
  }
}
