import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent implements OnInit {

  @Input() cardTitle = '';
  @Input() cardSubtitle = '';
  @Input() containerTitle = '';

  @Output() cardState = new EventEmitter<boolean>();

  isCardActive = false;
  isCardDisabled = false;

  constructor() { }

  ngOnInit(): void {
    this.cardState.next(this.isCardActive);
  }
  
  cardActiveStateChanged(isActive: boolean) {
    this.isCardActive = isActive;
    this.cardState.next(isActive);
  }
}
