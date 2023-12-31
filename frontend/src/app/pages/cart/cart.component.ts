import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Cart, Item } from '../../models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;
  displayedColumns: string[] = [
    'image',
    'name',
    'price',
    'days',
    'subtotal',
  ];
  error: string = '';

  constructor(
    private titleService: Title,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Booking');
    this.cartService.currentCart.subscribe((x) => (this.cart = x));
  }

  add(item: Item) {
    this.cartService.add(item).subscribe(
      (productName) =>
        this.snackBar.open(`${productName} added to the Booking`, '', {
          panelClass: 'success-snackbar',
        }),
      (err) => {
        this.snackBar.open(err.message, '', { panelClass: 'error-snackbar' });
      }
    );
  }

  remove(item: Item) {
    this.snackBar.dismiss();
    this.cartService.remove(item._id);
  }
  checkout() {
    if (this.cart.itemsCount === 0) {
      this.snackBar.open('Booking is empty', '', { panelClass: 'error-snackbar' });
      return;
    }
    this.router.navigate(['/shipping']);
  }

  selectedDistance: number | undefined;
  loyaltyBonus: number = 0;

  

  calculateLoyalty() {
    if (this.selectedDistance !== undefined) {
      this.loyaltyBonus = Math.floor(this.selectedDistance / 50);
    } else {
      this.loyaltyBonus = 0;
    }
  }




}


