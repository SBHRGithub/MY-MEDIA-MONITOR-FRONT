//ClientFront class used in class diagram and frontend

import { FollowedMovieFront } from "./followed-movie-front";
import { FollowedTVShowFront } from "./followed-tvshow-front";

export class ClientFront {
    private email: string;
    private followedMovies: Array<FollowedMovieFront>;
    private followedTVShows: Array<FollowedTVShowFront>;

    constructor(
        email: string, 
        followedMovies: Array<FollowedMovieFront>, 
        followedTVShows: Array<FollowedTVShowFront>
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

    public getFollowedMovies(): Array<FollowedMovieFront> {
        return this.followedMovies;
    }

    public setFollowedMovies(followedMovies: Array<FollowedMovieFront>): void {
        this.followedMovies = followedMovies;
    }

    public getFollowedTVShows(): Array<FollowedTVShowFront> {
        return this.followedTVShows;
    }

    public setFollowedTVShows(followedTVShows: Array<FollowedTVShowFront>): void {
        this.followedTVShows = followedTVShows;
    }

}


