import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SearchComponent } from './shared/components/search/search.component';
import { StoreModule } from '@ngrx/store';
import {reducers} from "../store";
import { EffectsModule } from '@ngrx/effects';
import {GamesEffect} from "./features/game/store/effects";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, // devrait être un scan
    SideBarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        GameModule,
        SearchComponent,
        StoreModule.forRoot(reducers, {}),
        EffectsModule.forRoot([
          GamesEffect
        ])
    ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
