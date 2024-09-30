import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component'; 
import { Constants } from './constants/constants'; 
import { ProductService } from './services/product.service'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({ declarations: [ AppComponent, ProductListComponent, AddProductComponent, ], imports: [ BrowserModule, HttpClientModule, FormsModule, AppRoutingModule ], providers: [Constants, ProductService], bootstrap: [AppComponent] }) export class AppModule { }