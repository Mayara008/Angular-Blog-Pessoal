import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  //Criando as 4 operações do crud
  //getAllTema (Nome de um tema que eu posso colocar o que preferir)
  //Está com esse nome para todos entenderem que esse método  pega todos os temas. Traduzindo getAllTema significa: obter todos os temas
  getAllTema(): Observable<tema[]>{ //Não vai reseber parametro (Que fica dentro do parenteses)
    return this.http.get<tema[]>('https://darkmay.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<tema>{
    return this.http.get<tema>(`https://darkmay.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: tema): Observable<tema>{
    return this.http.post<tema>('https://darkmay.herokuapp.com/tema', this.token)
  }

  putTema(tema: tema): Observable<tema>{
    return this.http.put<tema>('https://darkmay.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://darkmay.herokuapp.com/tema/${id}`, this.token)
  }

  }


