export class MovieFindVideoappModel {
  externalId: number;
  title: string;
  mediaType: string;
  viewingStatus: string;
  myScore: number;

  constructor(movieFromApi:any){
      this.externalId = movieFromApi.externalId;
      this.title = movieFromApi.title;
      this.mediaType = 'movie';
      this.viewingStatus = movieFromApi.viewingStatus;
      this.myScore = movieFromApi.myScore;
  } 
}