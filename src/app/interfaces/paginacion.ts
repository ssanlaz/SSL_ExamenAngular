import { Products } from "./products";

export interface Paginacion {

    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    results: Products[];

}
