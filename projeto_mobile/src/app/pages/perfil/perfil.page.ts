import { Component, OnInit, OnDestroy } from '@angular/core';
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
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton 
} from '@ionic/angular/standalone';
import { UsuarioService, PerfilUsuario } from '../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
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
    IonCardContent, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton
  ]
})
export class PerfilPage implements OnInit, OnDestroy {
  usuario: PerfilUsuario | null = null;
  novoNome: string = '';
  private inscricao: Subscription = new Subscription();

  // Injeção de dependência do serviço no construtor
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    // Inscrição reativa para ouvir alterações no perfil do usuário em tempo real
    this.inscricao = this.usuarioService.usuario$.subscribe(dados => {
      this.usuario = dados;
      if (dados) {
        this.novoNome = dados.nome;
      }
    });
  }

  // Método para disparar a atualização no serviço
  salvarPerfil() {
    if (this.novoNome.trim()) {
      this.usuarioService.atualizarNome(this.novoNome);
      console.log('Perfil atualizado com sucesso no serviço reativo!');
    }
  }

  // Boa prática: Cancelar a inscrição ao destruir o componente para evitar vazamento de memória
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
