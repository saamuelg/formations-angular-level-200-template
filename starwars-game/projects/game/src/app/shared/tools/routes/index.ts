import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export type LazyLoadedRouteAction = () => Observable<any>;
export class WithFlagLazyLoadingModuleStrategy implements PreloadingStrategy{

  preload(route: Route, lazyLoadedRouteAction: LazyLoadedRouteAction): Observable<any> {
    let result = of(null);

    if (route.data && route.data.preload) {
      result = lazyLoadedRouteAction();
    }

    return result;
  }
}
