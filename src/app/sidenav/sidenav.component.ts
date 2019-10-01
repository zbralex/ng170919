import { places } from './../mock/index';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {MatSidenav} from '@angular/material';
import { Iplaces, Iweather } from '../mock';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output() public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;

  menu: any = [
    {
      name: 'About',
      url: 'about'
    },
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Contacts',
      url: 'contacts'
    }
  ];
  constructor() { }

  public ngOnInit(): void {
    this.setSideNavControl.emit(this.drawer);
  }
  toggleMenu() {
    this.drawer.toggle();
  }
}
