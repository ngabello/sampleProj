import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent }         from './app.component';
import { HeroComponent }        from './components/hero/hero.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroServiceService }   from './services/hero-service.service';
import { routing }              from './app.routing';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    DashboardComponent,
    DashboardComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    HeroServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
