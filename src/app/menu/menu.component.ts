import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu', //Esse é o seletor do Menu no app.component.html
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome 
  foto = environment.foto
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
  }

  sair(){ //Método sair, 1° estancio no método constructor ( private router: Router) q será diferecionado para o login.
    // 
    this.router.navigate(['/entrar']) //Vai para login e zera os environment. , onde o menu e rodapé some. 
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }
}

//Quando entramos o token, nome, foto e id do usuario é passado pelo environme, pegar esse environment e colocar em uma variavel local , primeiro vamor pegar o nome ( nome = environment.nome)