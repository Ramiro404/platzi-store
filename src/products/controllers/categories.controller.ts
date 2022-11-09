import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/dtos/category.dto';
import { Category } from 'src/entity/category';
import { CategoriesService } from '../services/categories.service';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  find(): Category[] {
    return this.categoriesService.find();
  }
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number): Category {
    return this.categoriesService.findOne(id);
  }
  @Post()
  @HttpCode(HttpStatus.CREATED)
  save(@Body() body: CreateCategoryDTO): Category {
    return this.categoriesService.save(body);
  }
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCategoryDTO,
  ): Category {
    return this.categoriesService.update(id, body);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number): boolean {
    return this.categoriesService.remove(id);
  }
}
