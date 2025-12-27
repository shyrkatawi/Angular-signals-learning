import { computed, Injectable, signal } from '@angular/core';
import type { Product } from '../models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #items = signal<CartItem[]>([]);

  public readonly items = this.#items.asReadonly();

  public readonly totalItems = computed(() =>
    this.#items().reduce((sum, item) => sum + item.quantity, 0),
  );

  public readonly totalPrice = computed(() =>
    this.#items().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );

  public readonly isEmpty = computed(() => this.#items().length === 0);

  public addToCart(product: Product, quantity = 1) {
    if (!product) {
      throw new Error('Product is required');
    }
    if (quantity <= 0 || !Number.isInteger(quantity)) {
      throw new Error('Quantity must be a positive integer');
    }

    const items = this.#items();
    const existingItemIndex = items.findIndex((item) => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity,
      };
      this.#items.set(updatedItems);
    } else {
      this.#items.set([...items, { product, quantity }]);
    }
  }

  public decreaseQuantity(productId: string, quantity = 1) {
    if (quantity <= 0 || !Number.isInteger(quantity)) {
      throw new Error('Quantity must be a positive integer');
    }
    const items = this.#items();
    const existingItemIndex = items.findIndex((item) => item.product.id === productId);
    if (existingItemIndex === -1) {
      throw new Error('Product not found in cart');
    }
    const updatedItems = [...items];
    const currentQuantity = updatedItems[existingItemIndex].quantity;
    if (currentQuantity <= quantity) {
      updatedItems.splice(existingItemIndex, 1);
    } else {
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: currentQuantity - quantity,
      };
    }
    this.#items.set(updatedItems);
  }

  public removeFromCart(productId: string) {
    const items = this.#items();
    const existingItemIndex = items.findIndex((item) => item.product.id === productId);
    if (existingItemIndex === -1) {
      throw new Error('Product not found in cart');
    }
    const updatedItems = items.filter((item) => item.product.id !== productId);
    this.#items.set(updatedItems);
  }

  public clearCart() {
    this.#items.set([]);
  }
}
