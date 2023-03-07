//FollowedMovieBack class used in class diagram and backend

import { MovieBack } from "./movie-back";

export class FollowedMovieBack {
    private id: number;
    private viewingStatus: string;
    private voteAverage: number;
    private movie: MovieBack;

    constructor(
        id: number,
        viewingStatus: string,
        voteAverage: number,
        movie: MovieBack
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

    public getMovie(): MovieBack {
        return this.movie;
    }

    public setMovie(movie: MovieBack): void {
        this.movie = movie;
    }
}
