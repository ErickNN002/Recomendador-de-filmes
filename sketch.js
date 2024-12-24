//Filmes
let filmes = [
  "Indiana Jones e Os\nCaçadores da Arca Perdida",
  "Karate Kid",
  "Batman:\nO Cavaleiro das Trevas",
  "O Ultimato Bourne",
];

let filmesFantasia = [
  "Shrek",
  "O Último Mestre do Ar",
  "King Kong",
  "O Senhor dos Anéis",
];

let filmesFicCientifica = [
  "De Volta para o Futuro",
  "Avatar",
  "Godzilla vs. Kong",
  "O Exterminador do Futuro",
];

let filmesFant_FCie = [
  "Star Wars: Episódio V\nO Império Contra-Ataca",
  "Homem-Aranha:\nLonge de Casa",
  "Jurassic Park:\nParque dos Dinossauros",
  "O Planeta dos Macacos:\nA Origem",
];

let recomendacao;
let mensagem;
let campoFantasia;
let campoIdade;
let campoFicCientifica;
let titulo;

//Linha
let x1 = 325;
let y1 = 300;
let x2 = 450;
let y2 = 175;

//SETUP
function setup() {
  createCanvas(350, 200);
  titulo = createElement("h4", "RECOMENDADOR DE FILMES");
  mensagem = createSpan("Digite sua idade: ");
  campoIdade = createInput();
  campoFantasia = createCheckbox("Gosta de Fantasia?");
  campoFicCientifica = createCheckbox("Gosta de Ficção Cientifica?");

  titulo.style("color", color(50, 250, 100));
  titulo.position(width + 35, 75);

  mensagem.style("color", color(50, 250, 100));
  mensagem.position(width + 45, 140);

  campoIdade.style("color", color(34, 102, 143));
  campoIdade.position(width + 150, 139);

  campoFantasia.style("color", color(50, 250, 100));
  campoFantasia.position(width + 45, 170);

  campoFicCientifica.style("color", color(50, 250, 100));
  campoFicCientifica.position(width + 45, 200);
}

//DRAW
function draw() {
  background(1, 176, 77);
  brilho();
  contorno();
  textAlign(CENTER);
  idade = campoIdade.value();
  fantasia = campoFantasia.checked();
  ficCientifica = campoFicCientifica.checked();
  recomendacao = criarRecomendacao(idade);
  nomeFilme();
  tituloEstilo();

  fill(38, 48, 54);
  noStroke();
  triangle(width - 25, height, width, height - 25, width, height);
}

//Recomedação
function criarRecomendacao(idade) {
  if (idade < 14 && idade > 0) {
    if (idade < 12 && idade > 0) {
      if (idade < 10 && idade > 0) {
        //Idade menor que 10
        if (fantasia) {
          if (ficCientifica == false) {
            return filmesFantasia[0]; //Lf
          }
        } else if (ficCientifica) {
          return filmesFicCientifica[0]; //Lfc
        } else {
          return filmes[0]; //L
        }
        if (fantasia) {
          return filmesFant_FCie[0]; //Lf/fc
        }
      }
      //Idade maior que 9 e menor que 12
      else {
        if (fantasia) {
          if (ficCientifica == false) {
            return filmesFantasia[1]; //>=10f
          }
        } else if (ficCientifica) {
          return filmesFicCientifica[1]; //>=10fc
        } else {
          return filmes[1]; //>=10
        }
        if (fantasia) {
          return filmesFant_FCie[1]; //>=10f/fc
        }
      }
    }
    //Idade maior que 12 e menor que 14
    else {
      if (fantasia) {
        if (ficCientifica == false) {
          return filmesFantasia[2]; //>=12f
        }
      } else if (ficCientifica) {
        return filmesFicCientifica[2]; //>=12fc
      } else {
        return filmes[2]; //>=12
      }
      if (fantasia) {
        return filmesFant_FCie[2]; //>=12f/fc
      }
    }
  }
  //Idade maior que 14
  else if (idade > 0) {
    if (fantasia) {
      if (ficCientifica == false) {
        return filmesFantasia[3]; //>=14f
      }
    } else if (ficCientifica) {
      return filmesFicCientifica[3]; //>=14fc
    } else {
      return filmes[3]; //>=14
    }
    if (fantasia) {
      return filmesFant_FCie[3]; //>=14f/fc
    }
  }
}

function nomeFilme() {
  strokeWeight(2);
  textStyle(NORMAL);
  textSize(25);
  textAlign(CENTER, CENTER);
  textFont("Verdana");
  fill(58, 76, 84);
  stroke(41, 233, 216);
  text(recomendacao, width / 2, height / 2);
}

function tituloEstilo() {
  strokeWeight(0.75);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER, TOP);
  textFont("Verdana");
  fill(5, 24, 4, 150);
  stroke(255, 255, 255, 230);
  text("Recomendador\nde Filmes", width / 2, 10);
}

function brilho() {
  stroke(0, 213, 94);
  strokeWeight(100);
  line(x1, y1, x2, y2);
  x1 -= 2;
  y2 -= 2;
  if (x1 <= -400) {
    x1 = 325;
    y2 = 175;
  }
}

function contorno() {
  strokeWeight(5);
  stroke(36, 85, 107);
  line(0, 0, width, 0);
  line(0, height, 0, 0);
  stroke(0, 255, 235);
  line(width, 0, width, height - 25);
  line(width, height - 25, width - 25, height);
  line(width - 25, height, 0, height);
}
