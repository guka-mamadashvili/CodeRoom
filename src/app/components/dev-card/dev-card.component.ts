import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.css']
})
export class DevCardComponent {
  @Input() public developer: any;
}
