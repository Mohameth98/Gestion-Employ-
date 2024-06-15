import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent {
  @Input() numberOfGirls: number = 0;
  @Input() numberOfBoys: number = 0;

  get total(): number {
    return this.numberOfGirls + this.numberOfBoys;
  }
}
