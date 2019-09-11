import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../services/product.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProductComponent implements OnInit {
  addId = 0;
  addPname = "";
  addDescription = "";
  addPrice = 0;
  addUnits = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  addItem() {
    var newProduct = {
      id: this.addId,
      name: this.addPname,
      description: this.addDescription,
      price: this.addPrice,
      units: this.addUnits
    };
    console.log(newProduct);
    this.productService.addProduct(newProduct).subscribe(data => {
      if ((data = true)) {
        this.router.navigateByUrl("/list");
      } else {
        console.log("error");
      }
    });
  }
}
