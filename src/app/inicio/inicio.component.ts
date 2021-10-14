import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
//Variavel do tipo postagem. 
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: tema = new tema()
  listaTemas: tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  key = 'data'
  reverse = true



  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    private alertas: AlertasService

  ) { }



// Sobre o void - retirei
  ngOnInit(){ //Qnd ele inicia o componente inicio ele everifique se o  environment.token  está igual de vazio como no código a baixo. 
    window.scroll(0,0)
    if(environment.token == ''){ //Toda vez que entrar na pagina inicio vai varificar esse if. Verificando se esse tokin está vazio.
     // alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar']) //E mando para a rota login. só q para mandar para alguma rota eu vou no constructor injetar uma dependencia de rota. ( constructor(private router: Router) { } ) e aqui eu chamo o router que acabou de ser criado, a função navigate esse router e abre o conchete, parenteses e a barra , que nesse caso seria a rota de entrar (['/entrar']). 
    }

    this.getAllTemas()
    this.getAllPostagens()

  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: tema[]) => {
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: tema) =>{
      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

findByIdUser(){
  this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
    this.user = resp 
  })
}

//Método publicar (Primeiro post)
  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}


//Para que usamos o HttpHeaders? Para inserir o token no Authorization e no Header da minha requisição.