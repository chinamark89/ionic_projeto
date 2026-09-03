import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonBadge
} from '@ionic/angular/standalone'

import{CommonModule} from '@angular/common' 

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonBadge
  ]
})
export class CardStatusComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
