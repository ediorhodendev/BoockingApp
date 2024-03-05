import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms'; // Importe o FormsModule aqui

import { AppComponent } from './app.component';
import { BookingListComponent } from './booking-list/booking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule // Adicione o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







