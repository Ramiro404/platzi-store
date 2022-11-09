import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomersService } from './services/customers.service';
import { OrdersService } from './services/orders.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [CustomersController, UsersController],
  providers: [UsersService, CustomersService, OrdersService],
  imports: [ProductsModule],
})
export class UsersModule {}
