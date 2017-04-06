import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyCCliv2y74eM_gaIEoVaKYUo78WKns9hco",
    authDomain: "mychatapp-52748.firebaseapp.com",
    databaseURL: "https://mychatapp-52748.firebaseio.com",
    projectId: "mychatapp-52748",
    storageBucket: "mychatapp-52748.appspot.com",
    messagingSenderId: "388960783528"

};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
