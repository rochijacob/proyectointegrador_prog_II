module.exports = (sequelize, dataTypes) => {
    const Comentarios = sequelize.define('Comentarios', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto: {
            type: dataTypes.TEXT
        },
    }, //configuracion
    {
        tableName: 'comentarios',
        timestamps: false,
    }
    );

    return Comentarios;  
}