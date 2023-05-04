import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import {fromEvent, interval, take} from "rxjs";

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {

  }


  ngOnInit(): void {

  }

  logView() {
  }

  onClick() {
  }

  setInterval() {
    // const numbers = interval(1000);
    //
    // const takeInterval = numbers.pipe(take(3));
    //
    // takeInterval.subscribe(x => console.log( x + 1));
    //
    // let number = 1;
    // const myInterval = setInterval(function () {
    //   console.log(number ++);
    //   if (3 < number) {
    //     clearInterval(myInterval);
    //   }
    // }, 1000);

  }
  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
