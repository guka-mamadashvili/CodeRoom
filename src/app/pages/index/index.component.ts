import { Component } from '@angular/core';
import { Developers } from 'src/data/developers';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  public developers: any = Developers;

}
