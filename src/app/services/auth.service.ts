import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #user = signal<string | null>(null);

  public readonly isLoggedIn = computed(() => this.#user() !== null);
  public readonly username = computed(() => this.#user());

  public login(username: string): void {
    this.#user.set(username);
  }

  public logout(): void {
    this.#user.set(null);
  }
}
