import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BodyComponent } from './body/body.component';
import { SileComponent } from './sile/sile.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BodyComponent, SileComponent, HeaderComponent, TopBarComponent, HeaderButtonComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
