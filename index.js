let simounao = true;

const matriz = [
  [1, 2, 3],
  [2, 4, 5],
  [3, 10, 6],
];
// const matriz = [
//  [1, 4, 7],
//  [2, 5, 8],
// [3, 6, 9]
// ];

const linhas = matriz.length;
const colunas = matriz[0].length;
console.log(`linhas = ${linhas}`);
console.log(`colunas = ${colunas}`);

// Obtém a matriz transposta
const transposta = [];
for (let i = 0; i < linhas; i++) {
  console.log(`entrou no for I (linhas) ${matriz[i]}`);
  transposta[i] = [];
  for (let j = 0; j < colunas; j++) {
    transposta[i][j] = matriz[j][i];
    console.log(`entrou no for J (colunas) ${matriz[i][j]}`);
  }
}

// Compara a matriz original com sua transposta
for (i = 0; i < linhas; i++) {
  for (j = 0; j < colunas; j++) {
    if (matriz[i][j] != matriz[j][i]) {
      simounao = false;
      break;
    }
  }
}

function testarMatriz() {
  if (linhas != colunas) {
    document.write(
      " a matriz nao pode ser simetrica pois seu numero de colunas e difente do de linhas"
    );
  } else if (simounao === false) {
    document.write(`
        ${transposta[0]}<br/>
        ${transposta[1]}<br/>
        ${transposta[2]}<br/>
        a matriz nao e simetrica`);
  } else if (simounao === true) {
    document.write(`
        ${matriz[0]}<br/>
        ${matriz[1]}<br/>
        ${matriz[2]}<br/>
        a matriz e simetrica`);
  }
}

const resultadoContainer = document.getElementById("resultado");
