import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paginacion } from '../interfaces/paginacion';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductosSerService {

  httpClient = inject(HttpClient);
  private Url : string = "https://peticiones.online/api/products"

  constructor() { }


getAll(page : number, perPage: number):Observable<Paginacion>{
  return this.httpClient.get<Paginacion>(`${this.Url}?page=${page}&per_page=${perPage}`);
}

getById(_id : string): Observable<Products>{
  return this.httpClient.get<Products>((`${this.Url}/${_id}`));
}


}
