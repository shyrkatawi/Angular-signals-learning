import { Component, inject } from '@angular/core';
import { Cart } from '../cart/cart';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-cart-sidebar',
  imports: [Cart, RouterLink],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebar {
  private readonly sideBarService = inject(SidebarService);

  protected closeSidebar() {
    this.sideBarService.close();
  }
}
