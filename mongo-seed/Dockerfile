FROM mongo

COPY init.json /init.json
CMD mongoimport --host database --db awesome-phones --collection phones --type json --file /init.json --jsonArray