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
    },  //configuracion
    {
        tableName: 'producto',
        timestamps: false,
    });

    return Producto;
}