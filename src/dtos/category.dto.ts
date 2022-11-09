import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDTO {
  @IsString()
  readonly name?: string;
}
