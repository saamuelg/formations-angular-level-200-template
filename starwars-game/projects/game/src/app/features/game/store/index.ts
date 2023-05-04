import { Games } from '../models';
import { createReducer, on } from "@ngrx/store";
import {requestToLoadAllGamesSuccessAction} from "./actions";

export interface GamesState {
  items: Games;
}

const initialState: GamesState = {
  items: []
}

export const gamesReducer = createReducer(initialState,
  on(requestToLoadAllGamesSuccessAction,(state, action) => ({items: action.games}))
  // on(requestToLoadAllGamesSuccessAction,(state, action) => {
  //  const stateBis = {...state};
  //
  //  stateBis.items = action.games; // ou faire du push
  //
  //  return stateBis;
  // })
);
