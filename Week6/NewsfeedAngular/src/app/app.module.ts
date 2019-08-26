import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { SourcesService } from './sources.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
