import { Controller, Get, Param } from '@nestjs/common';

@Controller('controllers')
export class ControllersController {
  @Get('/list')
  findAll(): string {
    return 'This action returns all controllers';
  }

  // Get para id variado
  @Get('/:id')
  findOne(@Param('id') id:number): string {
    return `This action returns a #${id} controller`;
  }
}
