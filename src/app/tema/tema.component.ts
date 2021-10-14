import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  //instanciando tema
  tema: tema = new tema()
  listaTemas: tema[]
  alertas: any;


  constructor(
    private router: Router, //injetando as dependecias que preciso. 
    private temaService: TemaService //temaService: - Variavel começando com letra minuscula
    // private alertas: AlertasService - depois implementar.
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar']) 
    }

    if(environment.tipo != 'adm'){
      this.alertas.showAlertInfo('Você precisa ser adm para acessar essa rota') 
      this.router.navigate(['/inicio'])
    } 



    this.findAllTemas()

  }

//procure todos os temas
  findAllTemas(){ //Vai acessar o temaService pegar o método getAlltema e ele vai retonar um temoa Arrey, 
    this.temaService.getAllTema().subscribe((resp: tema[]) => {
      this.listaTemas = resp
    })
  }

  cadastrar(){
    this.temaService.postTema(this.tema).subscribe((resp: tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!')
      this.findAllTemas()
      this.tema = new tema() //Zera meu campo
    })
  }
}
