import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonButton,
  IonText,
  IonSpinner,
  IonInput
} from '@ionic/angular/standalone'
import{ FormsModule} from '@angular/forms'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
imports: [
  FormsModule,
  IonContent,
  CommonModule,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonSpinner
 ]
})
export class CadastroPage  implements OnInit {
 usuario = {
    nome: '',
    email: '',
    senha: '',
 };


 mensagemErro = ''
 mensagemSucesso = ''
 carregando = false

  constructor() { }

  ngOnInit() {}

  cadastrar() {
    this.mensagemErro = ''
    this.mensagemSucesso = ''


    if (!this.usuario.nome || !this.usuario.email|| this.usuario.senha){
      this.mensagemErro = 'Preencha todos os campos obrigatorios!!'
     return
    }
    if(this.usuario.senha.length < 6){
      this.mensagemErro = 'A senha deve ter pelo menos 6 caracteres!'
    }


    this.carregando = true

    setTimeout( () => {
      this.carregando = false
      this.mensagemSucesso = 'Cadastro realizado com sucesso!'
      console.log("Dados foram salvos no formulario", this.usuario)
    }, 1500 )
  }

}
