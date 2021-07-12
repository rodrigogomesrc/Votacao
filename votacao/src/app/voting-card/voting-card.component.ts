import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css']
})
export class VotingCardComponent implements OnInit {

  @Input() 
  title = "";

  @Input() 
  state = "";

  @Input() 
  options : any[];

  constructor() { 
    this.options = [];
  }

  ngOnInit(): void {
  }

  onVote(selectedOption: string): void {
    console.log("foi votado em...");
    console.log(selectedOption);
    this.options.forEach((option) => {
      if(option.text === selectedOption){
        option.count++;
      }
    })
    this.state = "closed";
  }

}
