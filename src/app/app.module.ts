import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DigiRoutingModule } from './digi-routing/digi-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DigiRoutingModule,
    LoginModule,
    RegisterModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
