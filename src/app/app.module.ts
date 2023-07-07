import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainViewComponent } from './main-view/main-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { SideBySideComparisonComponent } from './side-by-side-comparison/side-by-side-comparison.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainViewComponent,
    DetailViewComponent,
    ArtistSearchComponent,
    SideBySideComparisonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
