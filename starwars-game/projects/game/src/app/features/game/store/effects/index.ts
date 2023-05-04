import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {concatMap, filter, map, tap} from "rxjs";
import {requestToLoadAllGamesAction, requestToLoadAllGamesSuccessAction} from "../actions";
import {GameService} from "../../services/game.service";

@Injectable()
export class GamesEffect {
  private readonly action$ = inject(Actions);
  private readonly service = inject(GameService);

  // ListGame$ pourrait avoir n'importe quel nom
  listGames$ = createEffect(()=> this.action$.pipe(
    tap(item => console.info('1')),
    tap(item => console.info(item)),
    // 1. Filtrer sur l'action venant du Component
    ofType(requestToLoadAllGamesAction),
    tap(item => console.info('1')),
    tap(item => console.info(item)),
    // 2. Requête vers l'api
    concatMap(() => this.service.getAll('', 3)),
    // //3. Dispatch d'une action vers le reducer
    map(items => requestToLoadAllGamesSuccessAction({games: items}))
  ));
}
