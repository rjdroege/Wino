import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cellar-form',
  templateUrl: './cellar-form.component.html',
  styleUrls: ['./cellar-form.component.css']
})
export class CellarFormComponent implements OnInit {
  formHasBeenSubmitted: Boolean = false;
  wineDetails = {
    vinyard: '',
    grape: '',
    year: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm){
    console.log("Form submitted!", formObj);
    this.formHasBeenSubmitted = true;
    this.wineDetails.vinyard = formObj.value.vinyard;
    this.wineDetails.grape = formObj.value.grape;
    this.wineDetails.year = formObj.value.year;
    formObj.reset();
  }

}
