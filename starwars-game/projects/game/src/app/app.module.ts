import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { ProfileModule } from './features/profile/profile.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { RemindObsComponent } from './shared/learning/remind-obs/remind-obs.component';
import { SharedModule } from './shared/shared/shared.module';
import { SearchComponent } from './shared/ui/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    GameModule,
    RemindObsComponent,
    SearchComponent // normalement, a mettre dans un HeaderComponent Standalone
    // ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
