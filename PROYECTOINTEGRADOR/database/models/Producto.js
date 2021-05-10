module.exports = (sequelize, dataTypes) => {
    const Producto = sequelize.define('Productos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        url: {
            type: dataTypes.TEXT
        },
        nombre_producto: {
            type: dataTypes.STRING
        },
        fecha_creacion: {
            type: dataTypes.DATEONLY
        },
    },  //configuracion
    {
        tableName: 'producto',
        timestamps: false,
    });

    return Producto;
}