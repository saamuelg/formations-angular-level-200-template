import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withDebugTracing} from "@angular/router";
import {mainRoutes} from "./app/routes";
import {provideHttpClient} from "@angular/common/http";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(mainRoutes, withDebugTracing()),
    provideHttpClient(),
  ]
});
