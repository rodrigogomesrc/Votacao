import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent implements OnInit {

  @Input() 
  options : any[];

  @Output()
  vote: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.options = [];

  }

  ngOnInit(): void {
   
  }

  onClick = (selectedOption: string) =>{
    this.vote.emit(selectedOption);
    /*
    this.options.forEach((option) => {
      if(option.text === selectedOption){
        option.count++;
      }
    })
    */
  }
}
