import { Injectable } from '@angular/core';
import { contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class Adicionarservice {

  adicionar(

    nome :string ,sobrenome :string , email:string
  ){
   let array_contatos : Array<contato> = [];
    const local = localStorage.getItem("contatos");

     if(local){
      array_contatos = JSON.parse(local);
     }
    const contatos = new contato();
    contatos.id_contato=1 + array_contatos.length;
    contatos.nome = nome;
    contatos.sobrenome = sobrenome;
    contatos.email = email;

  array_contatos.push(contatos);







  localStorage.setItem("contatos"
     ,JSON.stringify(array_contatos));

    

  }
  
  
}
