import { Component, inject } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { CartService } from "../../services/cart.service";
import { Product } from "../../models/product.model";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);

  protected products = this.productService.products;
  protected productsCount = this.productService.count;
  protected isProductsLoading = this.productService.loading;

  protected cartTotalItems = this.cartService.totalItems;

  protected addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  protected removeFromCart(productId: string): void {
    this.cartService.decreaseQuantity(productId);
  }
}
