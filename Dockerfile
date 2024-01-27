# Use uma imagem Node.js com TypeScript
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte da aplicação
COPY . .

# Compile o código TypeScript
RUN npm run build

# Exponha a porta em que a aplicação irá escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]