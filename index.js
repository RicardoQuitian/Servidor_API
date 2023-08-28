import express from "express";

function main () {
    const app = express();

    app.use (express.json()) /* ----Sirve para recibir JSON---*/
    app.use (express.urlencoded({extended:false}))	 /*---Sirve para no recibir objetos en la url, es una medida de seguridad que no debería faltar en los proyectos, porque estos proyectos estarán anclados a una base de datos, y las podrían modificar.--- */

    app.listen(3000);
    console.log ("servidor iniciado en el puerto 3000")
}

main();
