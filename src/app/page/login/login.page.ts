import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonList,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CardStatusComponent } from 'src/app/component/card-status/card-status.component';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardStatusComponent, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonList,
    IonLabel,
    IonBadge
  ]
})
export class LoginPage implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() { }
    IrParaCadastro(){
    this.router.navigate(['/cadastro'])
    }
  entrarComId(idUsuario: number){
    this.router.navigate(['/detalhes',idUsuario])
  }

}
