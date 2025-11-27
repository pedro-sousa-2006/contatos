import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonRouterLink, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Adicionarservice } from '../services/adicionarservice';

@Component({
  selector: 'app-adicionar-contatos',
  templateUrl: './adicionar-contatos.page.html',
  styleUrls: ['./adicionar-contatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,
  CommonModule, FormsModule,
  IonList, IonItem, IonButton,
  IonRouterLink, IonLabel, IonInput,
  RouterModule]
})
export class AdicionarContatosPage implements OnInit {

  constructor(
    private router : Router ,
    private adicionarservice : Adicionarservice
  ) { }
  nome = "";
  sobrenome = "";
  email = "";
  mensagem  = ""

  salvar(){
    if(!this.nome.length 
      || !this.sobrenome 
      || !this.email){
      this.mensagem = "Preencha todos os campos!";
    }else{
      this.adicionarservice.adicionar(
        this.nome ,
        this.sobrenome ,
        this.email
      );
      this.router.navigate(['/listar-contatos']);
    }
  }

  ngOnInit() {
  }

}
