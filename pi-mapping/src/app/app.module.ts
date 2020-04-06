import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperComponent } from './paper/paper.component';
import { BrowserComponent } from './browser/browser.component';
// import { AddArticleComponent } from './add-article/add-article.component';
// import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    PaperComponent,
    BrowserComponent,
    // AddArticleComponent,
    // AboutComponent
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
