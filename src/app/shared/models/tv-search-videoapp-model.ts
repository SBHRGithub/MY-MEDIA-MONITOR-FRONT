export class TVSearchVideoappModel {
    externalId: number;
    name: string;
    mediaType: string;
    genre: number;
    overview: string;
    posterPath: string;
    firstAirDate: string;
    voteAverage: number;
    viewingStatus: string;
    myScore: number;
    ongoingSeason: number;
    ongoingEpisode: number;


    constructor(tvFromApi:any){
        this.externalId = tvFromApi.externalId;
        this.name = tvFromApi.name;
        this.mediaType = 'tv';
        this.genre = 0;
        this.overview = " ";
        this.posterPath = " ";
        this.firstAirDate = " ";
        this.voteAverage = 0;
        this.viewingStatus = tvFromApi.viewingStatus;
        this.myScore = tvFromApi.myScore;
        this.ongoingSeason = tvFromApi.ongoingSeason;
        this.ongoingEpisode = tvFromApi.ongoingEpisode;
    } 
}