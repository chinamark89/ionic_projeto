import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Obrigatório para o uso de [(ngModel)]
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
  IonInput,
  IonButton,
  IonText,
  IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Registrado para habilitar formulários reativos/bidirecionais
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonSpinner
  ]
})
export class CadastroPage implements OnInit {

  // Objeto que armazena os dados digitados no formulário
  usuario = {
    nome: '',
    email: '',
    senha: ''
  };

  // Variáveis para controle de feedback visual
  mensagemErro = '';
  mensagemSucesso = '';
  carregando = false;

  constructor() { }

  ngOnInit() { }

  // Função disparada ao clicar no botão de cadastro
  cadastrar() {
    // Limpa mensagens anteriores
    this.mensagemErro = '';
    this.mensagemSucesso = '';

    // Validação 1: Campos obrigatórios
    if (!this.usuario.nome || !this.usuario.email || !this.usuario.senha) {
      this.mensagemErro = 'Preencha todos os campos obrigatórios!';
      return;
    }

    // Validação 2: Tamanho mínimo da senha
    if (this.usuario.senha.length < 6) {
      this.mensagemErro = 'A senha deve ter pelo menos 6 caracteres!';
      return;
    }

    // Ativa o estado de carregamento
    this.carregando = true;

    // Simula uma requisição com atraso de 1.5 segundos
    setTimeout(() => {
      this.carregando = false;
      this.mensagemSucesso = 'Cadastro realizado com sucesso!';
      console.log('Dados do formulário salvos:', this.usuario);
    }, 1500);
  }
}
