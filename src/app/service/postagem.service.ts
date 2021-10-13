import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Métodos que vão acessar os endpoints do Backend
  //Quando peço um [] (No getAllpostagem) , preciso referencia-lo com um [] (no return this)
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('http://localhost:8080/postagens', this.token)
  }

postPostagem(postagem: Postagem) : Observable<Postagem>{
  return this.http.post<Postagem>('http://localhost:8080/postagens', postagem, this.token)
}

}
