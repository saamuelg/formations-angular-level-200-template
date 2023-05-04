import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchType } from './models';
import { SearchService } from './services';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  item: SearchType = { value: '' };
  private readonly searchService = inject(SearchService);
  // private readonly searchService = factoryCreateService();

  search(): void {
    this.searchService.search(this.item);
  }

}
