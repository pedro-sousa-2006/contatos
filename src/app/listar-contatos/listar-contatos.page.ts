import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonRouterLink, IonLabel } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { contato } from '../models/contato';
import { Listarservice } from '../services/listarservice';
import { Adicionarservice } from '../services/adicionarservice';
@Component({
  selector: 'app-listar-contatos',
  templateUrl: './listar-contatos.page.html',
  styleUrls: ['./listar-contatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton, IonRouterLink, IonLabel ,RouterModule ]
})
export class ListarContatosPage implements OnInit {
  array_cliente: Array<contato> = [];

  constructor(private listaservice: Listarservice) {}

  ngOnInit() {
   this.array_cliente = this.listaservice.listar();
    
  }

}
