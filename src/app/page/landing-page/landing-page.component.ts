import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonItem,
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { rocketOutline , logInOutline , personAddOutline} from 'ionicons/icons'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonIcon,
    IonInput,
    IonButton
  ]
})
export class LandingPageComponent implements OnInit{

  constructor(private router: Router) {
    addIcons ({rocketOutline, logInOutline , personAddOutline});
    
  }

  ngOnInit(){ }

  irParaLogin(){
   this.router.navigate(['/login'])
}

 irParacadatro(){
  this.router.navigate(['/cadastro'])
 }
}
