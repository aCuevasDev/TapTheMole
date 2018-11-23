"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DigComponent = /** @class */ (function () {
    function DigComponent() {
        this.topo = "res://topo";
        this.forat = "res://forat";
        //estats=[this.forat,this.forat,this.forat,this.forat,this.forat,this.forat,this.forat,this.forat,this.forat];
        this.toposInit = 6;
        this.toposMax = 12;
        this.estats = Array(this.toposInit).fill(this.forat);
        this.punts = 0;
        this.lastPunts = 0;
        this.temps = 30;
        this.buffertemps = 0;
        this.vides = 3;
        this.playable = true;
        this.gameOver = "";
        this.intervalTime = 500;
    }
    DigComponent.prototype.ngOnInit = function () {
        this.iniciaInterval();
    };
    DigComponent.prototype.onClick = function (pos) {
        if (this.playable) {
            if (this.estats[pos] == this.topo) {
                this.punts += 10;
                if (this.punts > 200)
                    this.aceleraTopos();
                if (this.lastPunts + 100 <= this.punts) {
                    if (this.estats.length < this.toposMax)
                        this.estats.splice(this.estats.length, 0, this.forat, this.forat, this.forat);
                    console.log("size: " + this.estats.length);
                    this.lastPunts = this.punts;
                }
                this.estats[pos] = this.forat;
            }
            else {
                this.punts -= 20;
            }
        }
    };
    DigComponent.prototype.aceleraTopos = function () {
        // this.sacaTopos();
        this.intervalTime = 250;
        clearInterval(this.interval);
        this.iniciaInterval();
    };
    DigComponent.prototype.cambiaTopos = function (pos) {
        if (this.playable) {
            switch (this.estats[pos]) {
                case this.topo:
                    this.estats[pos] = this.forat;
                    this.vides -= 1;
                    if (this.vides == 0)
                        this.hasPerdido();
                    break;
                case this.forat:
                    this.estats[pos] = this.topo;
                    break;
            }
        }
    };
    DigComponent.prototype.sacaTopos = function () {
        var pos = Math.floor((Math.random() * this.estats.length));
        this.cambiaTopos(pos);
        this.buffertemps += this.intervalTime / 1000;
        if (this.buffertemps == 1 && this.temps > 0) {
            this.temps--;
            this.buffertemps = 0;
        }
        if (this.temps == 0) {
            this.hasPerdido();
        }
    };
    DigComponent.prototype.iniciaInterval = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.sacaTopos();
        }, this.intervalTime);
    };
    DigComponent.prototype.reset = function () {
        clearInterval(this.interval);
        this.estats = Array(this.toposInit).fill(this.forat);
        this.intervalTime = 500;
        this.temps = 30;
        this.punts = 0;
        this.lastPunts = 0;
        this.buffertemps = 0;
        this.playable = true;
        this.vides = 3;
        this.gameOver = "";
        this.iniciaInterval();
        this.estats.fill(this.forat);
    };
    DigComponent.prototype.hasPerdido = function () {
        clearInterval(this.interval);
        this.playable = false;
        this.gameOver = "Game Over";
    };
    DigComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "dig",
            templateUrl: "dig.component.html",
            styleUrls: ["dig.component.css"]
        })
    ], DigComponent);
    return DigComponent;
}());
exports.DigComponent = DigComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFPOUM7SUFMRjtRQU1JLFNBQUksR0FBRyxZQUFZLENBQUE7UUFDbkIsVUFBSyxHQUFHLGFBQWEsQ0FBQTtRQUN0Qiw4R0FBOEc7UUFDN0csY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBQyxFQUFFLENBQUM7UUFHWixpQkFBWSxHQUFHLEdBQUcsQ0FBQztJQXFGdkIsQ0FBQztJQW5GRywrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsR0FBRztRQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ3JCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixF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QUFhLFlBQVksQ0FxRzFCO0lBQUQsbUJBQUM7Q0FBQSxBQXJHQyxJQXFHRDtBQXJHYyxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsICAvL25vIHRvY2FyXHJcbiAgICBzZWxlY3RvcjpcImRpZ1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6XCJkaWcuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczpbXCJkaWcuY29tcG9uZW50LmNzc1wiXVxyXG59KWV4cG9ydCBjbGFzcyBEaWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICB0b3BvID0gXCJyZXM6Ly90b3BvXCJcclxuICAgIGZvcmF0ID0gXCJyZXM6Ly9mb3JhdFwiXHJcbiAgIC8vZXN0YXRzPVt0aGlzLmZvcmF0LHRoaXMuZm9yYXQsdGhpcy5mb3JhdCx0aGlzLmZvcmF0LHRoaXMuZm9yYXQsdGhpcy5mb3JhdCx0aGlzLmZvcmF0LHRoaXMuZm9yYXQsdGhpcy5mb3JhdF07XHJcbiAgICB0b3Bvc0luaXQgPSA2O1xyXG4gICAgdG9wb3NNYXggPSAxMjtcclxuICAgIGVzdGF0cyA9IEFycmF5KHRoaXMudG9wb3NJbml0KS5maWxsKHRoaXMuZm9yYXQpO1xyXG4gICAgcHVudHMgPSAwO1xyXG4gICAgbGFzdFB1bnRzID0gMDtcclxuICAgIHRlbXBzID0gMzA7XHJcbiAgICBidWZmZXJ0ZW1wcyA9IDA7XHJcbiAgICB2aWRlcyA9IDM7XHJcbiAgICBwbGF5YWJsZSA9IHRydWU7XHJcbiAgICBnYW1lT3Zlcj1cIlwiO1xyXG4gICAgdGltZXI7XHJcbiAgICBpbnRlcnZhbDtcclxuICAgIGludGVydmFsVGltZSA9IDUwMDtcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuaW5pY2lhSW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHBvcyl7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWFibGUpe1xyXG4gICAgICBpZih0aGlzLmVzdGF0c1twb3NdID09IHRoaXMudG9wbyl7XHJcbiAgICAgICAgdGhpcy5wdW50cyArPSAxMDtcclxuICAgICAgICBpZih0aGlzLnB1bnRzID4gMjAwKVxyXG4gICAgICAgICAgICB0aGlzLmFjZWxlcmFUb3BvcygpO1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFB1bnRzICsxMDAgPD0gdGhpcy5wdW50cyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVzdGF0cy5sZW5ndGggPCB0aGlzLnRvcG9zTWF4KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lc3RhdHMuc3BsaWNlKHRoaXMuZXN0YXRzLmxlbmd0aCwwLHRoaXMuZm9yYXQsIHRoaXMuZm9yYXQsIHRoaXMuZm9yYXQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpemU6IFwiICt0aGlzLmVzdGF0cy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQdW50cyA9IHRoaXMucHVudHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXN0YXRzW3Bvc10gPSB0aGlzLmZvcmF0O1xyXG4gICAgICB9ZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wdW50cyAtPSAyMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhY2VsZXJhVG9wb3MoKXtcclxuICAgICAgIC8vIHRoaXMuc2FjYVRvcG9zKCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbFRpbWUgPSAyNTA7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxyXG4gICAgICAgIHRoaXMuaW5pY2lhSW50ZXJ2YWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW1iaWFUb3Bvcyhwb3Mpe1xyXG4gICAgICAgIGlmKHRoaXMucGxheWFibGUpe1xyXG4gICAgICAgIHN3aXRjaCh0aGlzLmVzdGF0c1twb3NdKXtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLnRvcG86IHRoaXMuZXN0YXRzW3Bvc10gPSB0aGlzLmZvcmF0O1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVzIC09IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpZGVzID09IDApXHJcbiAgICAgICAgICAgICAgdGhpcy5oYXNQZXJkaWRvKCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHRoaXMuZm9yYXQ6IHRoaXMuZXN0YXRzW3Bvc10gPSB0aGlzLnRvcG87XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzYWNhVG9wb3MoKXtcclxuICAgICAgICBsZXQgcG9zPU1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiB0aGlzLmVzdGF0cy5sZW5ndGgpKTtcclxuICAgICAgICB0aGlzLmNhbWJpYVRvcG9zKHBvcyk7XHJcbiAgICAgICAgdGhpcy5idWZmZXJ0ZW1wcyArPSB0aGlzLmludGVydmFsVGltZS8xMDAwO1xyXG4gICAgICAgIGlmKHRoaXMuYnVmZmVydGVtcHMgPT0gMSAmJiB0aGlzLnRlbXBzID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcHMtLTtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJ0ZW1wcyA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudGVtcHMgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzUGVyZGlkbygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5pY2lhSW50ZXJ2YWwoKXtcclxuICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgIHRoaXMuc2FjYVRvcG9zKCk7XHJcbiAgICAgICAgfSAsdGhpcy5pbnRlcnZhbFRpbWUgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgdGhpcy5lc3RhdHMgPSBBcnJheSh0aGlzLnRvcG9zSW5pdCkuZmlsbCh0aGlzLmZvcmF0KTtcclxuICAgICAgICB0aGlzLmludGVydmFsVGltZSA9IDUwMDtcclxuICAgICAgICB0aGlzLnRlbXBzID0gMzA7XHJcbiAgICAgICAgdGhpcy5wdW50cyA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0UHVudHMgPSAwO1xyXG4gICAgICAgIHRoaXMuYnVmZmVydGVtcHMgPSAwO1xyXG4gICAgICAgIHRoaXMucGxheWFibGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmlkZXMgPSAzO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXI9XCJcIjtcclxuICAgICAgICB0aGlzLmluaWNpYUludGVydmFsKCk7XHJcbiAgICAgICAgdGhpcy5lc3RhdHMuZmlsbCh0aGlzLmZvcmF0KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNQZXJkaWRvKCl7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICB0aGlzLnBsYXlhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IFwiR2FtZSBPdmVyXCJcclxuICAgIH1cclxufSAiXX0=