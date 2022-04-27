import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  host: {
    "(document:click)": "onClick($event)"
  }
})
export class HeaderComponent implements OnInit {
  collapsed: Boolean = true;
  show: Boolean = false;

  constructor(private eRef: ElementRef) {}

  onClick(event){
    if (!this.eRef.nativeElement.contains(event.target)){
      this.show = false;
    }
  }

  ngOnInit(): void {
  }

}
