import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarTransacaoPopupComponent } from './adicionar-transacao-popup.component';

describe('AdicionarTransacaoPopupComponent', () => {
  let component: AdicionarTransacaoPopupComponent;
  let fixture: ComponentFixture<AdicionarTransacaoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdicionarTransacaoPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarTransacaoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
