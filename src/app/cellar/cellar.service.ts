import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Wine } from "../shared/wine/wine.model";

@Injectable({
  providedIn: 'root',
})

export class CellarService {
  wineSelected = new Subject<Wine>();
  wineListChanged = new Subject<Wine[]>();

  private myWine: Wine[] = [
    new Wine(2018, 'Chateau Montelena', 'Chardonnay', 'https://www.californianwines.eu/imagegen.php?autoimage=0556'),
    new Wine(2013, 'Pascual Toso', 'Malbec', 'https://cdn.klwines.com/images/skus/1168010x.jpg'),
    new Wine(1985, 'Tignanello', 'Sangiovese', 'https://www.wine-searcher.com/images/labels/83/34/10588334.jpg?width=260&height=260&fit=bounds&canvas=260,260')
  ]

  getWines(){
    return this.myWine.slice();
  }

  getWine(idx: number){
    return this.myWine.slice()[idx];
  }

  saveWine(wine: Wine){
    this.myWine.push(wine);
    this.wineListChanged.next(this.myWine.slice());
  }

  addWine(wine: Wine){
    this.myWine.push(wine);
  }

  removeWine(idx: number){
    this.myWine.splice(idx);
    this.wineListChanged.next(this.myWine.slice());
    console.log("wine removed");
  }
}
