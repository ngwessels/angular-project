import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopAddComponent } from './top-add/top-add.component';
import { TopAdComponent } from './top-ad/top-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopAddComponent,
    TopAdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
