import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cart, Item, ShippingAddress } from '../models/cart';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

export const round2 = (num: number) =>
  Math.round(num * 100 + Number.EPSILON) / 100;

const defaultCart: Cart = {
  items: [],
  shippingAddress: {
    fullName: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    lat: 0,
    lng: 0
  },
  paymentMethod: '',
  itemsCount: 0,
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};
@Injectable({ providedIn: 'root' })
export class CartService {
  private currentCartSubject: BehaviorSubject<Cart>;
  public currentCart: Observable<Cart>;

  constructor(private http: HttpClient) {
    this.currentCartSubject = new BehaviorSubject<Cart>(
      localStorage.getItem('currentCart')
        ? JSON.parse(localStorage.getItem('currentCart') || '{}')
        : defaultCart
    );
    this.currentCart = this.currentCartSubject.asObservable();
  }

  public get currentCartValue(): Cart {
    return this.currentCartSubject.value;
  }

  add(item: Item): Observable<string> {
    return this.http
      .get<Product>(`${environment.apiUrl}/api/products/${item._id}`, {
        responseType: 'json',
      })
      .pipe(
        map((product) => {
          const cart = this.currentCartSubject.value;
          const existItem = cart.items.find((x) => x._id === item._id);
          if (
            (existItem && product.seats < existItem.days + 1) ||
            (!existItem && product.seats <= 0)
          ) {
            throw new Error('Already car is Booked');
          }
          const items = existItem
            ? cart.items.map((x) =>
                x._id === existItem._id
                  ? { ...existItem, days: existItem.days + 1 }
                  : x
              )
            : [...cart.items, item];
          const newCart = { ...cart, ...calcCart(items) };
          localStorage.setItem('currentCart', JSON.stringify(newCart));
          this.currentCartSubject.next(newCart);
          return product.name;
        })
      );
  }

  remove(productId: String) {
    const cart = this.currentCartSubject.value;
    let items: Item[] = cart.items;
    const existItem = cart.items.find((x) => x._id === productId);
    if (existItem) {
      if (existItem.days > 1) {
        items = cart.items.map((x) =>
          x._id === existItem._id
            ? { ...existItem, days: existItem.days - 1 }
            : x
        );
      } else {
        items = cart.items.filter((x) => x._id !== productId);
      }
    }
    const newCart = { ...cart, ...calcCart(items) };
    localStorage.setItem('currentCart', JSON.stringify(newCart));
    this.currentCartSubject.next(newCart);
  }

  clearItems() {
    const cart = this.currentCartSubject.value;
    const newCart = { ...cart, ...calcCart([]) };
    localStorage.setItem('currentCart', JSON.stringify(newCart));
    this.currentCartSubject.next(newCart);
  }

  saveShippingAddress(shippingAddress: ShippingAddress) {
    const cart = this.currentCartSubject.value;
    cart.shippingAddress = {
      ...shippingAddress,
      lat: cart.shippingAddress.lat,
      lng: cart.shippingAddress.lng,
    };
    localStorage.setItem('currentCart', JSON.stringify(cart));
    this.currentCartSubject.next(cart);
  }

  saveShippingLocation(lat: number, lng: number) {
    const cart = this.currentCartSubject.value;
    cart.shippingAddress.lat = lat;
    cart.shippingAddress.lng = lng;
    localStorage.setItem('currentCart', JSON.stringify(cart));
    this.currentCartSubject.next(cart);
  }

  getShippingAddress() {
    const cart = this.currentCartSubject.value;
    return `${cart.shippingAddress.address}, ${cart.shippingAddress.city}, ${cart.shippingAddress.country}`;
  }//Retrieves the formatted shipping address from the cart
  
  savePaymentMethod(paymentMethod: string) {
    const cart = this.currentCartSubject.value;
    cart.paymentMethod = paymentMethod;
    localStorage.setItem('currentCart', JSON.stringify(cart));
    this.currentCartSubject.next(cart);
  }
}


const calcCart = (items: Item[]) => {

  const itemsPrice = round2(
    items.reduce((a, c) => a + c.price * c.days, 0)
  );
  const itemsCount = items.reduce((a, c) => a + c.days, 0);
  const shippingPrice = itemsPrice === 0 ? 0 : itemsPrice > 200 ? 0 : 20;

  let taxPercentage = 0.1; // Default tax percentage for other items

  items.forEach((item) => {
    const carName = item.name.toLowerCase(); // Assuming car name is in lowercase
    if (
      carName === 'audi a4' ||
      carName === 'mercedes-benz a-class limousine' ||
      carName === 'mini cooper' ||
      carName === 'bmw x7'
    ) {
      taxPercentage = 0.4; // 40% tax for Audi, Mercedes-Benz, MINI Cooper, BMW
    } else if (
      carName === 'tata safari' ||
      carName === 'maruti grand vitara' ||
      carName === 'hyundai creta' ||
      carName === 'mahindra scorpio n' ||
      carName === 'volkswagen' ||
      carName === 'honda city' ||
      carName === 'skoda slavia' ||
      carName === 'hyundai verna'
    ) {
      taxPercentage = 0.2; // 20% tax for Tata Safari, Maruti Grand Vitara, Hyundai Creta, Mahindra Scorpio N, etc.
    }else{
      taxPercentage = 0.1;
    }
    
  });

  const taxPrice = round2(itemsPrice * taxPercentage);
  const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

 

  return {
    items: items,
    itemsCount,
    itemsPrice,
    taxPrice,
    shippingPrice,
    
    totalPrice,
  };}
