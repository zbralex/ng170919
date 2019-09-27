import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
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

  ngOnInit() {
  }

}
