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
    }
    );
    //Asocio al comentario con un producto y con un usuario
    Comentarios.associate = (db) => {
        Comentarios.belongsTo(db.Usuarios, {
            as: "usuario",
            foreignKey: "usuario_id",
        });
        Comentarios.belongsTo(db.Productos, {
            as: "producto",
            foreignKey: "product_id",
        });
    }

    return Comentarios;  
}