function sum(num1: number, num2: number) {
  return num1 + num2;
}

const result = sum(1, 2);
console.log(result); // 3

// npm i typescript
// npm i -D nodemon ts-node
// Nos scripts do package.json: 
// "build": "tsc",
// "dev": "nodemon src/index.ts",
// "start": "node dist/index.js"
// Criar o arquivo tsconfig.json na raiz do projeto com as definições padrão (npx tsc --init)
// npx tsc (para converter o index.ts para index.js na pasta dist)