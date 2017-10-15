import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServerPrebootModule } from 'preboot/server';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
    ServerPrebootModule.recordEvents({ appRoot: 'app-root' , eventSelectors : [
      { selector: 'input,textarea', events: ['keypress', 'keyup', 'keydown', 'input', 'change'] },
      { selector: 'li', events: ['click'] },
    ]})
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppServerModule { }
