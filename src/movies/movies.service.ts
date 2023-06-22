import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private MovieModel: Model<Movie>) {}

  async create(createMovieDto: CreateMovieDto): Promise<CreateMovieDto> {
    await new this.MovieModel(createMovieDto).save();
    return createMovieDto;
  }

  async findAll(sortByRating: string): Promise<Movie[]> {
    const movies = (await this.MovieModel.find()) as Movie[];

    if (sortByRating === 'ascending') {
      return movies.sort((a, b) => a.rating - b.rating);
    } else if (sortByRating === 'descending') {
      return movies.sort((a, b) => b.rating - a.rating);
    }
    return movies;
  }

  async findOne(id: string): Promise<Movie> {
    return await this.MovieModel.findOne({ _id: id });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    await this.MovieModel.updateOne({ _id: id }, updateMovieDto);
    return await this.MovieModel.findOne({ _id: id });
  }

  async remove(id: string): Promise<Movie[]> {
    await this.MovieModel.deleteOne({ _id: id });
    return this.MovieModel.find();
  }
}
