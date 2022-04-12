import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine/wine.model';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [
    new Wine(2018, 'Chateau Montelena', 'Chardonnay', 'https://source.unsplash.com/50x50/?wine'),
    new Wine(2014, 'Pascual Toso', 'Malbec', 'https://source.unsplash.com/50x50/?wine')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
