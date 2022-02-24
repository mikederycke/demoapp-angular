import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageComponent } from './message-list/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MessageListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
