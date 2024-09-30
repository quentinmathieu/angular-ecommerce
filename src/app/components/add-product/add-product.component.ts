import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {
    name: 'test',
    price: 0,
    promotion: false,
    discount: 0,
    category: {
      name: 'test',
      _id: ''
    }
  };
  categories: any[] = [];
  selectedCategoryId: string = '';
  newCategoryName: string = '';
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router
  ) { };

  ngOnInit(): void {
    this.loadCategories();
  }
  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }
  addProduct(): void {
    this.categories.forEach((cat)=> {if (cat.name == this.product.category.name){ this.product.category = cat }});
    if (this.product.category._id) {
      this.saveProduct();
    } else if (this.product.category.name) {

      // Si une nouvelle catégorie est saisie, on l'ajoute directement au produit
      this.product.category = {
        _id: this.generateCategoryId(),
        name: this.product.category.name,
      };
      this.saveProduct();
    }
    else{
      console.log('nothing added')
    }
  }

  generateCategoryId(): string {
    const timestamp = Math.floor(new Date().getTime() / 1000).toString(16);
    const machineIdentifier = Math.floor(Math.random() *
      0xFFFFFF).toString(16).padStart(6, '0');
    const processIdentifier = Math.floor(Math.random() *
      0xFFFF).toString(16).padStart(4, '0');
    const counter = Math.floor(Math.random() *
      0xFFFFFF).toString(16).padStart(6, '0');

    return timestamp + machineIdentifier + processIdentifier + counter;
  }
  saveProduct(): void {
    this.productService.addProduct(this.product).subscribe(() => {
      this.router.navigate(['/products']);
    });
  }
}