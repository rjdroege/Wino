import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CellarService } from '../cellar.service';
import { Wine } from 'src/app/shared/wine/wine.model';

@Component({
  selector: 'app-cellar-edit',
  templateUrl: './cellar-edit.component.html',
  styleUrls: ['./cellar-edit.component.css']
})

export class CellarEditComponent implements OnInit {
  wineDetails: Wine = {
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
  const { vinyard, grape, year, imagePath } = formObj.value;
  this.wineDetails = new Wine(
    vinyard,
    grape,
    year,
    imagePath
  );
  if (this.isEditMode){
    this.cellarService.updateWine(this.idx, this.wineDetails);
  } else {
    this.cellarService.addWine(this.wineDetails);
  }
  this.onFormReset();
  };

onFormReset(){
  this.router.navigate(['../'], {relativeTo: this.route});
}
}


