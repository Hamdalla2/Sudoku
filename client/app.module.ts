import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [
    IonicApp
  ],
  declarations: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(AppComponent),
    RouterModule.forRoot([
      // { path: '', redirectTo: '/signin', pathMatch: 'full'},
      // { path: 'Signin', component: signin },
      // { path: 'Signup', component: signup },
      // { path: '**', component: error }
    ])
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {}