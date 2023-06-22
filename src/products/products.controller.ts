import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body("title") prodTitle: string,
    @Body("description") description: string,
    @Body("price") price: number
  ): any {
    const generateId = this.productsService.insertProduct(
      prodTitle,
      description,
      price
    );
    return { id: generateId };
  } 

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':prodId')
  getProduct(@Param('prodId') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':prodId')
  updateProduct(@Param('prodId') prodId: string, 
    @Body("title") prodTitle: string,
    @Body("description") description: string,
    @Body("price") price: number
  ) {
    this.productsService.updateProduct(prodId, prodTitle, description, price);
    return null;
  }

  @Delete(':prodId')
  removeProduct(@Param('prodId') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return null;
  }
}
