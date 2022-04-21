import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CellarComponent } from './cellar/cellar.component';
import { CellarEditComponent } from './cellar/cellar-edit/cellar-edit.component';
import { WineComponent } from './shared/wine/wine.component';
import { CellarListComponent } from './cellar/cellar-list/cellar-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { CellarDetailsComponent } from './cellar/cellar-details/cellar-details.component';
import { CellarHomeComponent } from './cellar/cellar-home/cellar-home.component';
import { StoreComponent } from './store/store.component';
import { StoreSearchComponent } from './store/store-search/store-search.component';
import { StoreResultsComponent } from './store/store-results/store-results.component';
import { DropdownDirective } from './shared/Directives/dropdown.directive';
import { CellarFormComponent } from './cellar/cellar-form/cellar-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CellarComponent,
    CellarEditComponent,
    WineComponent,
    CellarListComponent,
    HomePageComponent,
    CellarDetailsComponent,
    CellarHomeComponent,
    StoreComponent,
    StoreSearchComponent,
    StoreResultsComponent,
    DropdownDirective,
    CellarFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
