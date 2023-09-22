import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { MenuBarItemComponent } from './components/menu-bar/menu-bar-item/menu-bar-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { BarLogoSonyComponent } from './components/bar-logo-sony/bar-logo-sony.component';
import { CardOptionComponent } from './components/card-option/card-option.component';
import { BtnMenuComponent } from './components/menu-bar/btn-menu/btn-menu.component';
import { CardMenuComponent } from './components/menu-bar/btn-menu/card-menu/card-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
    MenuBarItemComponent,
    FooterComponent,
    BarLogoSonyComponent,
    CardOptionComponent,
    BtnMenuComponent,
    CardMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
