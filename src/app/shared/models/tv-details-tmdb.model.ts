export class TVDetailsTMDBModel {
    externalId: number;
    name: string;
    mediaType: string;
    genre: string;
    overview: string;
    posterPath: string;
    firstAirDate: string;
    numberOfEpisodes: number;
    numberOfSeasons: number;
    voteAverage: number;

    constructor(tvFromApi:any) {
        this.externalId = tvFromApi.id;
        this.name = tvFromApi.name;
        this.mediaType = 'tv';
        this.genre = tvFromApi.genres[0].name;
        this.overview = tvFromApi.overview;
        this.posterPath = tvFromApi.poster_path;
        this.firstAirDate = tvFromApi.first_air_date;
        this.numberOfEpisodes = tvFromApi.number_of_episodes;
        this.numberOfSeasons = tvFromApi.number_of_seasons;
        this.voteAverage = tvFromApi.vote_average;
    }
}


