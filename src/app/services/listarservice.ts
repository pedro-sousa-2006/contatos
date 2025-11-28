import { Injectable } from '@angular/core';
import { contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class Listarservice {
  listar() : Array<contato>{
    const local = localStorage.getItem("contatos");
    if(!local){
      return [];
    }
    return JSON.parse(local) as Array<contato>;

  }
}
