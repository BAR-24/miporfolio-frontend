import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { LogoComponent } from './components/logo/logo.component';
import { RedesComponent } from './components/redes/redes.component';
import { NavComponent } from './components/nav/nav.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardsoftskinsComponent } from './components/hardsoftskins/hardsoftskins.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    LogoComponent,
    RedesComponent,
    NavComponent,
    HardsoftskinsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      //radius: 100,
      //outerStrokeWidth: 16,
      //innerStrokeWidth: 8,
      //outerStrokeColor: "#78C000",
      //innerStrokeColor: "#C7E596",
      //animationDuration: 300,
      //...
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
