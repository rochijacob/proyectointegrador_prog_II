DROP DATABASE IF EXISTS datos;
CREATE DATABASE datos;
USE datos;

CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre_apellido VARCHAR(150),
    usuario VARCHAR(150),
    email VARCHAR(150),
    fecha_nacimiento DATE,
    pass VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM usuario;

ALTER TABLE usuario ADD foto_perfil VARCHAR(255);

CREATE TABLE producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre_producto VARCHAR(255),
    usuario_id INT UNSIGNED,
    imagen TEXT,
    descripcion VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

SET FOREIGN_KEY_CHECKS=0; 
SET FOREIGN_KEY_CHECKS=1; 
DROP TABLE producto;


SELECT * FROM producto;

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_id INT UNSIGNED,
    usuario_id INT UNSIGNED,
    texto TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (product_id) REFERENCES producto(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    
);

SELECT * FROM comentarios;


INSERT INTO usuario (nombre_apellido, usuario, email, fecha_nacimiento, pass) VALUES
('Valu Drechsler', 'valudrech', 'vdrechsler@udesa.edu.ar', '2000/04/13', 'qwerty1234'),
('Naty Yemal', 'natyyemal', 'nyemal@udesa.edu.ar', '2001/03/14', 'qwerty1234'),
('Rocio Jacob', 'rjacob', 'rjacob@udesa.edu.ar', '2000/10/20', 'qwerty1234'),
('Angeles', 'ajacob', 'ajacob@udesa.edu.ar', '2002/12/10', 'qwerty1234'),
('Paz', 'ajacob', 'pjacob@udesa.edu.ar', '2005/10/15', 'qwerty1234');

INSERT INTO producto (nombre_producto, usuario_id, imagen, descripcion) VALUES
('lapicera', 1, 'https://e.staedtlercdn.com/product-images/_processed_/1/4/csm_2909439_Productpicture_c94e4e0dbd.jpeg', 'STAEDTLER Concrete charcoal black'),
('lapiz', 1, 'https://e.staedtlercdn.com/product-images/_processed_/d/f/csm_2913743_Productpicture_64f2d41f1e.jpeg', 'lápiz de alta calidad para escribir, dibujar y hacer bocetos.'),
('tijera', 5, 'https://e.staedtlercdn.com/product-images/_processed_/b/3/csm_2972444_Productpicture_504b7b3e96.jpeg','Blíster que contiene tijeras con hoja de 14 cm.'),
('lapices de colores', 2, 'https://e.staedtlercdn.com/product-images/_processed_/7/6/csm_2998158_Productpicture_ff67996905.jpeg','Estuche de metal con 12 lápices acuarelables de colores surtidos'),
('resaltador', 5, 'https://e.staedtlercdn.com/product-images/_processed_/a/4/csm_2848743_Productpicture_dbaae9623f.jpeg','Resaltador con gran depósito de tinta para un rendimiento de resaltado extralargo'),
('fibras', 1, 'https://e.staedtlercdn.com/product-images/_processed_/5/8/csm_2885577_Productpicture_bcabcc50f6.jpeg','Bolígrafo con punta de fibra en forma triangular ergonómica para escribir y colorear de forma relajada y sencilla'),
('crayones', 3, 'https://e.staedtlercdn.com/product-images/_processed_/4/0/csm_2964598_Productpicture_b97e04d776.jpeg','Caja de cartón con 12 ceras de colores surtidos'),
('compás', 3, 'https://e.staedtlercdn.com/product-images/_processed_/f/8/csm_2800492_Productpicture_bb72496d76.jpeg','Estuche con tapa abatible que contiene 1 brújula de ajuste rápido con parte de plomo, adaptador universal y caja de repuestos'),
('Mars® plastic 526 50', 3, 'https://e.staedtlercdn.com/product-images/_processed_/4/0/csm_2989742_Productpicture_01e09ff446.jpeg','Calidad superior para un rendimiento de borrado de primera clase'),
('FIMO', 2, 'https://e.staedtlercdn.com/product-images/_processed_/7/6/csm_2993416_Productpicture_054eb97e1c.jpeg','Especially for beginners and hobby artists'),
('Mars 501 180', 2, 'https://e.staedtlercdn.com/product-images/_processed_/3/f/csm_2142370_Productpicture_9eb056c26f.jpeg','Para todos los lápices redondos, triangulares y hexagonales de plomo y de colores hasta Ø 12 mm');

INSERT INTO comentarios (product_id, usuario_id, texto) VALUES
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(2, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(2, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(2, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"); 
