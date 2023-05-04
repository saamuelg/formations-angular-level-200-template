// Etape 1 : à faire une fois par feature module

import {AppState} from "../../../../../store";
import {createSelector, select} from "@ngrx/store";

export const selectState = (app: AppState) => app.games;

// Liste de MES selectors
export const selectAllGames = createSelector(selectState, (state)=> state.items);
export const selectAllSucceeded = createSelector(selectAllGames, games => games.filter(game => game.success))
