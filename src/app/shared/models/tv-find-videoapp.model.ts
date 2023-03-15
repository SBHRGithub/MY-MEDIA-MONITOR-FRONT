export class TvFindVideoappModel {
  externalId: number;
  name: string;
  mediaType: string;
  viewingStatus: string;
  myScore: number;
  ongoingSeason: number;
  ongoingEpisode: number;

  constructor(tvFromApi:any){
      this.externalId = tvFromApi.externalId;
      this.name = tvFromApi.name;
      this.mediaType = 'tv';
      this.viewingStatus = tvFromApi.viewingStatus;
      this.myScore = tvFromApi.myScore;
      this.ongoingSeason = tvFromApi.ongoingSeason;
      this.ongoingEpisode = tvFromApi.ongoingEpisode;
  } 
}