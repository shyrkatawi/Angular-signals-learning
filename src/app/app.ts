import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { SidebarService } from './services/sidebar.service';
import { CartSidebar } from './components/cart-siderbar/cart-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CartSidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly sidebarService = inject(SidebarService);

  protected isCartSidebarOpen = this.sidebarService.isOpen;
}
