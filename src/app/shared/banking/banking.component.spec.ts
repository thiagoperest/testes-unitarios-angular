import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): shoud have poupanca = 1000`, () => {
    expect(component.getPoupanca).toEqual(1000);
  });

  it(`(U) getCarteira(): shoud have carteira = 100`, () => {
    expect(component.getCarteira).toEqual(100);
  });

  it(`(U) setSacar(): shoud transfer poupanca from carteira`, () => {
    component.setSacar('1000');
    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(1100);
  });

  it(`(U) setDepositar(): shoud transfer carteira from poupanca`, () => {
    component.setDepositar('100');
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(1100);
  });
});
