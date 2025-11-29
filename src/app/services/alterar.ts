import { Injectable } from '@angular/core';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Alterar {

  private colecao = 'contatos';

  constructor(private firestore: Firestore) {}

  async alterar(id: string, dados: any) {
    try {
      const ref = doc(this.firestore, `${this.colecao}/${id}`);
      await updateDoc(ref, dados);
      console.log('Contato alterado com sucesso!');
    } catch (erro) {
      console.error('Erro ao alterar contato:', erro);
    }
  }
}
