import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LibUiModule } from '@cgi-template-angular/lib-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { ArticleState } from './store/article.state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LibUiModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot([ArticleState], {
      developmentMode: !environment.production,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
