import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-update-product",
  templateUrl: "./update-product.component.html",
  styleUrls: ["./update-product.component.css"]
})
export class UpdateProductComponent implements OnInit {
  objectidpassing;
  id;
  pname;
  description;
  price;
  units;
  paramid;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.paramid = params.get("id");
    });

    this.productService.getItem(this.paramid).subscribe(data => {
      this.id = data[0].id;
      this.pname = data[0].name;
      this.description = data[0].description;
      this.price = data[0].price;
      this.units = data[0].units;
      this.objectidpassing = data[0]._id;
    });
  }

  updateItem() {
    var newProduct = {
      id: this.id,
      name: this.pname,
      description: this.description,
      price: this.price,
      units: this.units,
      objectIDpassing: this.objectidpassing
    };
    this.productService.updateItem(newProduct).subscribe(data => {
      if (data == true) {
        this.router.navigateByUrl("/list");
      }
    });
  }
}
