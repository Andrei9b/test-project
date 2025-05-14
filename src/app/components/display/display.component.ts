import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  standalone: false
})
export class DisplayComponent implements OnInit {

  @Output() titleChanged = new EventEmitter<string>();
  @Output() subtitleChanged = new EventEmitter<string>();
  title = new FormControl('');
  subtitle = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.title.valueChanges.subscribe(
      input => this.titleChanged.next(input || '')
    );
    this.subtitle.valueChanges.subscribe(
      input => this.subtitleChanged.next(input || '')
    );
  }

}
