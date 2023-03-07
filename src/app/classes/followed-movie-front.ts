//FollowedMovieFront class used in class diagram and frontend

import { MovieFront } from "./movie-front";

export class FollowedMovieFront {
    private id: number;
    private viewingStatus: string;
    private voteAverage: number;
    private movie: MovieFront;

    constructor(
        id: number,
        viewingStatus: string,
        voteAverage: number,
        movie: MovieFront
    ) {
        this.id = id;
        this.viewingStatus = viewingStatus;
        this.voteAverage = voteAverage;
        this.movie = movie;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getViewingStatus(): string {
        return this.viewingStatus;
    }

    public setViewingStatus(viewingStatus: string): void {
        this.viewingStatus = viewingStatus;
    }

    public getVoteAverage(): number {
        return this.voteAverage;
    }

    public setVoteAverage(voteAverage: number): void {
        this.voteAverage = voteAverage;
    }

    public getMovie(): MovieFront {
        return this.movie;
    }

    public setMovie(movie: MovieFront): void {
        this.movie = movie;
    }
}


