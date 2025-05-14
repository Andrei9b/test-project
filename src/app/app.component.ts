import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'test-project';
  cardTitle = 'Title 2.2';
  cardSubtitle = 'Content';
  containerTitle = 'Title Container';
  isCardActive: boolean = false;

  titleChanged(data: string) {
    this.cardTitle = data;
  }

  subtitleChanged(data: string) {
    this.cardSubtitle = data;
  }

  cardStateChanged(isActive: boolean) {
    this.isCardActive = isActive;
  }
}
