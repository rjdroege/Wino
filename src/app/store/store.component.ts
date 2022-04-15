import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine/wine.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  allWines: Wine[] = [ ];
  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.allWines = this.storeService.getWine();
  }

}
