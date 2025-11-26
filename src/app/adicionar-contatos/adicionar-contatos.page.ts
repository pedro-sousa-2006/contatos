import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonButton, IonRouterLink, IonLabel } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-adicionar-contatos',
  templateUrl: './adicionar-contatos.page.html',
  styleUrls: ['./adicionar-contatos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonItem, IonButton, IonRouterLink, IonLabel ,RouterModule ]
})
export class AdicionarContatosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
