import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  @Output() sendInputText = new EventEmitter<string>();

  public searchText = '';

  changeTextFn(){
    
    this.sendInputText.emit(this.searchText);
  }
}
