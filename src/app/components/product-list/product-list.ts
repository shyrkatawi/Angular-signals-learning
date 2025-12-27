import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  readonly #cartService = inject(CartService);
  public readonly products = input.required<Product[] | undefined>();

  protected addToCart(product: Product): void {
    this.#cartService.addToCart(product);
  }
}
