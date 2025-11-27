import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonRouterLink, IonLabel, IonInput } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adicionar-contatos',
  templateUrl: './adicionar-contatos.page.html',
  styleUrls: ['./adicionar-contatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton, IonRouterLink, IonLabel, RouterModule, IonInput ,CommonModule ,FormsModule , RouterModule]
})
export class AdicionarContatosPage implements OnInit {

  constructor() { }
  nome = "";
  sobrenome = "";
  email = "";
  mensagem  = ""

  salvar(){
    if(this.nome == ""){
      this.mensagem = "Digite seu nome";
    }
   else if(this.sobrenome == ""){
      this.mensagem = "Digite o sobrenome"
    }
   else if(this.email == ""){
this.mensagem = "Digita o email@";
    }
    else{
      this.mensagem = "";
    }
  }

  ngOnInit() {
  }

}
