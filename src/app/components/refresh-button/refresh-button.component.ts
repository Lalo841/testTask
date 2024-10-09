import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrl: './refresh-button.component.scss',
})
export class RefreshButtonComponent {
  @Output() refreshClick = new EventEmitter<boolean>();

  onClickHandler(){
    this.refreshClick.emit();
  }
}
