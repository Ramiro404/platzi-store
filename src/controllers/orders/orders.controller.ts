import { Controller, Get, Param } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get(':id')
  getOrder(@Param('id') id: number): string {
    return 'ID ' + id;
  }
}
/**
 * S is for Single Responsibility y recomienda que cada pieza de software debe tener
 * una unica función. Por ejemplo, un controlador de productos no debería encargarse
 * de categorias o de usuariso. Se debe crear un controlador para cada enidad que la
 * aplicación necesite.
 */
