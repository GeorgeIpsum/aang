import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParallaxDirective } from './directives/parallax.directive';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { EnvServiceProver } from './env.service.provider';
import { EnvService } from './env.service';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'no stealaroony',
    })
  ],
  providers: [EnvServiceProver],
  bootstrap: [AppComponent]
})
export class AppModule { }
