export interface Product {
odometer: any;
  _id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  carmodel: number;
  seats: number;
  // rating: number;
  // numReviews: number;
  // reviews: any[];
}

export interface ProductFilter {
  category: string;
  name: string;
}
