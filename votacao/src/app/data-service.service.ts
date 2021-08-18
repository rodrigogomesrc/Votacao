import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  static formOptions: { text: string; count: number; }[] = [];
  static formTitle: string = "";
  static votingStatus: string = "open";
  
  constructor() { }

}
