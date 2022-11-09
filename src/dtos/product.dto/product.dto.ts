import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';
import { PartialType, OmitType } from '@nestjs/mapped-types';
export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateProductDTO extends PartialType(
  OmitType(CreateProductDTO, ['name']),
) {}
