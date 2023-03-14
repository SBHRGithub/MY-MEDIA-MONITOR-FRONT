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

    constructor(movieFind:any){
        this.externalId = movieFind.externalId;
        this.title = movieFind.name;
        this.mediaType = 'tv';
        this.genre = " ";
        this.overview = " ";
        this.posterPath = " ";
        this.releaseDate = " ";
        this.voteAverage = 0;
        this.viewingStatus = movieFind.viewingStatus;
        this.myScore = movieFind.myScore;
    }
}