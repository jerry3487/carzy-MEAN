import { Product } from './models/product.model';
import { User } from './models/user.model';
import bcrypt from 'bcryptjs';

export const products: Product[] = [
  {
    name: "BMW X7",
    slug: "bmw",
    image: "../assets/images/products/bmw.webp",
    brand: "BMW",
    category: "LUXURY",
    carmodel: 2020,
    price: 3500,
    seats: 5,
  },
  {
    name: "Mercedes-Benz A-Class Limousine",
    slug: "benz",
    image: "../assets/images/products/benz.webp",
    brand: "Mercedes-Benz",
    category: "LUXURY",
    carmodel: 2021,
    price: 4000,
    seats: 4,
  },
  {
    name: "MINI Cooper",
    slug: "cooper",
    image: "../assets/images/products/mini.webp",
    brand: "MINI Cooper",
    category: "LUXURY",
    carmodel: 2022,
    price: 4000,
    seats: 2,
  },
  {
    name: "Audi A4",
    slug: "audi",
    image: "../assets/images/products/audi.webp",
    brand: "Audi",
    category: "LUXURY",
    carmodel: 2022,
    price: 2500,
    seats: 4,
  },
  {
    name: "Mahindra Scorpio N",
    slug: "mahindra",
    image: "../assets/images/products/suv1.webp",
    brand: "Mahindra",
    category: "SUV",
    carmodel: 2022,
    price: 2000,
    seats: 6,
  },
  {
    name: "Hyundai Creta",
    slug: "hyundai",
    image: "../assets/images/products/suv2.webp",
    brand: "Hyundai",
    category: "SUV",
    carmodel: 2020,
    price: 1500,
    seats: 5,
  },
  {
    name: "Maruti Grand Vitara",
    slug: "maruti",
    image: "../assets/images/products/suv3.webp",
    brand: "Maruti",
    category: "SUV",
    carmodel: 2019,
    price: 1800,
    seats: 5,
  },
  {
    name: "Tata Safari",
    slug: "tata",
    image: "../assets/images/products/suv4.webp",
    brand: "TATA",
    category: "SUV",
    carmodel: 2017,
    price: 1300,
    seats: 7,
  },
  {
    name: "Hyundai Verna",
    slug: "verna",
    image: "../assets/images/products/sedan1.webp",
    brand: "Hyundai",
    category: "SEDAN",
    carmodel: 2020,
    price: 1500,
    seats: 5,
  },
  {
    name: "Skoda Slavia",
    slug: "skoda",
    image: "../assets/images/products/sedan2.webp",
    brand: "Skoda",
    category: "SEDAN",
    carmodel: 2018,
    price: 1200,
    seats: 5,
  },
  {
    name: "Honda City",
    slug: "honda",
    image: "../assets/images/products/sedan3.webp",
    brand: "Honda",
    category: "SEDAN",
    carmodel: 2017,
    price: 1200,
    seats: 5,
  },
  {
    name: "Volkswagen Virtus",
    slug: "volkswagen",
    image: "../assets/images/products/sedan4.webp",
    brand: "Volkswagen",
    category: "SEDAN",
    carmodel: 2020,
    price: 1600,
    seats: 5,
  },
  {
    name: "Maruti Dzire",
    slug: "dzire",
    image: "../assets/images/products/compact1.webp",
    brand: "Maruti",
    category: "COMPACT",
    carmodel: 2021,
    price: 1000,
    seats: 5,
  },
  {
    name: "Honda Amaze",
    slug: "amaze",
    image: "../assets/images/products/compact2.webp",
    brand: "Honda",
    category: "COMPACT",
    carmodel: 2022,
    price: 1100,
    seats: 5,
  },
  {
    name: "Hyundai Aura",
    slug: "aura",
    image: "../assets/images/products/compact3.webp",
    brand: "Hyundai",
    category: "COMPACT",
    carmodel: 2020,
    price: 900,
    seats: 5,
  },
  {
    name: "Tata Tigor EV",
    slug: "tigor ev",
    image: "../assets/images/products/compact4.webp",
    brand: "TATA",
    category: "COMPACT",
    carmodel: 2023,
    price: 2000,
    seats: 5,
  },
  {
    name: "Maruti Eeco",
    slug: "eeco",
    image: "../assets/images/products/van1.webp",
    brand: "Maruti",
    category: "MINI-VAN",
    carmodel: 2018,
    price: 1200,
    seats: 8,
  },
  {
    name: "Toyota Innova Crysta",
    slug: "innova",
    image: "../assets/images/products/van2.webp",
    brand: "Toyota",
    category: "MINI-VAN",
    carmodel: 2020,
    price: 1500,
    seats: 8,
  },
  {
    name: "Toyota Fortuner",
    slug: "fortuner",
    image: "../assets/images/products/van3.webp",
    brand: "Toyota",
    category: "MINI-VAN",
    carmodel: 2022,
    price: 1800,
    seats: 8,
  },
  {
    name: "Mahindra XUV300",
    slug: "xuv",
    image: "../assets/images/products/van4.webp",
    brand: "Mahindra",
    category: "MINI-VAN",
    carmodel: 2018,
    price: 1000,
    seats: 8,
  },
];

export const users: User[] = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync('123') ,
    isAdmin: true,
  },
  {
    name: "damo",
    email: "damo@gmail.com",
    password: bcrypt.hashSync('123') ,
    isAdmin: true,
  },
];
