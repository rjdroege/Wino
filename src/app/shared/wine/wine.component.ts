import { Component, Input, OnInit } from '@angular/core';
import { Wine } from './wine.model';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.css']
})
export class WineComponent implements OnInit {
  @Input() wine: Wine;
  @Input() idx: number;

  constructor() { }

  ngOnInit(): void {
  }

}
