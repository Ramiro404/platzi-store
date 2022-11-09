import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDTO } from 'src/dtos/product.dto/product.dto';
import { Product } from 'src/entity/product/product';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: '',
      stock: 12,
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | null {
    const product = this.products.find((product) => product.id === id);
    if (product) return product;
    return null;
  }

  save(body: any): Product {
    body.id = ++this.counterId;
    this.products.push(body);
    return body;
  }

  update(id: number, body: any): Product | null {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        ...body,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) throw new NotFoundException(`Product #${id} not found`);
    this.products.splice(index, 1);
    return true;
  }
}
