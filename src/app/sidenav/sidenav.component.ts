import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('drawer', {static: true})
  public drawer: MatSidenav;
  // content
  @ContentChild('content', {static: true})
  public content: TemplateRef<any>;
  // container
  @ViewChild('container', {static: true, read: ViewContainerRef})
  public container: ViewContainerRef;

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
    this.container.createEmbeddedView(this.content);
    console.log('*content:', this.content); // элемент шаблона должен находиться в рутовом компоненте app.component.html
    console.log('*container:', this.container);
    // this.container.createEmbeddedView(this.content);
  }
  toggleMenu() {
    this.drawer.toggle();
  }
}
