import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionProduit';

  numberOfGirls = 10;
  numberOfBoys = 15;
  girlsData = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  boysData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
