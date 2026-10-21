import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Interface do modelo de dados de perfil
export interface PerfilUsuario {
  id: number;
  nome: string;
  email: string;
  perfil: string;
}

@Injectable({
  providedIn: 'root' // Disponibiliza a mesma instância do serviço para toda a aplicação
})
export class UsuarioService {
  
  // Estado inicial armazenado no BehaviorSubject
  private usuarioSubject = new BehaviorSubject<PerfilUsuario | null>({
    id: 1,
    nome: 'Usuário Aluno',
    email: 'aluno@faculdade.edu.br',
    perfil: 'Desenvolvedor'
  });

  // Exposição do estado como um Observable público para leitura
  public usuario$: Observable<PerfilUsuario | null> = this.usuarioSubject.asObservable();

  constructor() { }

  // Retorna o valor síncrono atual do estado
  obterUsuarioAtual(): PerfilUsuario | null {
    return this.usuarioSubject.getValue();
  }

  // Atualiza o estado e notifica automaticamente todos os inscritos (Subscribers)
  atualizarNome(novoNome: string) {
    const usuarioAtual = this.usuarioSubject.getValue();
    if (usuarioAtual) {
      const usuarioAtualizado = { ...usuarioAtual, nome: novoNome };
      this.usuarioSubject.next(usuarioAtualizado); // Emite o novo estado
    }
  }
}
