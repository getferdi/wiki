---
type: "article"
title: "How do I set up a Ferdi server?"
path: "server/setup"
category: "server"
---
Setting up a custom Ferdi server allows you to manage accounts yourself and distribute custom recipes to users of the server only. This is could be useful in an entreprise environment, where you want to store your employee's Ferdi accounts on your own servers and want to distribute company-internal services.

### Manual setup
1. Clone this repository
2. Install the [AdonisJS CLI](https://adonisjs.com/)
3. Copy `.env.example` to `.env` and edit the [configuration](https://github.com/getferdi/server#configuration) to your needs
4. Run `npm install` to install local dependencies
5. Run the database migrations with
    ```js
    adonis migration:run
    ```
6. Start the server with
    ```js
    adonis serve --dev
    ```

### Setting up with Docker
The easiest way to set up Ferdi server on your server is with Docker.

The Docker image can be run as is, with the default sqlite database or you can modifying your ENV variables to use an external database (e.g. MySQL, MariaDB, Postgres, etc). 
After setting up the docker container we recommend you to set up an NGINX reverse proxy to access ferdi-server outside of your home network and protect it with an SSL certificate.

1. Pull the Docker image

    ```sh
    docker pull getferdi/ferdi-server
    ```
2. Create a new Docker container with your desired configuration

    ```sh
    docker create \
      --name=ferdi-server \
	    -e NODE_ENV=development \
	    -e DB_CONNECTION=<database> \
	    -e DB_HOST=<yourdbhost> \
	    -e DB_PORT=<yourdbPORT> \
	    -e DB_USER=<yourdbuser> \
	    -e DB_PASSWORD=<yourdbpass> \
	    -e DB_DATABASE=<yourdbdatabase> \
	    -e IS_CREATION_ENABLED=true \
	    -e CONNECT_WITH_FRANZ=true \
	    -p <port>:80 \
	    -v <path to data>:/config \
	    -v <path to database>:/usr/src/app/database \
	    -v <path to recipes>:/usr/src/app/recipes \
	    --restart unless-stopped \
	    getferdi/ferdi-server
    ```

    Alternatively, you can also use docker-compose v2 schemas

    ```sh
    ---
    version: "2"
    services:
    ferdi-server:
        image: getferdi/ferdi-server
        container_name: ferdi-server
        environment:
        - NODE_ENV=development
        - DB_CONNECTION=<database>
        - DB_HOST=<yourdbhost>
        - DB_PORT=<yourdbPORT>
        - DB_USER=<yourdbuser>
        - DB_PASSWORD=<yourdbpass>
        - DB_DATABASE=<yourdbdatabase>
        - IS_CREATION_ENABLED=true/false
        - CONNECT_WITH_FRANZ=true/false  
        - IS_REGISTRATION_ENABLED=true/false  
        - IS_DASHBOARD_ENABLED=true/false  
        volumes:
        - <path to data>:/config
        - <path to database>:/usr/src/app/database
        - <path to recipes>:/usr/src/app/recipes
        ports:
        - <port>:80
        restart: unless-stopped
    ```
3. Optionally, you can now [set up Nginx as a reverse proxy](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-16-04#set-up-nginx-as-a-reverse-proxy-server).

For more information on configuring the Docker image, visit the Docker image repository at <https://github.com/getferdi/server-docker>.
