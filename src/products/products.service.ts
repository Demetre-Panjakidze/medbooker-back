import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId
    };

    getProducts() {
        return [...this.products];
    }

    getSingleProduct(prodId: string) {
        const product = this.findProduct(prodId)[0];
        return {...product};
    }

    updateProduct(prodId: string, title: string, desc: string, price: number) {
        const [product, productIndex] = this.findProduct(prodId);
        const updateProduct = {...product};
        if (title) {
            updateProduct.title = title;
        } 
        if (desc) {
            updateProduct.desc = desc;
        }
        if (price) {
            updateProduct.price = price;
        }
        this.products[productIndex] = updateProduct;
    }

    deleteProduct(prodId: string) {
        const [_, productIndex] = this.findProduct(prodId);
        this.products.splice(productIndex, 1);
    }

    private findProduct(id:string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id == id);
        const product = this.products[productIndex];
        if(!product) {
            throw new NotFoundException('Could not found product');
        }
        return [product, productIndex];
    }

    
}