import { EventEmitter, Injectable } from "@angular/core";
import { Wine } from "../shared/wine/wine.model";

@Injectable({
  providedIn: 'root',
})

export class StoreService {
  wineSelected = new EventEmitter<Wine>();
  wineListChanged = new EventEmitter<Wine[]>();

  private allWines: Wine[] = [
    new Wine('2020', 'Peju', 'Provence', 'https://cdn.pixabay.com/photo/2020/05/10/15/53/wine-5154598_1280.jpg'),
    new Wine('2019', 'Mumm', 'Grand Cru', 'https://wineparity.com/wp-content/uploads/2020/07/G.H.-Mumm-Champagne-Brut-Cordon-Rouge.jpeg')
  ]

  getWine(){
    return this.allWines.slice();
  }

}
