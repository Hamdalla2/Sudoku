import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  bootstrap: [
    AppComponent
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
    RouterModule.forRoot([
      // { path: '', redirectTo: '/signin', pathMatch: 'full'},
      // { path: 'Signin', component: signin },
      // { path: 'Signup', component: signup },
      // { path: '**', component: error }
    ])
  ]
})

export class AppModule {}
