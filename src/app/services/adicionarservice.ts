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
    contatos.id_contato= 1+this.array_contatos.length;
    contatos.nome = nome;
    contatos.sobrenome = sobrenome;
    contatos.email = email;


this.array_contatos.push(contatos);
if(this.array_contatos.length >= 0
){
  localStorage.setItem("contatos" ,JSON.stringify(this.array_contatos));
}

    

  }
}
