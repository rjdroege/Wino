import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Wine } from 'src/app/shared/wine/wine.model';
import { CellarService } from '../cellar.service';

@Component({
  selector: 'app-cellar-details',
  templateUrl: './cellar-details.component.html',
  styleUrls: ['./cellar-details.component.css']
})
export class CellarDetailsComponent implements OnInit {

  constructor(private cellarService: CellarService, private router: Router,
              private route: ActivatedRoute) { }
  wine: Wine;
  idx: number;
  collapsed: Boolean = true;
  show: Boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.wine = this.cellarService.getWine(this.idx);
    });
  }

  onEditWine(){
    this.router.navigate(['../', this.idx, 'edit'], { relativeTo: this.route });
  }

  onRemoveWine(idx: number){
    this.cellarService.removeWine(this.idx);
  }

}
