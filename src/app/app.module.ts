import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataService } from 'app/dataService/data.service';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AppRoutingModule } from 'app/routing/app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GoodbyeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
