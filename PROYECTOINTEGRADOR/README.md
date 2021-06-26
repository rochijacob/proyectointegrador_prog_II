# STEADLER BACKEND PROYECT

## CONFIGURACION DEL PROYECTO
### SET UP
1. ```npm i express-generator -g```
2. ```express --views=ejs```
3. ```npm i``` (crea carpeta node modules)
4. ```npm i -g nodemon ```
5. ```nodemon```

## PAQUETES INSTALADOS


sequelize
    ```npm i sequelize```

express-session
    ```npm i express-session --save```

cookie-parser (modulo ya instalado con express modules)
    ```npm i cookie-parser --save```

bcrypt.js
    ```npm i bycryptjs```

multer (para procesar y guardar archivos en nuestro sistema)
    ```npm i multer```

---

### ¿COMO SE CORRE EL PROYECTO?
1. Instalarse XAMPP (WindowsOS) o MAMP (MacOS) - Servidores de MySQL
2. Instalarse MySQL y configurarlo para que corra en el puerto adecuado. Luego correr el servidor (MAMP/XAMPP)
3. Configurar el archivo config.js (de sequelize) con los parametros adecuados al puerto y contraseña de la base de datos
4. Abrir el archivo datos.sql en MySQL y ejecutar todas las sentencias
5. Correr nodemon en la terminal del proyecto (preferiblemente gitbash) --> el proyecto comenzara a correr en el puerto 3000
6. Abrir el navegador http://localhost:3000/

---

### SEQUELIZE Y CONEXION A BASE DE DATOS
1. Bajo el paquete "sequelize" y el de "mysql2"
2. Previo a usar el "sequelize init", uso un archivo **sequelize.rc** o **sequelize.cli**, que se ejecutan al ejecutar el init y generan de manera adecuada mi archivo index.js
3. ```sequelize init``` y adapto el config a mi proyecto 
4. Creacion de modelos en mi base de datos con el siguiente formato:

```javascript
module.exports = (sequelize, dataTypes) => {
    const nombre_db = sequelize.define('nombre_db', {
        columna_1: {
            constraint_1: true/false;
            type: datatype.tipo_de_dato;
        }
    }, {
        tableName: "nombre_tabla", //nombre de la tabla en SQL
        timestamps: true/false, 
    });

    return nombre_db
}
```


