import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonTabs, 
  IonTabBar, 
  IonTabButton, 
  IonIcon, 
  IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonTabs, 
    IonTabBar, 
    IonTabButton, 
    IonIcon, 
    IonLabel
  ]
})
export class TabsPage implements OnInit {
  constructor() {
    // Registro explícito dos ícones SVG utilizados nas abas
    addIcons({ homeOutline, personOutline });
  }

  ngOnInit() { }
}
