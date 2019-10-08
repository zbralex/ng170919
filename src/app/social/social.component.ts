import { Component, OnInit, Input } from '@angular/core';
import { Isocial } from '../mock';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  @Input() social: Isocial;
}
