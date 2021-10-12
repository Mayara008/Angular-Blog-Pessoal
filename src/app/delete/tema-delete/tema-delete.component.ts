import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-tema-delete',
  templateUrl: './tema-delete.component.html',
  styleUrls: ['./tema-delete.component.css']
})
export class TemaDeleteComponent implements OnInit {

  //instanciar um tema
  tema: tema = new tema()
  idTema: number

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    //Pegar o id que está na rota ativa.
    this.idTema = this.route.snapshot.params['id']
    this.findByIdTema(this.idTema)

  }

  findByIdTema(id: number){
    this.temaService.getByIdTema(id).subscribe((resp: tema)=>{
      this.tema = resp
    })
  }

  apagar(){
    this.temaService.deleteTema(this.idTema).subscribe(()=>{
      alert('Tema apagado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}


//Como pegar o parâmentro enviado através da rota?
//Injete o ActivatedRoute e utlize o código: route.snapshot.params['parametro']