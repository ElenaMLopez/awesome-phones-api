# Awesome phones API

## What is this?
This is a REST API connected to a MongoDB database to have permanent storage. You must have something in your mind, actually, we have a volume folder, this folder only works locally, so if you take out this folder from the project before starting it, you will lose all the changes.

When you start the API you will have access to initial data stored in MongoDB. When MongoDB starts, is seeded with some phones data. All changes done after this, are stored locally.

### How was it created?
The API was created with Node.js, and the database to store data is done with MongoDB.

Using Docker containers, all the environment is operative. You can find a `docker-compose.yml` file, where you can see what containers are created and how they are communicated. You can find the respective `Dockerfile` file for each container needed, one for the API in Node, and one for the seed container, this last one, insert data into the MongoDB instance to start.

## How to run the API
1. You must create the docker-compose image. This will create an image for a container with will have a running MongoDB, with some telephones inside. For this first run:
### `$ docker-compose build`
2. After building the image, you are able to run everything. Just type:
### `$ docker-compose up`
3. Now you can make some tests, like the basic CRUD operations. There is a file in the project directory called `request-test.http`. If you are using the VSCode editor, you have a nice plugging called [REST Client](https://open-vsx.org/extension/humao/rest-client), which allows you to make requests without using postman or a similar client. Of course, you can use postman if you want.
If you use the `request-test.http` included, you will need to make at the first a `GET` request, in order to obtain the MongoDB _id, with this _id, you will be allowed to make the `GET_BY_ID` request, the `PUT`request, and the `DELETE`request. 
4. You can stop the container, and preserve all the data inside. 
### `docker-compose stop`
5. Run the container again, and confirm there are all the phones you have in the final process before stopping it.
### `docker-compose up`
6. Finally you can delete the container. First, stop it, and after this down it.
```
docker-compose stop
docker-compose down
```
**NOTE**:
> If you delete the container when you restart all the processes you still having all the phones as the same as you left this data before destroying the container. This is because you have an image, with a folder called volume (mongo-data in this project), where we are storing all the data for this image. 
> But, if you change the project branch, or you fork the repository and start it in a new pc for example, this folder will be not there, so you only will have all the original pones from the seed folder, used to populate the DDBB at starting.
