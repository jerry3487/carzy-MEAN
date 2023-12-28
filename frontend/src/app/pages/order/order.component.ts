import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  currentUser: UserInfo | null = null;
  loading = true;
  error = false;
  order!: Order;
  orderService: OrderService;
  displayedColumns: string[] = [
    'image',
    'name',
    'price',
    'days',
    'subtotal',
  ];

  constructor(
    private titleService: Title,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    orderService: OrderService,
    private cd: ChangeDetectorRef,
    private authService: AuthService
  ) {
    this.orderService = orderService;
  }

  ngOnInit() {
    this.authService.currentUser.subscribe((x) => (this.currentUser = x));
    const routeParams = this.route.snapshot.paramMap;
    const orderId = routeParams.get('id');
    if (orderId) {
      this.getOrder(orderId);
    } else {
      this.snackBar.open('Booking Not Found', '', {
        panelClass: 'error-snackbar',
      });
    }
  }

  private getOrder(orderId: string) {
    this.orderService.getOrder(orderId).subscribe(
      (data) => {
        this.order = data;
        this.cd.detectChanges();
        this.titleService.setTitle(`Order ${this.order._id}`);
        this.loading = false;
      },
      (err) => {
        this.loading = false;
        this.error = true;
        this.snackBar.open(err, '', { panelClass: 'error-snackbar' });
      }
    );
  }

  deliverOrder() {
    this.orderService.deliver(this.order._id).subscribe(
      (data) => {
        this.getOrder(this.order._id);
        this.snackBar.open('Booking delivered successfully', '', {
          panelClass: 'success-snackbar',
        });
      },
      (err) => {
        this.snackBar.open(err, '', { panelClass: 'error-snackbar' });
      }
    );
  }
  makePayment() {
    // Add your payment processing logic here
    // For demonstration, show a simple success message using MatSnackBar
    this.snackBar.open('Payment Successful!', '', {
      panelClass: 'success-snackbar',
    });
  }
}
