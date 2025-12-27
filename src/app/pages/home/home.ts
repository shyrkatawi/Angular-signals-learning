import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { ProductList } from '../../components/product-list/product-list';

@Component({
  selector: 'app-home',
  imports: [ProductList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  protected isProductsLoading = this.productService.isLoading;
  protected productsError = this.productService.error;
  protected products = this.productService.products;
  protected productsCount = this.productService.count;

  protected cartTotalItems = this.cartService.totalItems;

  protected addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  protected removeFromCart(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }
}
