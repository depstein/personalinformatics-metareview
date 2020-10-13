import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserComponent } from './browser/browser.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'', component: BrowserComponent},
  {path:'article', component: AddArticleComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddArticleComponent, AboutComponent];
