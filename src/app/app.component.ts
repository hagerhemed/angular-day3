import { ProductsComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import {ProductCardDirective} from './directives/product-card.directive';
import {EgyptianNationalIdPipe} from './pipes/egyptian-national-id.pipe'
import { OrderComponent } from './components/order/order.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,OrderComponent,FooterComponent,ProductCardDirective,EgyptianNationalIdPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerceApp';
}
