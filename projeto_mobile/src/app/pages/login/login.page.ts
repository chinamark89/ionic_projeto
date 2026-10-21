import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  IonBadge,
  IonLabel
} from '@ionic/angular/standalone';
import { CardStatusComponent } from '../../components/card-status/card-status.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    IonBadge,
    IonLabel,
    CardStatusComponent
  ]
})
export class LoginPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  // Navegação simples para a tela de cadastro
  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  // Navegação com parâmetro de URL dinâmico
  entrarComId(idUsuario: number) {
    this.router.navigate(['/detalhes', idUsuario]);
  }
}
