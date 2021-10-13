import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', user)
  }
  
  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>('http://localhost:8080/usuarios/${id}')
  }


  logado(){ //para saber se o usuario está loga ou não. Esse método vai verificar se existe um token no meu environment, se ele está preenchido. E ele só é prenechido a partir do botão entrar. 
    let ok: boolean = false //'OK' é uma variavel boleana que recebe falso.
    //no código a cima, estou criando uma variavel 'OK' e determinando q ela recebe falso, isso diz que é uma variavel boleana.  
    // Se o meu environment.token, for diferente de vazio significa que o OK recebera um true.
          // Se o retorno for verdade e entra na condicional.  
    if (environment.token != ''){ //condicional. 
      ok = true //nesse caso seria esse ok recebido. e dá o retorno no ok.
    }
            //que seria esse retorno.
    return ok
  }

  //Esse código logado quer dizer que: 
}