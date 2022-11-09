import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedInt = parseInt(value, 10);
    if (isNaN(parsedInt)){
      throw new BadRequestException(`${value} is not a number`);
    }
    return parsedInt;
  }
}
