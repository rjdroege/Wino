import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine/wine.model';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [ ];
  constructor() { }

  ngOnInit(): void {
  }

}
