import { Product } from 'src/products/entities/product.entity';
import { User } from './user.entity';

export class Order {
  //  // 👈 new entity
  date: Date;
  user: User;
  products: Product[];
}
