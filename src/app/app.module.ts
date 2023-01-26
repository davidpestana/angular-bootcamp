import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { BindgingExampleComponent } from './bindging-example/bindging-example.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { BindingPipe } from '@angular/compiler';
import { BindgingExample2Component } from './bindging-example2/bindging-example2.component';
import { RickymortyComponent } from './rickymorty/rickymorty.component';
import { RickymortyModule } from './rickymorty/rickymorty.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    BindgingExampleComponent,
    VideoComponent,
    BindgingExampleComponent,
    BindgingExample2Component
  ],
  imports: [
    RickymortyModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
