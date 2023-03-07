//ClientBack class used in class diagram and backend

import { FollowedMovieBack } from "./followed-movie-back";
import { FollowedTVShowBack } from "./followed-tvshow-back";

export class ClientBack {
    private email: string;
    private followedMovies: Array<FollowedMovieBack>;
    private followedTVShows: Array<FollowedTVShowBack>;

    constructor(
        email: string, 
        followedMovies: Array<FollowedMovieBack>, 
        followedTVShows: Array<FollowedTVShowBack>
    ) {
        this.email = email;
        this.followedMovies = followedMovies;
        this.followedTVShows = followedTVShows;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getFollowedMovies(): Array<FollowedMovieBack> {
        return this.followedMovies;
    }

    public setFollowedMovies(followedMovies: Array<FollowedMovieBack>): void {
        this.followedMovies = followedMovies;
    }

    public getFollowedTVShows(): Array<FollowedTVShowBack> {
        return this.followedTVShows;
    }

    public setFollowedTVShows(followedTVShows: Array<FollowedTVShowBack>): void {
        this.followedTVShows = followedTVShows;
    }

}



