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


    constructor(){
        this.externalId = 0;
        this.name = " ";
        this.mediaType = 'tv';
        this.genre = " ";
        this.overview = " ";
        this.posterPath = " ";
        this.firstAirDate = " ";
        this.numberOfEpisodes = 0;
        this.numberOfSeasons = 0;
        this.voteAverage = 0;
        this.viewingStatus = " ";
        this.myScore = 0;
        this.ongoingSeason = 0
        this.ongoingEpisode = 0;
    }

    public setExternalId(externalId:number): void{
        this.externalId = externalId;
    }

    public setName(name:string): void{
        this.name = name;
    }

    public setMediaType(mediaType:string): void{
        this.mediaType = mediaType;
    }

    public setGenre(genre:string): void{
        this.genre = genre;
    }

    public setOverview(overview:string): void{
        this.overview = overview;
    }

    public setPosterPath(posterPath:string): void{
        this.posterPath = posterPath;
    }

    public setFirstAirDate(firstAirDate:string): void{
        this.firstAirDate = firstAirDate;
    }

    public setNumberOfEpisodes(numberOfEpisodes:number): void{
        this.numberOfEpisodes = numberOfEpisodes;
    }

    public setNumberOfSeasons(numberOfSeasons:number): void{
        this.numberOfSeasons = numberOfSeasons;
    }

    public setVoteAverage(voteAverage:number): void{
        this.voteAverage = voteAverage;
    }

    public setViewingStatus(viewingStatus:string): void{
        this.viewingStatus = viewingStatus;
    }

    public setMyScore(myScore:number): void{
        this.myScore = myScore;
    }

    public setOngoingSeason(ongoingSeason:number): void{
        this.ongoingSeason = ongoingSeason;
    }

    public setOngoingEpisode(ongoingEpisode:number): void{
        this.ongoingEpisode = ongoingEpisode;
    }
}