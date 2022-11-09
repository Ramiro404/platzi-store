import { Controller, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateOrderDto } from '../dtos/orders.dto';
import { CreateUserDto } from '../dtos/users.dto';
import { Order } from '../entities/order.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  counterId = 1;
  orders: Order[] = [];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((item) => item.user.id === id);
    if (!order) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return order;
  }

  create(data: CreateUserDto) {
    this.counterId = this.counterId + 1;
    const newOrder = {
      id: this.counterId,
      ...data,
    };
    this.orders.push();
    return newOrder;
  }

  update(id: number, changes: UpdateOrderDto) {
    const user = this.findOne(id);
    const index = this.orders.findIndex((item) => item.user.id === id);
    this.orders[index] = {
      ...user,
      ...changes,
    };
    return this.orders[index];
  }

  remove(id: number) {
    const index = this.orders.findIndex((item) => item.user.id === id);
    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.orders.splice(index, 1);
    return true;
  }
}
