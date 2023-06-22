import {
  IsString,
  MaxLength,
  MinLength,
  IsNumber,
  Max,
  Min,
} from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @MaxLength(100)
  @MinLength(2)
  name: string;

  @IsString()
  @MaxLength(500)
  @MinLength(10)
  description: string;

  @IsNumber()
  @Max(10)
  @Min(1)
  rating: number;
}
