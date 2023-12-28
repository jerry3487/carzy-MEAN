import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  paragraphs = [
    {
      text: `Welcome to our car rental platform! We are dedicated to providing high-quality
      and reliable car rental services to meet your transportation needs. Whether you
      are planning a trip, need a temporary vehicle, or just want to experience the
      thrill of driving different cars, we've got you covered.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Our commitment to you goes beyond just providing a vehicle. We believe in forging lasting relationships with our customers, ensuring that every journey you undertake with our cars is memorable and hassle-free.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Safety is paramount in our operations. Each car in our fleet undergoes rigorous checks and maintenance to ensure it's in pristine condition. Additionally, we offer 24/7 roadside assistance to address any unforeseen situations.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Diversity and choice are at the heart of our service. Whether you're looking for a fuel-efficient compact car for city commuting or a spacious SUV for a family road trip, we have a vehicle that suits your needs.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Our booking process is designed with simplicity in mind. With just a few clicks, you can reserve the car of your choice, specify any additional requirements, and be on your way to your next destination.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Community and environment matter to us. That's why we regularly participate in local community events and initiatives. Moreover, our fleet includes eco-friendly vehicles, helping to reduce our carbon footprint and contribute to a greener future.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
    {
      text: `Thank you for considering us for your car rental needs. We're excited to be a part of your journeys, making every ride with us an experience to remember.`,
      style: {
        fontSize: '16px',
        lineHeight: '1.5',
        marginBottom: '15px',
      }
    },
  ];
}
