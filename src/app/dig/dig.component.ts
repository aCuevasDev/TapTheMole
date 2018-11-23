import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,  //no tocar
    selector:"dig",
    templateUrl:"dig.component.html",
    styleUrls:["dig.component.css"]
})export class DigComponent implements OnInit{
    topo = "res://topo"
    forat = "res://forat"
    toposInit = 6;
    toposMax = 12;
    estats = Array(this.toposInit).fill(this.forat);
    punts = 0;
    lastPunts = 0;
    tempsInit = 30;
    temps = this.tempsInit;
    buffertemps = 0;
    videsInit = 5;
    vides = new Array(this.videsInit);
    playable = true;
    gameOver="";
    timer;
    interval;
    intervalTime = 500;

    ngOnInit(){
        this.iniciaInterval();
    }

    onClick(pos){
        if (this.playable){
      if(this.estats[pos] == this.topo){
        this.punts += 10;
        if(this.punts > 200)
            this.aceleraTopos();
        if(this.lastPunts +100 <= this.punts){
            if (this.estats.length < this.toposMax)
                this.estats.splice(this.estats.length,0,this.forat, this.forat, this.forat);
            console.log("size: " +this.estats.length);
            this.lastPunts = this.punts;
        }
        this.estats[pos] = this.forat;
      }else {
        this.punts -= 20;
            }
        }
    }

    aceleraTopos(){
       // this.sacaTopos();
        this.intervalTime = 325;
        clearInterval(this.interval)
        this.iniciaInterval();
    }

    cambiaTopos(pos){
        if(this.playable){
        switch(this.estats[pos]){
            case this.topo: this.estats[pos] = this.forat;
            this.vides.length -= 1;
            if (this.vides.length == 0)
              this.hasPerdido();
            break;
            case this.forat: this.estats[pos] = this.topo;
            break;
        }
    }
    }

    sacaTopos(){
        let pos=Math.floor((Math.random() * this.estats.length));
        this.cambiaTopos(pos);
        this.buffertemps += this.intervalTime/1000;
        if(this.buffertemps == 1 && this.temps > 0){
            this.temps--;
            this.buffertemps = 0;
        }
        if(this.temps == 0){
            this.hasPerdido();
        }
    }
    
    iniciaInterval(){
       this.interval = setInterval(()=>{
           this.sacaTopos();
        } ,this.intervalTime );
    }

    reset(){
        clearInterval(this.interval);
        this.estats = Array(this.toposInit).fill(this.forat);
        this.intervalTime = 500;
        this.temps = this.tempsInit;
        this.punts = 0;
        this.lastPunts = 0;
        this.buffertemps = 0;
        this.playable = true;
        this.vides = Array(this.videsInit).fill(true);
        this.gameOver="";
        this.iniciaInterval();
        this.estats.fill(this.forat);
    }

    hasPerdido(){
        clearInterval(this.interval);
        this.playable = false;
        this.gameOver = "Game Over"
    }
} 