import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({ 
  selector: 'app-cadastrar', 
  templateUrl: './cadastrar.component.html', 
  styleUrls: ['./cadastrar.component.css'] 
})
export class CadastrarComponent implements OnInit { 
// Meu objeto usuario, como varivel e as variveais são declaradas e cima dos construtores. 
  user: User = new User 
// vou importar 'User' e vamos extanciar um novo objeto ' = new User' foi extanciado e agora tenho uma varivel q é do tipo User. Pega essa variavel e cria um  this. no ngOnInit que terará todos os atributos
  tipoUsuario: string //.....11-E AQUi vou criar uma variavel do "tipo Usuario"
  //VARIAVEL - confirmarSenha:
  confirmarSenha: any; //.....07-para pegar o valor do input vou criar uma variável p/ armazenar esse valor e seu nome será (confirmarSenha: any;) E não pode ser o mesmo nome que o método.
//Todo método é acompanhado de ()
  constructor(  //Após as senhas estarem corretar na confirmação, aqui eu vou referencia o service de autenticação que foi criado. 
    private authService: AuthService, //Estou referenciando aqui como nome de 1 variavel. o authService foi importado
    //Isso se chama INJEÇÃO DE DEPENDENCIA, TUDO que se coloca DENTRO do CONSTRUSTOR é INJEÇÃO DE alguma DEPENDENCIA. 
    //Esse modulo de (authService:) serve para fazer o cadastro.
    private router: Router //Mandar para uma rota interna pelo TS. Vamos INJETAR ESSA DEPENDENCIA. 
    //private router: nome da variável. e após os : tem que ser letra Maiuscula 
  ) { }
  //
  ngOnInit() { //Quando minha pagina iniciar ela fará 'x', 'y', 'z'
    window.scroll(0,0) //Colocamos esse comando em todas as peginas por padrão, para que ele fiquei no X,0 e no y,0 , para que fique no topo da tela
  }
  //.....02-Estou criando esse método para confirmar minha senha. com () e {}, o ( parenteses sempre fica ao lado do método)
  //Dentro do parenteses vou receber um EVENTO (event),  que é TypeScript puro, do tipo ANY.
  //MÉTODO - confirmSenha(com EVENTO dentro) {}
  confirmSenha(event: any) {   
    this.confirmarSenha = event.target.value //.....08-O que tiver nesse valor do input(event.target.value) ele vai colocar para esse (this.confirmarSenha =).
//this. (tras todos os atributos dessa model)
//para implementar o cadastro precisamo no html saber tudo que está no input

  }

  tipoUser(event: any){ //.....10-Método que está recendo um evento do tipo ANY
    this.tipoUsuario = event.target.value //.....12- Criei a Variavel lá em cima e estou chamando ele aqui no (this.) que vai receber tbm event.target.value , que será o valor que eu selecionar.
  } //...D-Quando ele fala pra pegar esse tipousuario está se referindo o que está a cima. 
  
  cadastrar(){ //...A-Evento cadastrar | //...C- Nesse cadastrar, 1° coisa é pegar o tipo de usuario (this.tipoUsuario) e colocar dentro da variavel tipo de usuario no meu User. (this.user.tipo)
    this.user.tipo = this.tipoUsuario // a user.tipo vai receber essa variavel (this.tipoUsuario) que foi preenchida com o valor (event.target.value) do meu select que foi selecionado (Onde foi o input foi trocado pelo change)
    //para comparar as senhas vou usar um (if) simples, uma estrutura igual o JS. 
    if(this.user.senha != this.confirmarSenha){ //Dentro do (if) vou perguntar se this.user.senha (representa o cara do user.senha, do "Senha" - 'confirmSenha($event)) for diferente (!=) de (representa o this.confirmarSenha, do "Confirmar Senha" - [(ngModel)]='user.senha'), vou mandar um alert pra ele.  
      alert('As senhas estão incorretas.') //No caso esse alert. para validação.

  } else { //chamo o ( this.authService) e com o "." ele tras os métodos que existem lá que no caso é cadastrar e entrar e eu escolhi (cadastrar) , ele espera (this.user) , isso pq ele espera que eu pegue o usuario | user: User = new Use| que foi preenchido nos [(ngModel)] está no componente html, mande para meu servidor (esse usuario que está sendo preenchido seja mdando para meu servidor)
    this.authService.cadastrar(this.user).subscribe((resp: User)=>{ // Só que ele não manda de forma json, ele manda um objeto ts, só que eu preciso tranformar em json para que meu servidor entendar? Nesse caso coloco um "." e a palavra reservada subscribe (.subscribe), ele vai sobscrever o meu obejto TS e  tranforma-lo em um objeto json para o servidor entender a requisição. Abri e fecho 2 parenteses. (()) Onde será criado um resp, ou seja, uma variavel , uma resposta, e o User, pq ele vai me responder o User. ((resp: User) loco em seguida eu coloco o (=>) abrindo e fechando chaves
      this.user = resp // Aqui vai receber a resp, pq está dentro da ((resp: User) com o outro parenteses e chaves.
      this.router.navigate(['/entrar'])  //DEPOIS que ele cadastrar, ele precisa ir para a rota de Login, por se tratar de uma questão de usabilidade, que nesse caso seria com o routerLink no html , agora no TS seria como? Precisa de uma dependencia chamada Router (private router: Router )
      // this.router. - nome da minha variavel q crie na injeção .navigate(['/entrar']) - Nome da minha rota que quero enviar o meu usuario , nesse caso enviar para entrar.

      alert(`Usuário cadastrado com sucesso!`) //Estou mando um alerta para meu usuario quando ele enviar para entrar.
    })
  }
  }
}

//  

//
//




/*  */

/*  */
