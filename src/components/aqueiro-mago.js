import { Personagem } from "../modules/personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem {
    static tipo = 'ArqueiroMago';
    static descricao = 'Detentor de lancas e flechas mágicas!'
    ladoArqueiro;
    ladoMago;

    constructor(nome, destreza, elementoMagico, levelMagico, Inteligencia) {
        super(nome);
        this.ladoArqueiro = new Arqueiro(nome, destreza);
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, Inteligencia);
    }

    obterInsignia() {
        return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
    }
}