import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() public title = 'Header';
  @Input() public drawer: MatSidenav;
  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.setSideNavControl.emit(this.drawer);
  }
public toggleMenu() {
  this.drawer.toggle();
}
}
