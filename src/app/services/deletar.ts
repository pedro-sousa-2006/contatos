import { Injectable } from '@angular/core';
import { Firestore, doc, deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Deletar {

  private colecao = 'contatos';

  constructor(private firestore: Firestore) {}

  async deletarid(id: string) {
    try {
      const ref = doc(this.firestore, `${this.colecao}/${id}`);
      await deleteDoc(ref);
      console.log('Deletado com sucesso!');
    } catch (erro) {
      console.error('Erro ao deletar:', erro);
    }
  }
}
