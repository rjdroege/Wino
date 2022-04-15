import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CellarComponent } from "./cellar/cellar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { StoreComponent } from "./store/store.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'cellar', component: CellarComponent},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
