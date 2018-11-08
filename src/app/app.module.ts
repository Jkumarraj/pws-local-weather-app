import 'hammerjs'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LayoutModule } from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material.module'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { SideNavComponent } from './side-nav/side-nav.component'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent, SideNavComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    AppRoutingModule,
    MaterialModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
