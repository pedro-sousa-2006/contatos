import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarContatosPage } from './adicionar-contatos.page';

describe('AdicionarContatosPage', () => {
  let component: AdicionarContatosPage;
  let fixture: ComponentFixture<AdicionarContatosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarContatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
