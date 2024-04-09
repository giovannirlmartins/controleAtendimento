import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class SenhasService {
  public qtdSenhasGeral: number = 0;
  public qtdSenhasPrior: number = 0;
  public qtdSenhasExame: number = 0;
  public qtdSenhasTotal: number = 0;

  public senhaGeral: Array<string> = [];
  public senhaPrior: Array<string> = [];
  public senhaExame: Array<string> = [];

  public data : Date = new Date(); //currentYear: Date = date.getFullYear();
  public mes: number = this.data.getMonth()+1;
  public dia: number = this.data.getDate();
  public ano: number = this.data.getFullYear()-2000;

  public arraySenhasChamadasNoDia: Array<string> = [];
  public arrayUltimasSenhasChamadas: Array<string> = [];
  public ultimaSenhaEmitida: string = '';
  public ultimaSenhaChamada: string = '';
  
  public guiche: number = 0;
  public imparPar: number = 0;
  public indexSenhas: number = 0;
  public indexSenhasDoDia: number = 0;
  public indexPrior: number = 0;
  public indexGeral: number = 0;
  public indexExame: number = 0;

  constructor() { }

  gerarSenhaGeral(){
    var mes: string = ''; //variaveis para preencher a senha 
    var dia: string = '';
    
    this.qtdSenhasGeral++; //incremento das variaveis
    this.qtdSenhasTotal++;

    if(this.mes<10){       //adicionar o 0 em meses menores que 10
      mes = '0' + this.mes;
    } else {
      mes = '' + this.mes;
    }

    if(this.dia<10){      //adicionar o 0 em dias menores que 10
      dia = '0' + this.dia;
    } else {
      dia = '' + this.dia;
    }

    if (this.qtdSenhasGeral<10) {
      this.senhaGeral[this.qtdSenhasGeral-1] = this.ano + mes + dia + 'SG' + '0' + this.qtdSenhasGeral;
    } else {
      this.senhaGeral[this.qtdSenhasGeral-1] = this.ano + mes + dia + 'SG' + this.qtdSenhasGeral;
    }

    this.ultimaSenhaEmitida = this.senhaGeral[this.qtdSenhasGeral-1];
  }


  gerarSenhaPrior(){
    var mes: string = ''; //variaveis para preencher a senha 
    var dia: string = '';
    
    this.qtdSenhasPrior++; //incremento das variaveis
    this.qtdSenhasTotal++;

    if(this.mes<10){       //adicionar o 0 em meses menores que 10
      mes = '0' + this.mes;
    } else {
      mes = '' + this.mes;
    }

    if(this.dia<10){      //adicionar o 0 em dias menores que 10
      dia = '0' + this.dia;
    } else {
      dia = '' + this.dia;
    }

    if (this.qtdSenhasPrior<10) {
      this.senhaPrior[this.qtdSenhasPrior-1] = this.ano + mes + dia + 'SP' + '0' + this.qtdSenhasPrior;
    } else {
      this.senhaPrior[this.qtdSenhasPrior-1] = this.ano + mes + dia + 'SP' + this.qtdSenhasPrior;
    }

    this.ultimaSenhaEmitida = this.senhaPrior[this.qtdSenhasPrior-1];
  }

  gerarSenhaExame(){
    var mes: string = ''; //variaveis para preencher a senha 
    var dia: string = '';

    this.qtdSenhasExame++; //incremento variaveis
    this.qtdSenhasTotal++;

    if(this.mes<10){       //adicionar o 0 em meses menores que 10
      mes = '0' + this.mes;
    } else {
      mes = '' + this.mes;
    }

    if(this.dia<10){      //adicionar o 0 em dias menores que 10
      dia = '0' + this.dia;
    } else {
      dia = '' + this.dia;
    }

    if (this.qtdSenhasExame<10) {
      this.senhaExame[this.qtdSenhasExame-1] = this.ano + mes + dia + 'SE' + '0' + this.qtdSenhasExame;
    } else {
      this.senhaExame[this.qtdSenhasExame-1] = this.ano + mes + dia + 'SE' + this.qtdSenhasExame;
    }

    this.ultimaSenhaEmitida = this.senhaExame[this.qtdSenhasExame-1];
  }

  guiche01(){
    this.guiche = 1;
    this.chamarProximaSenha();
  }

  guiche02(){
    this.guiche = 2;
    this.chamarProximaSenha();
  }

  guiche03(){
    this.guiche = 3;
    this.chamarProximaSenha();
  }

  guiche04(){
    this.guiche = 4;
    this.chamarProximaSenha();
  }


  ultimasSenhasChamadas(){
    
  }
  chamarProximaSenha(){

    if(this.qtdSenhasExame==0 && this.qtdSenhasGeral==0 && this.qtdSenhasPrior==0){
      alert("Sem Senha para chamar");
    }
    //procurar se tem senha prioridade, depois se tem exame e depois geral
    if (this.imparPar%2==0) { //Se for par
      if(this.qtdSenhasPrior!=0 && this.indexPrior<this.qtdSenhasPrior){
        this.arrayUltimasSenhasChamadas[this.indexSenhas] = this.senhaPrior[this.indexPrior];
        this.arraySenhasChamadasNoDia[this.indexSenhasDoDia] = this.senhaPrior[this.indexPrior];
        this.ultimaSenhaChamada = this.senhaPrior[this.indexPrior];
        this.indexSenhas++;
        this.indexPrior++;
      }
    } else { //Se for impar
      if(this.qtdSenhasExame!=0 && this.indexExame<this.qtdSenhasExame){
        this.arrayUltimasSenhasChamadas[this.indexSenhas] = this.senhaExame[this.indexExame];
        this.arraySenhasChamadasNoDia[this.indexSenhasDoDia] = this.senhaExame[this.indexExame];
        this.ultimaSenhaChamada = this.senhaExame[this.indexExame];
        this.indexSenhas++;
        this.indexExame++;
      }
      else if (this.qtdSenhasGeral!=0 && this.indexGeral<this.qtdSenhasGeral) {
        this.arrayUltimasSenhasChamadas[this.indexSenhas] = this.senhaGeral[this.indexGeral];
        this.arraySenhasChamadasNoDia[this.indexSenhasDoDia] = this.senhaGeral[this.indexGeral];
        this.ultimaSenhaChamada = this.senhaGeral[this.indexGeral];
        this.indexSenhas++;
        this.indexGeral++;
      }
      else{
        alert("Sem Senha para chamar");
      }
    }

    //Não deixa mostrar mais do que as últimas 5;
    if (this.indexSenhas>4){
      this.indexSenhas = 0;
    }

    this.imparPar=this.imparPar+1;
  }
}
