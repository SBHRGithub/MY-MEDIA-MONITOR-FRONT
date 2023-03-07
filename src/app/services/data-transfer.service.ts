import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  data! : string;

  constructor() { }

  public getData(): string{
    return this.data;
  }
  public setData(data:string): void{
    this.data=data;
  }
}
