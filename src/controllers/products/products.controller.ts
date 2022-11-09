import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from 'src/entity/product/product';
import { ProductsService } from 'src/services/products/products.service';
import { ParseIntPipe } from 'src/pipes/parse-int/parse-int.pipe';
import {
  CreateProductDTO,
  UpdateProductDTO,
} from 'src/dtos/product.dto/product.dto';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  // @Get()
  // getProduct(@Query('limit') limit = 10, @Query('offset') offset = 0): string {
  //   return `The product limit=>${limit} offset=>${offset}`;
  // }

  // @Get(':productId')
  // getProducts(@Param('productId') productId: string) {
  //   return `product ${productId}`;
  // }

  // @Get(':id/products/:productId')
  // getCategories(
  //   @Param('id') id: string,
  //   @Param('productId') productId: string,
  // ) {
  //   return `Category ${id} product ${productId}`;
  // }

  @Post()
  save(@Body() body: CreateProductDTO): Product {
    return this.productService.save(body);
  }

  @Get()
  findAll(): Product[] {
    return this.productService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number): Product | null {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateProductDTO,
  ): Product | null {
    return this.productService.update(+id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number): boolean {
    return this.productService.remove(id);
  }
}
/**
 * PIPES: Transforman los datos de entrada a la forma deseada(cadena a texto)
 * validación: evalúa los datos de entrada y, si son válidos, simplemente los pasa
 * cambios; de los contrario, lanza una excepción cuando los datos son incorrectos.
 */
