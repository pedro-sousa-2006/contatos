import { Injectable } from '@angular/core';
import { contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class Listarservice {
  array_contato : Array<contato> = [];
  listar():Array<contato>{
    return this.array_contato;
  }
}
