//Movie class used in class diagram and frontend
export class MovieFront {
    private id: number;
    private externalId: number;
    private title: string;
    private mediaType: string;
    private genre: string;
    private overview: string;
    private posterPath: string;
    private releaseDate: string;
    private voteAverage: number;

    constructor(
        id: number,
        externalId: number,
        title: string,
        mediaType: string,
        genre: string,
        overview: string,
        posterPath: string,
        releaseDate: string,
        voteAverage: number
    ) {
        this.id = id;
        this.externalId = externalId;
        this.title = title;
        this.mediaType = mediaType;
        this.genre = genre;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
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

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
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

    public getReleaseDate(): string {
        return this.releaseDate;
    }

    public setReleaseDate(releaseDate: string): void {
        this.releaseDate = releaseDate;
    }

    public getVoteAverage(): number {
        return this.voteAverage;
    }

    public setVoteAverage(voteAverage: number): void {
        this.voteAverage = voteAverage;
    }
}
