export class MovieSearchTMDBModel {
    externalId: number;
    title: string;
    mediaType: string;
    genre: number;
    overview: string;
    posterPath: string;
    releaseDate: string;
    voteAverage: number;

    constructor(movieFromApi:any){
        this.externalId = movieFromApi.id;
        this.title = movieFromApi.title;
        this.mediaType = 'movie';
        this.genre = movieFromApi.genre_ids;
        this.overview = movieFromApi.overview;
        this.posterPath = movieFromApi.poster_path;
        this.releaseDate = movieFromApi.release_date;
        this.voteAverage = movieFromApi.vote_average
    } 
}

