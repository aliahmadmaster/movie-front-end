export class MovieModel {
    id: string;
    name: string;
    description?: string;
    releaseDate?: Date;
    rating?: number;
    ticketPrice?: number;
    country?: string;
    genre?:string[];
    photo?: string
  }