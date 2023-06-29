# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Execute o comando npm install para instalar as dependências
RUN npm install

# Copie todo o conteúdo do projeto para o diretório de trabalho
COPY . .

# Exponha a porta que a API está escutando
EXPOSE 3010

# Comando para iniciar a API quando o contêiner for executado
CMD [ "npm", "start" ]
