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

  it(`(I) setSacar(): shoud transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-carteira').textContent).toEqual('110');
  });

  it(`(U) setSacar(): shoud transfer poupanca dont have string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('10000')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(1000);
    expect(component.getCarteira).toEqual(100);
  });

  it(`(U) setDepositar(): shoud transfer carteira from poupanca`, () => {
    component.setDepositar('100');
    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(1100);
  });

  it(`(U) setDepositar(): shoud transfer carteira dont have string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('10000')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(1000);
    expect(component.getCarteira).toEqual(100);
  });

  it(`(I) setDepositar(): shoud transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('1010');
    expect(component.getCarteira).toEqual(90);
  });
});
