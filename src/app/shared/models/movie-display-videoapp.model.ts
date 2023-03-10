export class MovieDisplayVideoappModel {
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

    constructor(
        externalId: number,
        title: string,
        mediaType: string,
        genre: string,
        overview: string,
        posterPath: string,
        releaseDate: string,
        voteAverage: number,
        viewingStatus: string,
        myScore: number
    ) {
        this.externalId = externalId;
        this.title = title;
        this.mediaType = 'movie';
        this.genre = genre;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.voteAverage = voteAverage;
        this.viewingStatus = viewingStatus;
        this.myScore = myScore;
    } 
}