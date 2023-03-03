# About The Project

### Made by

#### Ivan Alfredo Quiroz Quiroz
#### Nazareno Javier Carlesso Bruno
#### Luis Kendor Vidal
#### Jose Edwin Elias Incio
#### Juan Pablo Guzman Moreno
#### Jessica Elizabeth Ruiz Velazco Moreno
#### Carlos Fabian Melgarejo Agudelo
#### Sergio Edgardo Delpino

### Build With

![Javascript](https://img.shields.io/badge/Javascript-black.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/React-black.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/Redux-black.svg?style=flat-square&logo=redux&logoColor=%23593d88)
![Postgres](https://img.shields.io/badge/Postgres-black.svg?style=flat-square&logo=postgresql&logoColor=%23316192)
![Sequelize](https://img.shields.io/badge/Sequelize-black?style=flat-square&logo=Sequelize&logoColor=%52B0E7)
![NodeJS](https://img.shields.io/badge/NodeJS-black?style=flat-square&logo=node.js&logoColor=%68a063)
![Express](https://img.shields.io/badge/Express-black.svg?style=flat-square&logo=express&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/HTML5-black.svg?style=flat-square&logo=html5&logoColor=%23E34F26)
![CSS3](https://img.shields.io/badge/CSS3-black.svg?style=flat-square&logo=css3&logoColor=%231572B6)

# Getting Started

### Instalation

Primero debemos instalar las dependencias de nuestra aplicacion

1. Acceder al package.json dentro de api
2. Abrir en la terminal integrada
3. Ejecutar la siguiente linea de comando

```
npm install
```

4. Realizar el mismo procedimiento dentro de la carpeta client

Luego es necesario crear nuestra base de datos

5. Abrir pgAdmin
6. Ingresar dentro del Postgres con nuestras credenciales
7. Crear una Database, se recomienda el nombre ```medilab```

Ahora necesitamos conectar la base de datos con nuestro back

8. Crear un archivo ```.env``` dentro de nuestro subdirectorio api

9. Dentro debe contener las variables de entorno

```
DB_USER=postgres
DB_PASSWORD=12345
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=medilab
PORT=3001
SECRET_JWT_KEY=MiContraseñaSecreta
```

10. De ser necesario modificarlas con tus propias credenciales

En este momento nuestro back deberia estar funcionando correctamente.
Las tablas deberian estar creadas en nuestra base de datos. De momento estas no tienen informacion por lo que las rutas nos van a devolver arreglos vacios

11. Abrir el SQL Shell (psql)
12. Ingresar sus credenciales
13. Conectarse a la base de datos con el comando: ```\c medilab```
14. Ejecutar las querys para insertar la informacion en la base de datos

Por ultimo falta declarar nuestra ruta del back dentro del front

15. Crear un archivo ```.env``` dentro de nuestro subdirectorio client

9. Dentro debe contener las variables de entorno

```
REACT_APP_BACK=http://localhost:3001
```

10. De ser necesario modificarlas con el puerto correspondiente

# Screenshots

### Thanks for visiting

Would be nice if you leave a star