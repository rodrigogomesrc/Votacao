import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  optionsQtd: number = 2;
  errorMessage: string = "";
  isSubmitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addOption(): void {
    this.optionsQtd++;
    let form = document.getElementById("questionsForm");
    let neOptionElement = document.createElement('input');
    neOptionElement.setAttribute("id", "option" + this.optionsQtd.toString());
    neOptionElement.setAttribute("name", "option" + this.optionsQtd.toString());
    neOptionElement.setAttribute("type", "text");
    neOptionElement.setAttribute("class", "formInput");
    form!.insertBefore(neOptionElement, form!.children[this.optionsQtd + 2]);

  }

  removeLastOption(): void {
    if(this.optionsQtd > 2){
      let lastOption = document.getElementById("option" + this.optionsQtd.toString());
      lastOption!.remove();
      this.optionsQtd--;
    }
  }

  onSubmit(e: any): void {
    const formData = new FormData(e.target);
    let areErrors = false;
    let localOptions: { text: string; count: number; }[] = [];
    let first = true;
    let title = "";

    formData.forEach((field) => {
      const erro:boolean = this.checkErrors(field.toString());
      if(erro){
        areErrors = true;
      } 
      if(first){
        title = field.toString();
        first = false;
    
      } else {
        let option = {text: field.toString(), count: 0};
        localOptions.push(option);
      }
    });

    if(!areErrors){
      DataServiceService.formOptions = localOptions;
      DataServiceService.formTitle = title;
      this.isSubmitted = true;
    }
    
  }

  checkErrors(field: string):boolean{
      if(field.trim() === ''){
        this.errorMessage = "Campos não podem estar em branco!"; 
        return true;
    } else if(field.length < 4){
        this.errorMessage = "Campos não podem ter menos do que 4 caracteres!";
        return true;
    }
    return false;
  }

}
