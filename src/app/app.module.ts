import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TabComponent } from './tab/tab.component';
import { StructaralDirectivesComponent } from './structaral-directives/structaral-directives.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { MyHighlightDirective } from './custom-directives/my-highlight/my-highlight.directive';
import { BetterHighlightDirective } from './custom-directives/better-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TabComponent,
    StructaralDirectivesComponent,
    CustomDirectivesComponent,
    MyHighlightDirective,
    BetterHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
