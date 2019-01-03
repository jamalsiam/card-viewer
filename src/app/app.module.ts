import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CardViewerComponent } from './component/card-viewer/card-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardViewerComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
