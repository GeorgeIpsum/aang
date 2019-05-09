import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxDirective } from './directives/parallax.directive';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EnvServiceProver } from './env.service.provider';
import { Globals } from './globals';
import { HeaderModule } from  './modules/header-module/header.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    NotFoundComponent,
    HomeComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'no stealaroony',
    }),
    HeaderModule
  ],
  providers: [
    EnvServiceProver,
    Globals,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
