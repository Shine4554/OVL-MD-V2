FROM node:20-bullseye-slim

# Installer les dépendances nécessaires
RUN apt-get update && apt-get install -y \
    ffmpeg \
    git \
    && rm -rf /var/lib/apt/lists/*

# Cloner TON fork (et non l’original)
RUN git clone https://github.com/Shine4554/OVL-MD-V2.git /ovl_bot

# Définir le dossier de travail
WORKDIR /ovl_bot

# Installer les dépendances Node.js
RUN npm install

# Exposer le port (Render utilise 8000 par défaut)
EXPOSE 8000

# Commande de démarrage du bot
CMD ["npm", "start"]
