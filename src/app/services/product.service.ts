import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url = "http://localhost:3000";
  product = {};
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<any>(this.url + "/list");
  }

  addProduct(product) {
    console.log("SERVICE SERVICE");
    return this.http.post<any>(this.url + "/add", product);
  }

  deleteProduct(id) {
    return this.http.post<any>(this.url + "/deleteitem", {
      id: id
    });
  }

  getItem(id) {
    return this.http.post<any>(this.url + "/getItem", { passingid: id });
  }

  updateItem(product) {
    return this.http.post<any>(this.url + "/update", product);
  }
}
