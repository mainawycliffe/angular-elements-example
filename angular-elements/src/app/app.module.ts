import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [HelloWorldComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { }
