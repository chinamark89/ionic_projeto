import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Permite ler informações da rota ativa
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonBackButton, 
  IonButtons 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonBackButton, 
    IonButtons
  ]
})
export class DetalhesPage implements OnInit {
  // Variável para armazenar o ID capturado da URL
  itemId: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Captura o parâmetro 'id' definido na rota /detalhes/:id
    this.itemId = this.route.snapshot.paramMap.get('id');
    console.log('ID recebido pela rota:', this.itemId);
  }
}
