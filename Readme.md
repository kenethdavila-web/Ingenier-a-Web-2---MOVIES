# 🎬 Proyecto - API REST de Películas y Series
Este es un proyecto de backend desarrollado con **Node.js** y **Express** para la gestión de contenidos multimedia, utilizando **MongoDB Atlas** como base de datos en la nube.
---
### 🚀 Instalación y Configuración:
1.  **Clonar este repositorio:**
    ```bash
    git clone https://github.com/usuario/NombreProyecto.git
    ```
2.  **Instalar dependencias:**
    Accede a la carpeta `backend` y ejecuta:
    ```bash
    npm install
    ```
3.  **Configurar variables de entorno:**
    Crea un archivo llamado `.env` en la carpeta `backend` y añade tu URI de conexión a MongoDB:
    ```text
    PORT=4000
    MONGO_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/NombreProyecto?retryWrites=true&w=majority
    ```
4.  ## Descripción

    **Función**
    API REST para la gestión de películas

    ```

    ```

5.  ## Tecnologias

    • Node.js
    • Express
    • MongoDB Atlas

6.  ## Instalación

    **Extensiones**
    • Thunder client para probar API
    • MongoDB For vS CODE

7.  ## Estructura

    backend
    │
    ├── controllers
    │ ├── generoController.js
    │ ├── directorController.js
    │ ├── productoraController.js
    │ ├── tipoController.js
    │ └── mediaController.js
    │
    ├── models
    │ ├── genero.js
    │ ├── director.js
    │ ├── productora.js
    │ ├── tipo.js
    │ └── media.js
    │
    ├── routes
    │ ├── genero.js
    │ ├── director.js
    │ ├── productora.js
    │ ├── tipo.js
    │ └── media.js
    │
    ├── db
    │ └── db-connection-mongo.js
    │
    └── index.js

8.  ### 💻 Cómo ejecutar el proyecto:
    • Para iniciar el servidor en modo desarrollo (con **Nodemon**):
    ```bash
    npm run dev
    • Abrir la extensión Thunder client o Postman y ejecutar los post para crear o agregar los documentos en la base de datos y get para mostrarlos
    ```
