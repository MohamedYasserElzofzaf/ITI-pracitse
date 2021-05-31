import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TestValidComponent } from './components/test-valid/test-valid.component';
import { LoginComponent } from './components/component-interaction/login/login.component';
import { HomeComponent } from './components/component-interaction/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInteractionComponent,
    TestValidComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }