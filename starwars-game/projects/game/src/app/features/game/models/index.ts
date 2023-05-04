import { GameDto } from '../../../core/models/game.dto';
import { Observable } from 'rxjs';

export type Games = GameDto[];
export type GamesAsObs = Observable<Games>;
