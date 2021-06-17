module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Usuarios', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre_apellido: {
            type: dataTypes.STRING,
        },
        usuario: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY
        },
        pass: {
            type: dataTypes.STRING,
        },
        foto_perfil: {
            type: dataTypes.STRING,
        }
    }, //configuracion
    {
        tableName: 'usuario',
    }
    );

    Usuario.associate = (db) => {
        Usuario.hasMany(db.Comentarios, {
            as: "comentarios",
            foreignKey: "usuario_id",
        });
        Usuario.hasMany(db.Productos, { //del lado del uno
            as: "producto",
            foreignKey: "usuario_id",
        });
    }

    return Usuario;
}