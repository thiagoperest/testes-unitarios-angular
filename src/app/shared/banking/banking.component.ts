import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss'],
})
export class BankingComponent implements OnInit {
  private poupanca: number = 1000;
  private carteira: number = 100;

  constructor() {}

  ngOnInit(): void {}

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number {
    return this.carteira;
  }

  public setSacar(value: string): number {
    const sacar = Number(value);
    console.log(sacar);
    return sacar;
  }

  public setDepositar(value: string): number {
    const depositar = Number(value);
    console.log(depositar);
    return depositar;
  }
}
