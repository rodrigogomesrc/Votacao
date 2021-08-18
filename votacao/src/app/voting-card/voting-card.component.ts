import { Component, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css']
})
export class VotingCardComponent implements OnInit {

  state:string = "open";

  constructor() { 
    this.state = DataServiceService.votingStatus;
  }

  ngOnInit(): void {
  }

}
