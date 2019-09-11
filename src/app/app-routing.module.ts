import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListProductsComponent } from "./list-products/list-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";

const routes: Routes = [
  { path: "list", component: ListProductsComponent },
  {
    path: "add",
    component: AddProductComponent
  },
  { path: "update/:id", component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
