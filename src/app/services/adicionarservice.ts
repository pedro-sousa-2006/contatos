import { Injectable } from '@angular/core';
import { contato } from '../models/contato';

import {
  Firestore,
  collection,
  addDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Adicionarservice {

  constructor(private firestore: Firestore) {}

  async adicionar(nome: string, sobrenome: string, email: string) {

    // ===== LOCALSTORAGE =====
    let array_contatos: Array<contato> = [];
    const local = localStorage.getItem("contatos");

    if (local) {
      array_contatos = JSON.parse(local);
    }

    const contatos = new contato();
    contatos.id_contato = array_contatos.length + 1;
    contatos.nome = nome;
    contatos.sobrenome = sobrenome;
    contatos.email = email;

    array_contatos.push(contatos);

    localStorage.setItem("contatos", JSON.stringify(array_contatos));

    // ===== FIRESTORE =====
    const objeto = {
      id: contatos.id_contato,
      nome: contatos.nome,
      sobrenome: contatos.sobrenome,
      email: contatos.email
    };

    const ref = collection(this.firestore, "contatos");

    await addDoc(ref, objeto);
  }
}
