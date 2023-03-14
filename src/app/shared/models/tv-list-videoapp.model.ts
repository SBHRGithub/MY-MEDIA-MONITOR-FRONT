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


    constructor(tvDisplayVideoappModel:any){
        this.externalId = tvDisplayVideoappModel.externalId;
        this.name = tvDisplayVideoappModel.name;
        this.mediaType = 'tv';
        this.genre = "";
        this.overview = tvDisplayVideoappModel.overview;
        this.posterPath = tvDisplayVideoappModel.posterPath;
        this.firstAirDate = tvDisplayVideoappModel.firstAirDate;
        this.numberOfEpisodes = tvDisplayVideoappModel.numberOfEpisodes;
        this.numberOfSeasons = tvDisplayVideoappModel.numberOfSeasons;
        this.voteAverage = tvDisplayVideoappModel.voteAverage;
        this.viewingStatus = tvDisplayVideoappModel.viewingStatus;
        this.myScore = tvDisplayVideoappModel.myScore;
        this.ongoingSeason = tvDisplayVideoappModel.ongoingSeason
        this.ongoingEpisode = tvDisplayVideoappModel.ongoingEpisode;
    }
}