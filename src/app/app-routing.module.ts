import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CellarDetailsComponent } from "./cellar/cellar-details/cellar-details.component";
import { CellarEditComponent } from "./cellar/cellar-edit/cellar-edit.component";
import { CellarComponent } from "./cellar/cellar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { StoreComponent } from "./store/store.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent},
  { path: 'cellar', component: CellarComponent, children: [
    { path: 'new', component: CellarEditComponent},
    { path: ':id', component: CellarDetailsComponent},
    { path: ':id/edit', component: CellarEditComponent}
  ]},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
