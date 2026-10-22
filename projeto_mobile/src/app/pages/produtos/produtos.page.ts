import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonBadge, 
  IonSpinner 
} from '@ionic/angular/standalone';
import { Produto, ProdutoService } from 'src/app/services/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonBadge, 
    IonSpinner
  ]
})
export class ProdutosPage implements OnInit {
  produtos: Produto[] = [];
  carregando: boolean = true;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  // Realiza a chamada HTTP e atualiza o estado da tela
  carregarProdutos() {
    this.carregando = true;
    this.produtoService.listarProdutos().subscribe({
      next: (dados) => {
        this.produtos = dados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao buscar produtos da API:', erro);
        this.carregando = false;
      }
    });
  }
}