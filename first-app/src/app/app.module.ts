import { ServerComponent } from './components/servers/server.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { App2Component } from './components/component2/app.component2';
import { fromEventPattern } from 'rxjs';
import { SubServerComponent } from './components/sub-server/sub-server.component';

@NgModule({
  declarations: [
    AppComponent, ServerComponent, App2Component, SubServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent]
})
export class AppModule { }
