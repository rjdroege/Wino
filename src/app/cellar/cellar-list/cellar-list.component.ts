import { Component, Input, OnInit } from '@angular/core';
import { Wine } from 'src/app/shared/wine/wine.model';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.css']
})
export class CellarListComponent implements OnInit {
  @Input() wine: Wine;
  myWine: Wine[]= [];

  constructor(private cellarService: CellarService) { }

  ngOnInit(): void {
    this.myWine = this.cellarService.getWine();
  }

}
