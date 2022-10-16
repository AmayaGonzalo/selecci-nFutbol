"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Futbolista = void 0;
var Persona_1 = require("./Persona");
var Futbolista = /** @class */ (function (_super) {
    __extends(Futbolista, _super);
    function Futbolista(pNombre, pApellido, pEdad, pEstado, pNumeroCamiseta, pFechaJuego, pMesJuego) {
        var _this = _super.call(this, pNombre, pApellido, pEdad, pEstado) || this;
        _this.numeroCamiseta = pNumeroCamiseta;
        _this.fechaJuego = pFechaJuego;
        _this.mesJuego = pMesJuego;
        return _this;
    }
    Futbolista.prototype.titularizar = function () {
        if (this.estadoActual == false) {
            this.estadoActual = true;
        }
        else {
            console.log("El jugador ya es titular");
        }
    };
    Futbolista.prototype.descansar = function () {
        if (this.estado) {
            this.estado = false;
            console.log("el personal se encuentra en descanso");
        }
        else {
            this.estado = true;
            console.log("El personal se encuentra ejerciendo");
        }
    };
    return Futbolista;
}(Persona_1.Persona));
exports.Futbolista = Futbolista;
