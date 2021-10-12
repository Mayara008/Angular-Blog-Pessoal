import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
 // Variavel userLogin - Que vamos logar com esse usuário. Letra minuscula no começo pq é o nome da variavel.   
              // UserLogin Nome do objeto tem que ser com letra Maiuscula.
                        // Instanciando com um novo (new) obejto (UserLogin()) / um novo usuario. 
  userLogin: UserLogin = new UserLogin() // Dessa forma vou conseguir usar o userLogin: como referencia no meu ngModel no html do entrar.

  constructor(
    private auth: AuthService, //Injetando a dependencia do auth. é apenas uma varivel que vou chamar ele no  (this.auth.) como (entrar)
    private router: Router // A rota já foi criada e agora para mandar rora essa rota vamos criar a dependencia de rota.
    ) { }

  ngOnInit() {
    window.scroll(0,0) //Colocar como padrão. 
  }

  entrar(){ //Esse método de entrar foi criado para referencia-lo no entrar do html. 
    //Vou passar o (this.userLogin) que está sendo implementado. transformando ele em json com  subscribe
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
      this.userLogin = resp //chama this.userLogin recebebendo resp 
      //Agora para mandar para algum lugar 
      //Eu estou chamando o  environment. da constante de um objeto environment que foi criado no environment.prod.ts  
      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome //Vai trazer o nome do usuario que está cadastrado
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id //Traz o id do usuario que está cadastrado.

   
      this.router.navigate(['/inicio']) //Todo routerLink terá uma / 
      // E essa barra só aparecerá qnd quisermos referenciar para a rota q quero mandar.
    }, erro =>{
      if(erro.status == 500){ //Erro 500 é erro de obejto enviado errado , é algo que não existe. 
        alert('Usúario e senha estão incorretos!') //Tendo esse tipo de rro criei um alert para mandar para meu usuario. 
    }
    })
  }

}
