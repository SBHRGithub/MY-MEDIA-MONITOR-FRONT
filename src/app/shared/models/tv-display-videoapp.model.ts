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

    constructor(
        externalId: number,
        name: string,
        mediaType: string,
        genre: string,
        overview: string,
        posterPath: string,
        firstAirDate: string,
        numberOfEpisodes: number,
        numberOfSeasons: number,
        voteAverage: number,
        viewingStatus: string,
        myScore: number,
        ongoingSeason: number,
        ongoingEpisode: number
    ) {
        this.externalId = externalId;
        this.name = name;
        this.mediaType = 'tv';
        this.genre = genre;
        this.overview = overview;
        this.posterPath = posterPath;
        this.firstAirDate = firstAirDate;
        this.numberOfEpisodes = numberOfEpisodes;
        this.numberOfSeasons = numberOfSeasons;
        this.voteAverage = voteAverage;
        this.viewingStatus = viewingStatus;
        this.myScore = myScore;
        this.ongoingSeason = ongoingSeason;
        this.ongoingEpisode = ongoingEpisode;
    }
}