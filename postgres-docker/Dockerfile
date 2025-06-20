FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=animal_shelter

COPY ./bdd /docker-entrypoint-initdb.d
