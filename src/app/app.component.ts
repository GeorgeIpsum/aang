import { Component, HostListener } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aang';
  map: Map;

  @HostListener('window:focus', ['$event'])
  onFocus(event): any {

  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: any): void {
    
  }
}
