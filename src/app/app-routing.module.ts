import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkOverviewPageComponent } from './link-overview-page/link-overview-page.component';

const routes: Routes = [
  { path: '', component: LinkOverviewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
