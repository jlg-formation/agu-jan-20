import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzPlayModule } from './quizz-play/quizz-play.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzCreateModule,
    QuizzPlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
