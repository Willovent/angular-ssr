import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserPrebootModule } from 'preboot/browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-id' }),
    FormsModule,
    BrowserPrebootModule.replayEvents()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
