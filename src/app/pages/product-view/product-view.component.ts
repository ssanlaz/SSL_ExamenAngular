import { Component, inject } from '@angular/core';
import { ProductosSerService } from '../../services/productos-ser.service';
import { Products } from '../../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { BotonesComponent } from "../../components/botones/botones.component";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

prodSer = inject(ProductosSerService);
miProducto !: Products;
activateRouter = inject(ActivatedRoute);


ngOnInit(): void{

  this.activateRouter.params.subscribe((params) => {
    let _id : string = params['_id'];

    if(_id){
       this.prodSer.getById(_id).subscribe(
        (producto) => {
          this.miProducto = producto;
          console.log(this.miProducto);
        },
        (error)=>{
          console.error('Error al cargar los detalles',error);
        });
      }
    });



}



}
