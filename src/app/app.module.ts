import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CellarComponent } from './cellar/cellar.component';
import { CellarEditComponent } from './cellar/cellar-edit/cellar-edit.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineComponent } from './shared/wine/wine.component';
import { CellarListComponent } from './cellar/cellar-list/cellar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CellarComponent,
    CellarEditComponent,
    WineListComponent,
    WineComponent,
    CellarListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
