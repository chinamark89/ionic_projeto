import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
   path: '',
   redirectTo: 'login',
   pathMatch:'full' //manda direto para o login
  },
  {
  path:'login',
  loadComponent:() => import('./page/login/login.page').then(m => m.LoginPage)
  },
  {
   path:'cadastro',
   loadComponent:() => import('./page/cadastro/cadastro.page').then(m => m.CadastroPage)
  },
 ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
