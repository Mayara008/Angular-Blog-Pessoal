import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public auth: AuthService //para acessar a injeção de independencia 
    //Estou estanciado esse Auth, para que eu possa acesar esse auth o logado dentro do  auth.services.ts ali no app.componeent.html e dentro da tag que está lá vou usar, (*ngIf='auth.logado()')
    ){}

  // 
  
  // constructor(){}(public )
}
