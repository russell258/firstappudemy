import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    AssignmentTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
