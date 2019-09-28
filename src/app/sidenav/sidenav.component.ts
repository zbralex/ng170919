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
// content
  @ContentChild('content', {static: true})
  public content: TemplateRef<any>;
  @ContentChild('contentWeather', {static: true})
  public contentWeather: TemplateRef<any>;
  // container
  @ViewChild('containerPLace', {static: true, read: ViewContainerRef})
  public containerPLace: ViewContainerRef;
  @ViewChild('containerWeather', {static: true, read: ViewContainerRef})
  public containerWeather: ViewContainerRef;

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
    this.containerPLace.createEmbeddedView(this.content);
    this.containerWeather.createEmbeddedView(this.contentWeather);
    // this.container.createEmbeddedView(this.content);
  }
  toggleMenu() {
    this.drawer.toggle();
  }
}
