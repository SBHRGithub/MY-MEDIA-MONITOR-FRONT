export class MovieListVideoappModel {
    externalId: number;
    title: string;
    mediaType: string;
    genre: string;
    overview: string;
    posterPath: string;
    releaseDate: string;
    voteAverage: number;
    viewingStatus: string;
    myScore: number;

    constructor(movieDisplay:any){
        this.externalId = movieDisplay.externalId;
        this.title = movieDisplay.title;
        this.mediaType = 'tv';
        this.genre = "";
        this.overview = movieDisplay.overview;
        this.posterPath = movieDisplay.posterPath;
        this.releaseDate = movieDisplay.releaseDate;
        this.voteAverage = movieDisplay.voteAverage;
        this.viewingStatus = movieDisplay.viewingStatus;
        this.myScore = movieDisplay.myScore;
    }
}