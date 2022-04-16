import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cellar-edit',
  templateUrl: './cellar-edit.component.html',
  styleUrls: ['./cellar-edit.component.css']
})

export class CellarEditComponent implements OnInit {
  idx: number;
  isEditMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
  });
}
}


