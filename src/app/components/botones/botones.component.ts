import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductosSerService } from '../../services/productos-ser.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  prodSer = inject(ProductosSerService);
  router = inject(Router);

  @Input() _id !: string;
  @Input() parent !: string;
  @Input() miProducto !: Products;



  constructor(){
    this._id = "";
    this.parent = "";
  }
}
