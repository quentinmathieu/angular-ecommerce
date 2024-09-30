import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    name: '',
    price: 0,
    promotion: false,
    discount: 0,
    category: {
      name: '',
      _id: ''
    }
  };

  constructor(private productService: ProductService) { }

  addProduct(): void {
    this.productService.addProduct(this.product).subscribe(response => {
      console.log('Product added successfully!', response);

      // Réinitialiser le formulaire 
      this.product = {
        name: '',
        price: 0,
        promotion: false,
        discount: 0,
        category:
        {
          name: '',
          _id: ''
        }
      };
    });
  }
}