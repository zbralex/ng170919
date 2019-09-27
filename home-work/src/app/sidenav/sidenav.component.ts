import {Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;

  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();
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
