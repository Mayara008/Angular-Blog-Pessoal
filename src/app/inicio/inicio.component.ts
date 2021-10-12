import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router) { }
// Sobre o void - retirei
  ngOnInit() { //Qnd ele inicia o componente inicio ele everifique se o  environment.token  está igual de vazio como no código a baixo. 
    if(environment.token == ''){ //Toda vez que entrar na pagina inicio vai varificar esse if. Verificando se esse tokin está vazio.
     // alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar']) //E mando para a rota login. só q para mandar para alguma rota eu vou no constructor injetar uma dependencia de rota. ( constructor(private router: Router) { } ) e aqui eu chamo o router que acabou de ser criado, a função navigate esse router e abre o conchete, parenteses e a barra , que nesse caso seria a rota de entrar (['/entrar']). 
    }
  }

}
