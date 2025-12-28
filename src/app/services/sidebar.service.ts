import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  #isOpen = signal<boolean>(false);

  public readonly isOpen = this.#isOpen.asReadonly();

  public open(): void {
    this.#isOpen.set(true);
  }

  public close(): void {
    this.#isOpen.set(false);
  }
}
