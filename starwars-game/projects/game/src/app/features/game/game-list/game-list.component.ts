import {Component, inject, OnInit} from '@angular/core';
import {BehaviorSubject, fromEvent, mergeMap, Observable, Subject, switchMap, tap} from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import {SearchService} from "../../../shared/components/search/services";
import {GameBusiness} from "../../../shared/components/search/services/game.business";
import {select, Store} from "@ngrx/store";
import {requestToLoadAllGamesAction} from "../store/actions";
import {selectAllGames, selectAllSucceeded} from "../store/selectors";

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  // games: GameDto[] = [];
  searchItem = '';
  // private readonly searchService = inject(SearchService);
  // games$ = this.searchService.asObservable.pipe(
  //   switchMap(item => this.gameService.getAll(item.value, 3))
  // )

  private readonly store = inject(Store);
  // games$ = inject(GameBusiness).searchAll();
  games$ = this.store.pipe(select(selectAllSucceeded));

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.store.dispatch(requestToLoadAllGamesAction())
    // this.searchService.asObservable.subscribe(item => {
    //   this.gameService.getAll(3).subscribe(items => this.games = items);
    // });
    /**
     * OU
     */
    // this.searchService.asObservable.pipe (
    //   switchMap(item => this.gameService.getAll(3))
    // ).subscribe(items => this.games = items);
    /**
     * OU
     */

  }

}
