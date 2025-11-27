import { Injectable } from '@angular/core';
import { contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class Adicionarservice {
  array_contatos : Array<contato> = [];
  adicionar(
    nome :string ,sobrenome :string , email:string
  ){
    const contatos = new contato();
    contatos.nome = nome;
    contatos.sobrenome = sobrenome;
    contatos.email = email;


const obj = {
  nome : contatos.nome,
  sobrenome : contatos.sobrenome,
  email : contatos.email
}
localStorage.setItem("contatos" ,JSON.stringify(obj));

    this.array_contatos.push(contatos);

  }
}
