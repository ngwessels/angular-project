import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TopAdComponent } from './top-ad/top-ad.component';
import { MainBodyPageComponent } from './main-body-page/main-body-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopAdComponent,
    MainBodyPageComponent,
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
