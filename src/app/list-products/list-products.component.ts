import { Component, OnInit } from "@angular/core";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-list-products",
  templateUrl: "./list-products.component.html",
  styleUrls: ["./list-products.component.css"]
})
export class ListProductsComponent implements OnInit {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getList().subscribe(data => {
      this.products = data;
    });
  }

  deleteproduct(id) {
    this.productService.deleteProduct(id).subscribe(data => {
      if (data == true) {
        this.productService.getList().subscribe(data2 => {
          this.products = data2;
        });
      }
    });
  }
}
