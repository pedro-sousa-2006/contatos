import { Injectable } from '@angular/core';
import { contato } from '../models/contato';
import { initializeApp } from "firebase/app";
import {  addDoc } from "firebase/firestore"; 
import { collection, Firestore, getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root',
})
export class Adicionarservice {

  constructor(private firestore : Firestore){}

async  adicionar(

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
