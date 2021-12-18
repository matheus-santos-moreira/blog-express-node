import { ICreateCategoryDTO } from '@/dtos';
import { Category } from '@/entities';

import { ICategoriesRepository } from '../ICategoriesRepository';

export class CategoriesRepositoriesInMemory implements ICategoriesRepository {
  private categories: Category[] = [];

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find(category => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async create(data: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    category.name = data.name;

    this.categories.push(category);
  }
}
