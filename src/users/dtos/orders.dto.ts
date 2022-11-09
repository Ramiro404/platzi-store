import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Product } from 'src/products/entities/product.entity';
import { User } from '../entities/user.entity';

export class CreateOrderDto {
  @ApiProperty({ description: 'Order user' })
  @IsNotEmpty()
  readonly user: User;

  @ApiProperty({ description: 'Order product' })
  @IsNotEmpty()
  readonly product: Product;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
