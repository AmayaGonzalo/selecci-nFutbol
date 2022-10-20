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
exports.Masajista = void 0;
var Persona_1 = require("./Persona");
var Masajista = /** @class */ (function (_super) {
    __extends(Masajista, _super);
    function Masajista(pNombre, pApellido, pEdad, pEstado, pListaJugadorAsignado) {
        var _this = _super.call(this, pNombre, pApellido, pEdad, pEstado) || this;
        _this.listaJugadorAsiganado = pListaJugadorAsignado;
        return _this;
    }
    Masajista.prototype.asignarJugador = function (pFutbolista) {
        this.listaJugadorAsiganado.push(pFutbolista);
        console.log("Se le asigno el jugador: ", pFutbolista);
    };
    Masajista.prototype.bajaJugador = function (pFutbolista) {
        for (var i = 0; i < this.listaJugadorAsiganado.length; i++) {
            if (pFutbolista.getApellido() === this.listaJugadorAsiganado[i].getApellido()) {
                this.listaJugadorAsiganado.splice(i, 1);
                console.log("El jugador: ", pFutbolista.getNombre(), " se lo ha dado de baja.");
            }
        }
    };
    Masajista.prototype.descansar = function () {
        if (this.estado) {
            this.estado = false;
            console.log("el personal se encuentra en descanso");
        }
        else {
            this.estado = true;
            console.log("El personal se encuentra ejerciendo");
        }
    };
    return Masajista;
}(Persona_1.Persona));
exports.Masajista = Masajista;
