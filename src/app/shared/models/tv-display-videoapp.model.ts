export class TvDisplayVideoappModel {
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


    constructor(tvFindVideoappModel:any){
        this.externalId = tvFindVideoappModel.externalId;
        this.name = tvFindVideoappModel.name;
        this.mediaType = 'tv';
        this.genre = " ";
        this.overview = " ";
        this.posterPath = " ";
        this.firstAirDate = " ";
        this.numberOfEpisodes = 0;
        this.numberOfSeasons = 0;
        this.voteAverage = 0;
        this.viewingStatus = tvFindVideoappModel.viewingStatus;
        this.myScore = tvFindVideoappModel.myScore;
        this.ongoingSeason = 0;
        this.ongoingEpisode = 0;
    }
}