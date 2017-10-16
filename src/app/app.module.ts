import { BrowserPrebootModule } from 'preboot/browser';
import { TodoService } from './services/todo.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-id' }),
    FormsModule,
    HttpClientModule,
    BrowserPrebootModule.replayEvents({ noReplay: true })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
