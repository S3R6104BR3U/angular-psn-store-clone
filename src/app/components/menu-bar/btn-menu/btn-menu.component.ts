import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.css']
})
export class BtnMenuComponent implements OnInit {

  @Input()
  item: string = ''

  @Input()
  btnName: string = ''

  ps5: boolean = false
  ps4: boolean = false
  psvr: boolean = false
  psPlus: boolean = false
  comprarJogos: boolean = false
  ps4Pro: boolean = false
  psvr2: boolean = false
  psStars: boolean = false
  psBlog: boolean = false
  esteMesNoPlayStation: boolean = false
  psStore: boolean = false
  suporte: boolean = false
  statusDaPsn: boolean = false

  btnMenu: boolean = false
  
  openMenu():void {
    
    if (this.btnMenu === false) {
      this.btnMenu = true
    } else {
      this.btnMenu = false
    }
      
   // this.organizarMenu(this.btnName)
      this.ps5 = false
      this.ps4 = false
      this.psvr = false
      this.psPlus = false
      this.comprarJogos = false
      this.ps4Pro = false
      this.psvr2 = false
      this.psStars = false
      this.psBlog = false
      this.esteMesNoPlayStation = false
      this.psStore = false
      this.suporte = false
      this.statusDaPsn = false


    if(this.btnName === 'Jogos') {
      this.ps5 = true
      this.ps4 = true
      this.psvr = true
      this.psPlus = true
      this.comprarJogos = true
    } else if ( this.btnName === 'Hardware') {
      this.ps5 = true
      this.ps4 = true
      this.ps4Pro = true
      this.psvr2 = true
    } else if ( this.btnName === 'Serviços') {
      this.psPlus = true
      this.psStars = true
    } else if ( this.btnName === 'Notícias') {
      this.psBlog = true
      this.esteMesNoPlayStation = true
    } else if ( this.btnName === 'Lojas') {
      this.psStore = true
    } else if ( this.btnName === 'Suporte') {
      this.suporte = true
      this.statusDaPsn = true
    }

  }
/*
  organizarMenu(option: string):void {
      this.ps5 = false
      this.ps4 = false
      this.psvr = false
      this.psPlus = false
      this.comprarJogos = false
      this.ps4Pro = false
      this.psvr2 = false
      this.psStars = false
      this.psBlog = false
      this.esteMesNoPlayStation = false
      this.psStore = false
      this.suporte = false
      this.statusDaPsn = false
    

    if(option === 'Jogos') {
      this.ps5 = true
      this.ps4 = true
      this.psvr = true
      this.psPlus = true
      this.comprarJogos = true
    } else if ( option === 'Hardware') {
      this.ps5 = true
      this.ps4 = true
      this.ps4Pro = true
      this.psvr2 = true
    } else if ( option === 'Serviços') {
      this.psPlus = true
      this.psStars = true
    } else if ( option === 'Notícias') {
      this.psBlog = true
      this.esteMesNoPlayStation = true
    } else if ( option === 'Lojas') {
      this.psStore = true
    } else if ( option === 'Suporte') {
      this.suporte = true
      this.statusDaPsn = true
    }
  } */


  constructor() { }

  ngOnInit(): void {
  }

}