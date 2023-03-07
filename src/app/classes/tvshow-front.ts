//TVShow class used in class diagram and frontend

export class TVShowFront {
    private id: number;
    private externalId: number;
    private name: string;
    private mediaType: string;
    private genre: string;
    private overview: string;
    private posterPath: string;
    private firstAirDate: string;
    private numberOfEpisodes: number;
    private numberOfSeasons: number;
    private voteAverage: number;

    constructor(
        id: number,
        externalId: number,
        name: string,
        mediaType: string,
        genre: string,
        overview: string,
        posterPath: string,
        firstAirDate: string,
        numberOfEpisodes: number,
        numberOfSeasons: number,
        voteAverage: number
    ) {
        this.id = id;
        this.externalId = externalId;
        this.name = name;
        this.mediaType = mediaType;
        this.genre = genre;
        this.overview = overview;
        this.posterPath = posterPath;
        this.firstAirDate = firstAirDate;
        this.numberOfEpisodes = numberOfEpisodes;
        this.numberOfSeasons = numberOfSeasons;
        this.voteAverage = voteAverage;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getExternalId(): number {
        return this.externalId;
    }

    public setExternalId(externalId: number): void {
        this.externalId = externalId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getMediaType(): string {
        return this.mediaType;
    }

    public setMediaType(mediaType: string): void {
        this.mediaType = mediaType;
    }

    public getGenre(): string {
        return this.genre;
    }

    public setGenre(genre: string): void {
        this.genre = genre;
    }

    public getOverview(): string {
        return this.overview;
    }

    public setOverview(overview: string): void {
        this.overview = overview;
    }

    public getPosterPath(): string {
        return this.posterPath;
    }

    public setPosterPath(posterPath: string): void {
        this.posterPath = posterPath;
    }

    public getFirstAirDate(): string {
        return this.firstAirDate;
    }

    public setFirstAirDate(firstAirDate: string): void {
        this.firstAirDate = firstAirDate;
    }

    public getNumberOfEpisodes(): number {
        return this.numberOfEpisodes;
    }

    public setNumberOfEpisodes(numberOfEpisodes: number): void {
        this.numberOfEpisodes = numberOfEpisodes;
    }

    public getNumberOfSeasons(): number {
        return this.numberOfSeasons;
    }

    public setNumberOfSeasons(numberOfSeasons: number): void {
        this.numberOfSeasons = numberOfSeasons;
    }

    public getVoteAverage(): number {
        return this.voteAverage;
    }

    public setVoteAverage(voteAverage: number): void {
        this.voteAverage = voteAverage;
    }
}
