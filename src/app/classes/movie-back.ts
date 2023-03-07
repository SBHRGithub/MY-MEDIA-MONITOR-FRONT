//TMovie class used in class diagram and backend

export class MovieBack {
    private id: number;
    private externalId: number;
    private title: string;
    private mediaType: string;

    constructor(
        id: number,
        externalId: number,
        title: string,
        mediaType: string
    ) {
        this.id = id;
        this.externalId = externalId;
        this.title = title;
        this.mediaType = mediaType;
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
}
