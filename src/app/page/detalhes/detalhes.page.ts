import { Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBackButton,
  IonButtons,
  IonTitle
} from '@ionic/angular/standalone'
import{ActivatedRoute}from '@angular/router'
import{CommonModule}from '@angular/common'



@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports:[
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBackButton,
  IonButton,
  CommonModule,
  IonTitle
  ]
})
export class DetalhesPage  implements OnInit {
  itemId: string | null = ''
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.itemId = this.route.snapshot.paramMap.get('id')
    console.log('recebido pela rota:', this.itemId)
  }


}
