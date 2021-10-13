import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

/* Criar uma pagina que eu quero que seja acessada, por qualqer pessoa de forma internamente, por qualqer componente internamente,preciso criar a ROTA dessa pgina,um exemplo é o {path:'inicio', component:InicioComponent} */
const routes: Routes = [ /* Array de objeto de rotas */ 
  /* Primeiro objeto será rota entrar */

  
  /*Ele não tem nenhuma rota, como faço pra ele ir pra uma rota especifica? Basta criar um Path vazio (como está a baixo|path:'') com um redirectTo para direcionar a rota que vc quer ('entrar') e da rota que vc quer ele leva para o componente correspondente ('EntrarComponent') e logo em seguida outro atributo  (pathMatch:'full') pra ele trazer toda a rota  */
  {path:'', redirectTo:'entrar', pathMatch:'full' }, //Toda vez que tiver for vazio, ele vai para o componete entrar a baixo. 

  {path:'entrar', component:EntrarComponent},
  {path:'cadastrar', component:CadastrarComponent},

  {path:'inicio', component:InicioComponent},/*A rota do meu inicio está criada */
  /*  Como referencia um objeto? com {} e dentro da chave vamos colocar os atributos dos objetos */
  /*path((CAMINHO)string que desejamos para a nossa rota,ou seja, nome da minha rota) */
  /*component(passamos o nome do component que desejamos adicionar para a nossa rota. pra qual componente essa rota vai)*/
  /* Essa rota vai para o componente InicioComponent , e qnd vc dá enter já dá o import lá em cima*/
  /* pra separa os meus objetos dentro do arrey, preciso de virgula */

{path: 'tema', component: TemaComponent},
//para criar um path no objeto de rotas que recebe um parâmetro funciona
//assim:"nome-da-rota/:paramentro"
{path: 'tema-edit/:id', component: TemaEditComponent},
{path: 'tema-delete/:id', component: TemaDeleteComponent},
{path: 'postagem-edit/:id', component: PostagemEditComponent},
{path: 'postagem-delete/:id', component: PostagemDeleteComponent}

];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }


/*Toda q vez que eu criar um novo componente que eu quiser que ele seja acessado, eu vou entrar nessa tela "app-routing.modules.ts"  */


/* */

/* */

/* */

/* */



