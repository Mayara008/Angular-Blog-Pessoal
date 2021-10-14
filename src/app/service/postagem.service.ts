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
    return this.http.get<Postagem[]>('https://darkmay.herokuapp.com/postagens', this.token)
  }

getByIdPostagem(id: number): Observable<Postagem>{
  return this.http.get<Postagem>(`https://darkmay.herokuapp.com/postagens/${id}`, this.token)
}

getByTituloPostagem(titulo: string): Observable<Postagem[]>{ //Trocar a crase para ver o erro que dá. 
  return this.http.get<Postagem[]>(`https://darkmay.herokuapp.com/postagens/titulo/${titulo}`, this.token)
}


postPostagem(postagem: Postagem) : Observable<Postagem>{
  return this.http.post<Postagem>('https://darkmay.herokuapp.com/postagens', postagem, this.token)
}

putPostagem(postagem: Postagem): Observable<Postagem>{
  return this.http.put<Postagem>('https://darkmay.herokuapp.com/postagens', postagem, this.token)
}

deletePostagem(id: number){
  return this.http.delete(`https://darkmay.herokuapp.com/postagens/${id}` , this.token)
}


}
