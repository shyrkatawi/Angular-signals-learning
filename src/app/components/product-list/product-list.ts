import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  public readonly products = input.required<Product[] | undefined>();

  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);

  protected isLoggedIn = this.authService.isLoggedIn;

  protected addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
