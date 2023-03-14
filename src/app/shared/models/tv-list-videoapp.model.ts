export class TvListVideoappModel {
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
    viewingStatus: string;
    myScore: number;
    ongoingSeason: number;
    ongoingEpisode: number;


    constructor(tvDisplay:any){
        this.externalId = tvDisplay.externalId;
        this.name = tvDisplay.name;
        this.mediaType = 'tv';
        this.genre = "";
        this.overview = tvDisplay.overview;
        this.posterPath = tvDisplay.posterPath;
        this.firstAirDate = tvDisplay.firstAirDate;
        this.numberOfEpisodes = tvDisplay.numberOfEpisodes;
        this.numberOfSeasons = tvDisplay.numberOfSeasons;
        this.voteAverage = tvDisplay.voteAverage;
        this.viewingStatus = tvDisplay.viewingStatus;
        this.myScore = tvDisplay.myScore;
        this.ongoingSeason = tvDisplay.ongoingSeason
        this.ongoingEpisode = tvDisplay.ongoingEpisode;
    }
}