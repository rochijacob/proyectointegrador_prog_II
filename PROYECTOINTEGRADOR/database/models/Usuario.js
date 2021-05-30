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
        edad: {
            type: dataTypes.STRING
        },
        seguidores: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATEONLY
        },
        pass: {
            type: dataTypes.STRING,
        },
    }, //configuracion
    {
        tableName: 'usuario',
        timestamps: false,
    }
    );

    return Usuario;
}