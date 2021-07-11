import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() 
  options : any[];

  results : string[];

  constructor() { 
    this.results = []
    this.options = [];

  }

  ngOnInit(): void {
    this.handleOptions();
  }

  handleOptions = (): void => {
    let totalVotes = 0;
    this.options.forEach((option) => {
      totalVotes += option.count;
    })

    this.options.map((option, index) => {
      this.results.push(this.getSingleResultText(totalVotes, option, index))
    })
  }

  getSingleResultText = (totalCount:number, option:any, index: number) : string=> {
    return `${index + 1} - ${option.text} - ${option.count} votes (${this.calculatePercentage(option.count, totalCount)}%)`;
  }

  calculatePercentage = (optionCount: number, totalCount: number): number => {
    return Math.round((optionCount / totalCount) * 100);
  }

}
