import { EventEmitter, Injectable } from "@angular/core";
import { Wine } from "../shared/wine/wine.model";

@Injectable({
  providedIn: 'root',
})

export class CellarService {
  wineSelected = new EventEmitter<Wine>();
  wineListChanged = new EventEmitter<Wine[]>();

  private myWine: Wine[] = [
    new Wine(2018, 'Chateau Montelena', 'Chardonnay', 'https://www.californianwines.eu/imagegen.php?autoimage=0556'),
    new Wine(2013, 'Pascual Toso', 'Malbec', 'https://cdn.klwines.com/images/skus/1168010x.jpg'),
    new Wine(1985, 'Tignanello', 'Sangiovese', 'https://www.wine-searcher.com/images/labels/83/34/10588334.jpg?width=260&height=260&fit=bounds&canvas=260,260')
  ]

  getWine(){
    return this.myWine.slice();
  }

  addWine(wine: Wine){
    this.myWine.push(wine);
  }

  removeWine(idx: number){
    this.myWine.splice(idx);
  }
}
