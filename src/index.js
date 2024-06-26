import { Personagem } from "./modules/personagem.js";
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./components/mago.js";
import { Arqueiro } from "./components/arqueiro.js";
import { ArqueiroMago } from "./components/aqueiro-mago.js";
import { Guerreiro } from "./components/guerreiro.js";

const magoPedrinho = new Mago("Pedrinho", 4, "Fogo", 4, 3);
const arqueiroBruno = new Arqueiro("Bruno", 7, 8);
const arqueiroMagoChico = new ArqueiroMago("Chico", 7, 10, "ar", 4, 8);
const guerreiroPedro = new Guerreiro("Chico", 7, 10, "ar", 4, 8);

const personagens = [
  magoPedrinho,
  arqueiroBruno,
  arqueiroMagoChico,
  guerreiroPedro,
];

new PersonagemView(personagens).render();
