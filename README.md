# Architechture docker

L'application est structurée autour de trois conteneurs :

- `frontend` : Conteneur Nginx qui héberge l'application React
- `backend` : Serveur Node.js avec Express pour les API
- `db` : Conteneur PostgreSQL avec persistance des données via un volume

Le fichier `docker-compose.yml` configure :
- Les **volumes** : un volume nommé `db_data` pour sauvegarder les données PostgreSQL
- Le **réseau** : tous les services utilisent le même réseau Docker par défaut
- Le **build context** : chaque service a son propre `Dockerfile` situé dans son dossier respectif 

# Structure du projet

docker-fullstack/
    backend/             
        Dockerfile
    frontend/            
        Dockerfile
    postgres-docker/     
        Dockerfile
        bdd/
            schema.sql
    docker-compose.yml   




# Commandes pour lancer le projet 

git clone https://github.com/ton-user/docker-fullstack.git
cd docker-fullstack

lancer dans le repertoire `docker-fullstack`:
docker compose up --build   

une fois que les 3 services sont actifs :

- PostgreSQL : port "5432"
- Backend : port "5000"
- Frontend : port "3000" accessible sur http://localhost:3000



# Test API et Front

- Test du frontent sur http://localhost:3000

- Requete api pour tetser avec Postman
GET http://localhost:5000/animals




# Membres du groupe

- Belkassi Rayane
- Jimenez B. Katherine
- Balica Nicu

