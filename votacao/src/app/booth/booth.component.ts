import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent implements OnInit {

  options:{ text: string; count: number; }[] = [];

  constructor() {
    this.options = DataServiceService.formOptions;
  }

  ngOnInit(): void {
   
  }

  onClick = (selectedOption: string) => {
    let localOptions = [...this.options];
    localOptions.forEach((option) => {
      if(option.text === selectedOption){
        option.count++;
      }
    })
    DataServiceService.formOptions = localOptions;
    DataServiceService.votingStatus = "closed";
  }
}
