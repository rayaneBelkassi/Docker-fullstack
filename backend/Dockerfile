# Utilise Node officiel
FROM node:18

# Crée le dossier de travail
WORKDIR /app

# Copie package.json et installe les dépendances
COPY package*.json ./
RUN npm install

# Copie tout le code
COPY . .

# Expose le port du serveur
EXPOSE 5000

# Lance le serveur
CMD ["npm", "run", "dev"]
