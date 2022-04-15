import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/shared/wine/wine.model';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-details',
  templateUrl: './cellar-details.component.html',
  styleUrls: ['./cellar-details.component.css']
})
export class CellarDetailsComponent implements OnInit {

  constructor(private cellarService: CellarService) { }
  wine: Wine;
  idx: number;

  ngOnInit(): void {
  }

}
