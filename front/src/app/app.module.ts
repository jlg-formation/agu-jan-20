import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';
import { QuizzPlayModule } from './quizz-play/quizz-play.module';
import { QuizzService } from './services/quizz.service';
import { QuizzHttpService } from './services/quizz-http.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    QuizzCreateModule,
    QuizzPlayModule,
    HttpClientModule
  ],
  providers: [{ provide: QuizzService, useClass: QuizzHttpService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
