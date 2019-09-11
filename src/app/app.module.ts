import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { AddProductComponent } from "./add-product/add-product.component";
// Added library
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpdateProductComponent } from './update-product/update-product.component';

@NgModule({
  declarations: [AppComponent, ListProductsComponent, AddProductComponent, UpdateProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
