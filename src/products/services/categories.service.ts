import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/dtos/category.dto';
import { UpdateProductDTO } from 'src/dtos/product.dto/product.dto';
import { Category } from 'src/entity/category';

@Injectable()
export class CategoriesService {
  counter = 2;
  categories: Category[] = [{ id: 1, name: 'News' }];

  find(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category | null {
    const cat = this.categories.find((cat) => cat.id === id);
    if (!cat) throw new NotFoundException(`Category #${id} not found`);
    return cat;
  }

  save(category: CreateCategoryDTO): Category {
    const newCat = { ...category, id: this.counter };
    this.categories.push(newCat);
    return newCat;
  }

  update(id: number, category: UpdateCategoryDTO): Category | null {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) throw new NotFoundException(`Category #${id} not found`);
    this.categories[index] = { ...this.categories[index], ...category };
    return this.categories[index];
  }

  remove(id: number): boolean {
    const index = this.categories.findIndex((category) => category.id === id);
    if (index === -1) throw new NotFoundException(`Category #${id} not found`);
    this.categories.splice(index, 1);
    return true;
  }
}
