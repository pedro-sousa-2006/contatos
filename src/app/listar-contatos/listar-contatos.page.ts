import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonList, IonItem, IonButton, IonRouterLink,
  IonLabel, IonInput
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { contato } from '../models/contato';
import { Listarservice } from '../services/listarservice';
import { Alterar } from '../services/alterar';
import { Deletar } from '../services/deletar';

@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, IonList, IonItem,
    IonButton, IonRouterLink, IonLabel, RouterModule,
    IonInput
  ]
})
export class ListarContatosPage implements OnInit {

  array_cliente: Array<contato> = [];

  // variáveis para edição
  editandoId: string | null = null;
  novoNome = "";
  novoSobrenome = "";
  novoEmail = "";

  constructor(
    private listaservice: Listarservice,
    private servicealterar: Alterar,
    private servicedeletar: Deletar
  ) {}

  ngOnInit() {
    this.listaservice.listarTodos().subscribe(dados => {
      this.array_cliente = dados;
      console.log('Contatos carregados:', dados);
    });
  }

  abrirEdicao(item: contato) {
    this.editandoId = item.id!;
    this.novoNome = item.nome;
    this.novoSobrenome = item.sobrenome;
    this.novoEmail = item.email;
  }

  cancel() {
    this.editandoId = null;
  }

  async gravar(item: contato) {
    if (!item.id) return console.error("Contato sem ID!");

    const dados = {
      nome: this.novoNome,
      sobrenome: this.novoSobrenome,
      email: this.novoEmail
    };

    try {
      await this.servicealterar.alterar(item.id, dados);
      console.log("Atualizado!");

      this.cancel(); // fecha inputs

      this.ngOnInit(); // atualiza lista
    } catch (err) {
      console.error("Erro:", err);
    }
  }

  async deletar(item: contato) {
    if (!item.id) {
      console.error("Contato não possui ID!");
      return;
    }

    try {
      await this.servicedeletar.deletarid(item.id);
      console.log("Contato deletado:", item.id);
      this.ngOnInit();
    } catch (err) {
      console.error("Erro ao deletar:", err);
    }
  }

}
