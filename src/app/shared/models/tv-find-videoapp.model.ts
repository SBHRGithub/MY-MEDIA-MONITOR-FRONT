export class TvFindVideoappModel {
  externalId: number;
  name: string;
  mediaType: string;
  viewingStatus: string;
  myScore: number;
  ongoingSeason: number;
  ongoingEpisode: number;

  constructor(movieFromApi:any){
      this.externalId = movieFromApi.externalId;
      this.name = movieFromApi.name;
      this.mediaType = 'tv';
      this.viewingStatus = movieFromApi.viewingStatus;
      this.myScore = movieFromApi.myScore;
      this.ongoingSeason = movieFromApi.ongoingSeason;
      this.ongoingEpisode = movieFromApi.ongoingEpisode;
  } 
}