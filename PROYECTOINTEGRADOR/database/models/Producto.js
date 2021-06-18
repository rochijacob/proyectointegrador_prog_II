module.exports = (sequelize, dataTypes) => {
    const Producto = sequelize.define('Productos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        imagen: {
            type: dataTypes.TEXT
        },
        descripcion: {
            type:dataTypes.INTEGER
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            field: "usuario_id"
        }
    },  //configuracion
    {
        tableName: 'producto',
    });

    Producto.associate = (db) => { //db lo pasa el sequelize cli, en el index.js (el require esta ahi y me llega como parametro)
        Producto.belongsTo(db.Usuarios, { //relacion uno a muchos 1 usuario, muchos productos
            as: "usuario", //nombre de la relacion
            foreignKey: "usuario_id" //nombre del campo con la clave foranea
        }); 
        Producto.hasMany(db.Comentarios, {
            as: "comentarios",
            foreignKey: "product_id",
        });
    };

    return Producto;
}