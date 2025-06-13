FROM postgres:15

# Set environment variables (optionnel ici mais clair)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=animal_shelter

# Copie les scripts init (schema.sql) dans le dossier de démarrage
COPY ./bdd /docker-entrypoint-initdb.d
