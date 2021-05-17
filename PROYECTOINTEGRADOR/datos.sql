DROP DATABASE IF EXISTS datos;
CREATE DATABASE datos;
USE datos;

CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY,
    nombre_apellido VARCHAR(150),
    usuario VARCHAR(150),
    email VARCHAR(150),
    edad TINYINT(255),
    seguidores TINYINT(255),
    fecha_nacimiento DATE 
);

CREATE TABLE producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre_producto VARCHAR(255),
    fecha_creacion DATE,
    usuario_id INT UNSIGNED,
    imagen TEXT,
    descripcion VARCHAR(255),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_id INT UNSIGNED,
    usuario_id INT UNSIGNED,
    texto TEXT,
    fecha_creacion DATE,
    
    FOREIGN KEY (product_id) REFERENCES producto(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    
);

INSERT INTO usuario (id, nombre_apellido, usuario, email, edad, fecha_nacimiento) VALUES
(1,'Valu Drechsler', 'valudrech', 'vdrechsler@udesa.edu.ar', 21, '2000/04/13'),
(2,'Naty Yemal', 'natyyemal', 'nyemal@udesa.edu.ar', 20, '2001/03/14'),
(3,'Rocio Jacob', 'rjacob', 'rjacob@udesa.edu.ar', 20, '2000/10/20'),
(4,'Angeles', 'ajacob', 'ajacob@udesa.edu.ar', 18, '2002/12/10'),
(5,'Paz', 'ajacob', 'pjacob@udesa.edu.ar', 18, '2005/10/15');

INSERT INTO producto (id, url, nombre_producto, fecha_creacion, usuario_id) VALUES
(1,'www.staedtler.com', 'lapicera', '2021/04/11', 1),
(2,'www.staedtler.com', 'lapiz', '2021/04/11', 1),
(3,'www.staedtler.com', 'tijera', '2021/04/11', 5),
(4,'www.staedtler.com', 'pegamento en barra', '2021/04/11', 2),
(5,'www.staedtler.com', 'resaltador', '2021/04/11', 5),
(6,'www.staedtler.com', 'fibras', '2021/04/11', 1),
(7,'www.staedtler.com', 'crayones', '2021/04/11', 3),
(8,'www.staedtler.com', 'resaltador', '2021/04/11', 3),
(9,'www.staedtler.com', 'liquid', '2021/04/11', 3),
(10,'www.staedtler.com', 'FIMO', '2021/04/11', 2);

INSERT INTO comentarios (id, product_id, usuario_id, texto, fecha_creacion) VALUES
(1,3, 4, "Muy bueno", '2021/04/11'),
(2,4, 2, "Increibles", '2021/04/11'),
(3,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(4,3, 3, "Fascinantes!!!!", '2021/04/11'),
(5,3, 4, "Muy bueno", '2021/04/11'),
(6,2, 2, "Increibles", '2021/04/11'),
(7,2, 1, "Le encantaron a mis hijos", '2021/04/11'),
(8,2, 3, "Fascinantes!!!!", '2021/04/11'),
(9,3, 4, "Muy bueno", '2021/04/11'),
(10,4, 2, "Increibles", '2021/04/11'),
(11,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(12,3, 3, "Fascinantes!!!!", '2021/04/11'),
(13,3, 4, "Muy bueno", '2021/04/11'),
(14,4, 2, "Increibles", '2021/04/11'),
(15,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(16,3, 3, "Fascinantes!!!!", '2021/04/11'),
(17,3, 4, "Muy bueno", '2021/04/11'),
(18,4, 2, "Increibles", '2021/04/11'),
(19,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(20,3, 3, "Fascinantes!!!!", '2021/04/11'),
(21,3, 4, "Muy bueno", '2021/04/11'),
(22,4, 2, "Increibles", '2021/04/11'),
(23,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(24,3, 3, "Fascinantes!!!!", '2021/04/11'),
(25,3, 4, "Muy bueno", '2021/04/11'),
(26,2, 2, "Increibles", '2021/04/11'),
(27,2, 1, "Le encantaron a mis hijos", '2021/04/11'),
(28,2, 3, "Fascinantes!!!!", '2021/04/11'),
(29,3, 4, "Muy bueno", '2021/04/11'),
(30,4, 2, "Increibles", '2021/04/11'),
(31,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(32,3, 3, "Fascinantes!!!!", '2021/04/11'),
(33,3, 4, "Muy bueno", '2021/04/11'),
(34,4, 2, "Increibles", '2021/04/11'),
(35,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(36,3, 3, "Fascinantes!!!!", '2021/04/11'),
(37,3, 4, "Muy bueno", '2021/04/11'),
(38,4, 2, "Increibles", '2021/04/11'),
(39,3, 1, "Le encantaron a mis hijos", '2021/04/11'),
(40,3, 3, "Fascinantes!!!!", '2021/04/11');
