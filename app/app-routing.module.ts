import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AboutComponent } from './pages/about/about.component'
import { HomeComponent } from './pages/home/home.component'
import { PricingComponent } from './pricing/pricing/pricing.component'

export const routes: Routes = [
  { path: '', redirectTo: 'pricing', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
