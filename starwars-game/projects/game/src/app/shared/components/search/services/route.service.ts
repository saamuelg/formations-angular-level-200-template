import {inject, Injectable, isDevMode} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root',
  useFactory: () => isDevMode()?null: new RouteService()
})
export class RouteService {
  private routeActive = inject(ActivatedRoute);

  get params(): Observable<Params> {
    // TODO Faire un map
    return this.routeActive.params;
  }
}
