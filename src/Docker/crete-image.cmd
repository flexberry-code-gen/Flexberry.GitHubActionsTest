docker build --no-cache -t githubactionstest/app .

cd src\Docker\SQL
docker build --no-cache -f Dockerfile.PostgreSql -t githubactionstest/postgre-sql ../../SQL

cd ..\..\..
del Dockerfile
del crete-image.cmd
