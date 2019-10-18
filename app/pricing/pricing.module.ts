import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing/pricing.component';
import { PricingService } from './pricing.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PricingComponent],
  providers: [PricingService]
})
export class PricingModule { }