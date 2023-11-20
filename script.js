class Hero {
  constructor(nome, vida, arma) {
      this.nome = nome;
      this.vida = vida;
      this.vidaTotal = vida;
      this.arma = arma;
  }

  receberDano(dano) {
      this.vida -= dano;
      if (this.vida < 0) {
          this.vida = 0;
      }
      this.atualizarBarraDeVida();
  }

  atualizarBarraDeVida() {
      const barraDeVida = document.getElementById(this.nome).querySelector('.life');
      const porcentagemVida = (this.vida / this.vidaTotal) * 100;
      barraDeVida.style.width = `${porcentagemVida}%`;
  }
}

let heros = {
  'Gandalf': new Hero('Gandalf', 100, 'magia'),
  'Conan': new Hero('Conan', 150, 'espada'),
  'Chompiras': new Hero('Chompiras', 60, 'artes marciais'),
  'Jaspion': new Hero('Jaspion', 150, 'shuriken')
};

function atacar() {
  let atacante = heros[document.getElementById('heroSelector').value];
  let alvo = heros[document.getElementById('targetSelector').value];

  if (atacante && alvo && atacante !== alvo) {
      
      let dano = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

      alvo.receberDano(dano);

      let message = `${atacante.nome} atacou ${alvo.nome} usando ${atacante.arma} e causou ${dano} pontos de dano.`;
      document.getElementById('messageBoard').innerText = message;
      console.log(message);

      if (alvo.vida === 0) {
          let defeatedMessage = `${alvo.nome} foi derrotado!`;
          alert(defeatedMessage);
          console.log(defeatedMessage);
      }
  } else {
      let errorMessage = "Selecione um atacante e um alvo diferentes.";
      alert(errorMessage);
      console.log(errorMessage);
  }
}

document.getElementById('attackButton').addEventListener('click', atacar);

Object.values(heros).forEach(hero => hero.atualizarBarraDeVida());
