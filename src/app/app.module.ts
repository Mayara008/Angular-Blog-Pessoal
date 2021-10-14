//Essa primeira parte são 
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { AlertasComponent } from './alertas/alertas.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    InicioComponent,
    TemaComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UserEditComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, //Para pegar tudo que está escrito no Input do cadastrar.html
    //módulo de modal
    ModalModule.forRoot()      
  ],
  providers: [{ //Com o (import { HashLocationStrategy, LocationStrategy } from '@angular/common';) e os dois código a baixo eles auxiliam para que o id=postagem possa chamar no href de ver postagens q para ele funcionar de forma interna e qnd clicar no botão "VER POSTAGENS" ele possa direcionar para as postagens que estão a baixo na pagina.
    
    provide: LocationStrategy, //Ele ajuda o angular a não se perder nas rotas
    useClass: HashLocationStrategy //Ele ajuda o angular a não se perder nas rotas
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
