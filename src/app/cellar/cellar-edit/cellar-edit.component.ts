import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CellarService } from '../cellar.service';

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
    year: '',
    imagePath: ''
  };
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute,
    private router: Router, private cellarService: CellarService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
  });
    if (this.isEditMode){
      this.wineDetails = this.cellarService.getWine(this.idx);
    }
}

onFormSubmit(formObj: NgForm){
  this.formHasBeenSubmitted = true;
  this.wineDetails.vinyard = formObj.value.vinyard;
  this.wineDetails.grape = formObj.value.grape;
  this.wineDetails.year = formObj.value.year;
  this.wineDetails.imagePath = formObj.value.imagePath;
  this.onFormReset();
  };

onFormReset(){
  this.router.navigate(['../'], {relativeTo: this.route});
}
}


