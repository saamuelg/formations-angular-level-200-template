import { inject, Injectable } from '@angular/core';
import { SearchService } from './index';
import { GameService } from '../../../../features/game/services/game.service';
import { GamesAsObs } from '../../../../features/game/models';
import {switchMap} from "rxjs";
import {RouteService} from "./route.service";

@Injectable({
  providedIn: 'root'
})
export class GameBusiness {
  private readonly searchService = inject(SearchService);
  private readonly gameService = inject(GameService);
  private readonly routeService = inject(RouteService);

  searchAll():GamesAsObs {
    return this.searchService.asObservable.pipe(
      switchMap(item => this.gameService.getAll(item.value, 3))
    )
  }
}
