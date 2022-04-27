import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cellar-edit',
  templateUrl: './cellar-edit.component.html',
  styleUrls: ['./cellar-edit.component.css']
})

export class CellarEditComponent implements OnInit {
  formHasBeenSubmitted: Boolean = false;
  wineDetails = {
    vinyard: '',
    grape: '',
    year: ''
  };
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
  });
}

onFormSubmit(formObj: NgForm){
  this.formHasBeenSubmitted = true;
  this.wineDetails.vinyard = formObj.value.vinyard;
  this.wineDetails.grape = formObj.value.grape;
  this.wineDetails.year = formObj.value.year;
  formObj.reset();
}
}


