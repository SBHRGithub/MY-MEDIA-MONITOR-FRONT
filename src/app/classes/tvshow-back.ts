//TVShow class used in class diagram and backend

export class TVShowBack {
    private id: number;
    private externalId: number;
    private name: string;
    private mediaType: string;

    constructor(
        id: number,
        externalId: number,
        name: string,
        mediaType: string,
    ) {
        this.id = id;
        this.externalId = externalId;
        this.name = name;
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
}

