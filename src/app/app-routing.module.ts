import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideBySideComparisonComponent } from './side-by-side-comparison/side-by-side-comparison.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'detail/:artistId', component: DetailViewComponent },
  { path: 'comparison', component: SideBySideComparisonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
