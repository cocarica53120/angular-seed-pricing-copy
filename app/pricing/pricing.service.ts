import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'

const prices = [
  {
    title: 'Free',
    price: '$0',
    features: [
      '10 users included',
      '2 GB of storage',
      'Email support',
      'Help center access',
    ],
    link: 'Sign up for free',
    linkClass: 'btn-outline-primary',
  },
  {
    title: 'Pro',
    price: '$15',
    features: [
      '20 users included',
      '10 GB of storage',
      'Priority email support',
      'Help center access',
    ],
    link: 'Get started',
    linkClass: 'btn-primary',
  },
  {
    title: 'Enterprise',
    price: '$29',
    features: [
      '30 users included',
      '15 GB of storage',
      'Phone and email support',
      'Help center access',
    ],
    link: 'Contact us',
    linkClass: 'btn-primary',
  }
]

@Injectable()
export class PricingService {

  constructor() { }

  getPrices() {
    return Observable.of(prices)
  }
}