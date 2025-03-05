import { Component, inject } from '@angular/core';
import { Products } from '../../interfaces/products';
import { ProductosSerService } from '../../services/productos-ser.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent,NgxPaginationModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

misProductos : Products[];
ProdSer = inject(ProductosSerService);

  currentPage: number = 1; // Página actual
  totalPages: number = 4; // Total de páginas
  perPage: number = 5; // Cantidad de productos por página

  

  constructor(){
    this.misProductos = [];
  }


//Para sacar todos los productos llamando al service
ngOnInit(): void{
  this.ProdSer.getAll(1,this.perPage).subscribe(
    (response) => {
      if(response && response.results){
        this.misProductos = response.results;
        this.ProdSer.getAll(2,this.perPage).subscribe((response2) => {
          if(response2 && response2.results){
            this.misProductos = [...this.misProductos,...response2.results];
            this.totalPages =2;
          }
        });
      }
    });
}




}
