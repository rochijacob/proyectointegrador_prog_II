# STEADLER BACKEND PROYECT

## CONFIGURACION DEL PROYECTO
### SET UP
1. ```express --views=ejs```
2. ```npm i``` (crea carpeta node modules)
3. ```nodemon```

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



---

## PAQUETES INSTALADOS


sequelize
    ```npm i sequelize```

express-session
    ```npm i express-session --save```

cookie-parser (modulo ya instalado con express modules)
    ```npm i cookie-parser --save```

bcrypt.js
    ```npm i bycryptjs```


