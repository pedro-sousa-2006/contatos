import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class Listarservice {

  private colecao = 'contatos';

  constructor(private firestore: Firestore) {}

  listarTodos(): Observable<contato[]> {
  const ref = collection(this.firestore, this.colecao);
  return collectionData(ref, { idField: 'id' }) as Observable<contato[]>;
}

}
