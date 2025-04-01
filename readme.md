# Frontend:
https://grow-stock-system.netlify.app/ - Staging

https://develop--grow-stock-system.netlify.app/ - Develop

## Backend:
https://gw-stock-api-staging.onrender.com - Staging

https://gw-stock-api.onrender.com - Develop


## Instrucción

- 1: Crear archivo `.env` en la raíz del proyecto y agregar la siguiente variable

  ```bash
    NODE_ENV=dev | staging | local
    PORT=8080
    DATABASE_URL=
    JWT_SECRET=your_jwt_secret
  ```

- Step 2:Instalar dependencias
  ```bash
    npm install 
  ```
- Step 3: Iniciar el proyecto

  ```bash
    npm run dev
  
    npm run dev:local
  
    npm run dev:staging
  ```
