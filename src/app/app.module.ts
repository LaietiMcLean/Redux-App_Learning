import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

import { AppComponent } from './app.component';
import { SonComponent } from './counter/son/son.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';


@NgModule({
  declarations: [
    AppComponent,
    SonComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
