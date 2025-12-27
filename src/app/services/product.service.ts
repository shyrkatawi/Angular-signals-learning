import { computed, Injectable, signal } from "@angular/core";
import type { Product } from "../models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  readonly #products = signal<Product[]>([]);
  readonly #loading = signal<boolean>(true);

  public readonly products = this.#products.asReadonly();
  public readonly loading = this.#loading.asReadonly();
  public readonly count = computed(() => this.#products().length);

  constructor() {
    this.fetchProducts();
  }

  private async fetchProducts() {
    this.#loading.set(true);
    // try {
    // const response = await fetch('https://fakestoreapi.com/products')
    // const data: Product[] = await response.json()
    // this.#products.set([
    //   {
    //     id: 'p1',
    //     title: 'Demo Product',
    //     price: 99,
    //   }
    // ]);
    // } catch (error) {
    //   console.error('Error fetching products:', error)
    // } finally {
    //   this.#loading.set(false)
    // }

    setTimeout(() => {
      this.#products.set([{ id: "p1", title: "Demo Product", price: 99 }]);
      this.#loading.set(false);
    }, 1_500);
  }
}
