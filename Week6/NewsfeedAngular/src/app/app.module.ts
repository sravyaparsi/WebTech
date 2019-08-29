import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { SourcesService } from './sources.service';
import { Header2Component } from './header2/header2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsContentComponent,
    Header2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
