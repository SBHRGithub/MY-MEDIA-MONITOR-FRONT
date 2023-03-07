export class TVSearchTMDBModel {
    externalId: number;
    name: string;
    mediaType: string;
    genre: number;
    overview: string;
    posterPath: string;
    firstAirDate: string;
    voteAverage: number;

    constructor(tvFromApi:any){
        this.externalId = tvFromApi.id;
        this.name = tvFromApi.original_name;
        this.mediaType = 'tv';
        this.genre = tvFromApi.genre_ids;
        this.overview = tvFromApi.overview;
        this.posterPath = tvFromApi.poster_path;
        this.firstAirDate = tvFromApi.first_air_date;
        this.voteAverage = tvFromApi.vote_average
    } 
}