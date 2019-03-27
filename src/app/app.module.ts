import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TapRoomInventoryComponent } from './tap-room-inventory/tap-room-inventory.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    TapRoomInventoryComponent,
    AddInventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
