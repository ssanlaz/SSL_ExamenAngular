import { Component, Input } from '@angular/core';
import { Products } from '../../interfaces/products';
import { BotonesComponent } from "../botones/botones.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {



  @Input() miProducto !: Products;
}
