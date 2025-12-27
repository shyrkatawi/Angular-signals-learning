import { computed, effect, Injectable } from '@angular/core';
import type { Product } from '../models/product.model';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiProductsUrl = 'https://fakestoreapi.com/products';
  private readonly apiProductsResource = httpResource<Product[]>(() => this.apiProductsUrl, {
    defaultValue: [],
  });

  public readonly error = this.apiProductsResource.error;
  public readonly products = this.apiProductsResource.value.asReadonly();
  public readonly isLoading = this.apiProductsResource.isLoading;
  public readonly count = computed(() => this.products().length);

  constructor() {
    effect(() => {
      if (this.error()) {
        console.error('Error loading products:', this.error());
      }
    });
  }
}
