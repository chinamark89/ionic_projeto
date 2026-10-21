import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';
import { UsuarioService, PerfilUsuario } from '../../services/usuario.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton
  ]
})
export class InicioPage implements OnInit, OnDestroy {
  usuario: PerfilUsuario | null = null;
  private inscricao: Subscription = new Subscription();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.inscricao = this.usuarioService.usuario$.subscribe(dados => {
      this.usuario = dados;
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
