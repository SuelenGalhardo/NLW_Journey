


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


dependencias :

fatify - framawork - Fastify es un framework web para Node.js que se centra en ofrecer un rendimiento muy alto y una baja sobrecarga
-Fastify puede considerarse una alternativa moderna y eficiente a Express.js
npm install fastify
