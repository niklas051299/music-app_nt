import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainViewComponent } from './main-view/main-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideBySideComparisonComponent } from './side-by-side-comparison/side-by-side-comparison.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {CdkDropList} from "@angular/cdk/drag-drop";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatLineModule} from "@angular/material/core";
import {MatLegacyListModule} from "@angular/material/legacy-list";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainViewComponent,
    DetailViewComponent,
    SideBySideComparisonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    NgOptimizedImage,
    CdkDropList,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatLineModule,
    MatLegacyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
