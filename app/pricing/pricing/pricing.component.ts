import { Component, OnInit } from '@angular/core';
import { PricingService } from '../pricing.service'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  title = 'Pricing'
  description = 'Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\'s built with default Bootstrap components and utilities with little customization.'
  res: any[]

  constructor(private pricingService: PricingService) { }

  ngOnInit() {
    this.pricingService.getPrices()
      .subscribe(res => this.prices = res)
  }

}