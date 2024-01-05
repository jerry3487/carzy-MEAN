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
  
}

export interface ProductFilter {
  category: string;
  name: string;
}
