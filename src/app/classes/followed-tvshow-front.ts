//FollowedTVShowFront class used in class diagram and frontend

import { TVShowFront } from "./tvshow-front";

export class FollowedTVShowFront {
    private id: number;
    private viewingStatus: string;
    private myScore: number;
    private ongoingSeason: number;
    private ongoingEpisode: number;
    private tvShow: TVShowFront;

    constructor(
        id: number,
        viewingStatus: string,
        myScore: number,
        ongoingSeason: number,
        ongoingEpisode: number,
        tvShow: TVShowFront
    ) {
        this.id = id;
        this.viewingStatus = viewingStatus;
        this.myScore = myScore;
        this.ongoingSeason = ongoingSeason;
        this.ongoingEpisode = ongoingEpisode;
        this.tvShow = tvShow;
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

    public getMyScore(): number {
        return this.myScore;
    }

    public setMyScore(myScore: number): void {
        this.myScore = myScore;
    }

    public getOngoingSeason(): number {
        return this.ongoingSeason;
    }

    public setOngoingSeason(ongoingSeason: number): void {
        this.ongoingSeason = ongoingSeason;
    }

    public getOngoingEpisode(): number {
        return this.ongoingEpisode;
    }

    public setOngoingEpisode(ongoingEpisode: number): void {
        this.ongoingEpisode = ongoingEpisode;
    }

    public getTvShow(): TVShowFront {
        return this.tvShow;
    }

    public setTvShow(tvShow: TVShowFront): void {
        this.tvShow = tvShow;
    }

}

