node -v
npm -v

instalando typescript como dependencia de desenvolvimento 


npm i typescript @types/node -D

crear arquivo de configuracion de typescript:

npx tsc --i

configuraciones recomedadas de typescript de acurdo con la version de node.js:

https://github.com/tsconfig/bases?tab=readme-ov-file

NOde no soporta el typescript entonces hay que configurar para que soporte :
fazer a conversar do codigo para javascript
npm i tsx -D

configuracion para ejecutar comando 

    "dev": "tsx watch src/server.ts"
npm run dev
 npx tsx src/server.ts- para ejecutar comando o programa
 npx tsx watch src/server.ts  el watch hace que  ejecute la aplicacion, que haciendo obseraciones 

dependencias :

fatify - framawork - Fastify es un framework web para Node.js que se centra en ofrecer un rendimiento muy alto y una baja sobrecarga
-Fastify puede considerarse una alternativa moderna y eficiente a Express.js
npm install fastify


Prisma: Prisma es un conjunto de herramientas de base de datos que simplifica y optimiza el trabajo con bases de datos en aplicaciones Node.js y TypeScript. Es un ORM (Object-Relational Mapping) moderno que permite interactuar con bases de datos de una manera más intuitiva y eficiente. Prisma proporciona una serie de características que lo hacen atractivo para desarrolladores que buscan una forma más productiva de manejar sus bases de datos.
Instalación:
npm install @prisma/client
npm install prisma --save-dev

npm i prisma -D
npx prisma init
npx prisma init --datasource-provider SQLite


banco de datos SQLLite, banco de datos- 

npx prisma migrate dev   este comando compara os datos com o banco 