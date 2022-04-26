import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Wine } from 'src/app/shared/wine/wine.model';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-list',
  templateUrl: './cellar-list.component.html',
  styleUrls: ['./cellar-list.component.css']
})
export class CellarListComponent implements OnInit, OnDestroy {
  @Input() wine: Wine;
  myWine: Wine[]= [];
  cellarSub: Subscription;

  constructor(private cellarService: CellarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.myWine = this.cellarService.getWines();
   this.cellarSub = this.cellarService.wineListChanged.subscribe((wines: Wine[]) =>{
      this.myWine = wines;
    })
  }

  onNewWine(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onRemoveWine(idx){
    this.cellarService.removeWine(idx);
  }

  ngOnDestroy(): void {
      this.cellarSub.unsubscribe();
  }
}
