DROP DATABASE IF EXISTS datos;
CREATE DATABASE datos;
USE datos;

CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre_apellido VARCHAR(150) NOT NULL,
    usuario VARCHAR(150) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    fecha_nacimiento DATE NOT NULL,
    pass VARCHAR(255) NOT NULL,
    foto_perfil VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	nombre_producto VARCHAR(255),
    usuario_id INT UNSIGNED,
    imagen TEXT,
    descripcion VARCHAR(255),
    uploaded VARCHAR(255),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE comentarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_id INT UNSIGNED,
    usuario_id INT UNSIGNED,
    texto TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (product_id) REFERENCES producto(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE
    
);


INSERT INTO usuario (nombre_apellido, usuario, email, fecha_nacimiento, pass) VALUES
('Valu Drechsler', 'valudrech', 'vdrechsler@udesa.edu.ar', '2000/04/13', '$2a$10$vHmVwXLX1QLYMr.ZNnNM0.GVlJ6O6pGbT1Ciu2ZNbjM30OIBOyRdi'),
('Naty Yemal', 'natyyemal', 'nyemal@udesa.edu.ar', '2001/03/14', '$2a$10$vHmVwXLX1QLYMr.ZNnNM0.GVlJ6O6pGbT1Ciu2ZNbjM30OIBOyRdi'),
('Rocio Jacob', 'rjacob', 'rjacob@udesa.edu.ar', '2000/10/20', '$2a$10$vHmVwXLX1QLYMr.ZNnNM0.GVlJ6O6pGbT1Ciu2ZNbjM30OIBOyRdi'),
('Angeles', 'ajacob', 'ajacob@udesa.edu.ar', '2002/12/10', '$2a$10$vHmVwXLX1QLYMr.ZNnNM0.GVlJ6O6pGbT1Ciu2ZNbjM30OIBOyRdi'),
('Paz', 'pjacob', 'pjacob@udesa.edu.ar', '2005/10/15', '$2a$10$vHmVwXLX1QLYMr.ZNnNM0.GVlJ6O6pGbT1Ciu2ZNbjM30OIBOyRdi');

INSERT INTO producto (nombre_producto, usuario_id, imagen, descripcion) VALUES
('lapicera', 1, 'https://e.staedtlercdn.com/product-images/_processed_/1/4/csm_2909439_Productpicture_c94e4e0dbd.jpeg', 'STAEDTLER Concrete charcoal black'),
('lapiz', 1, 'https://e.staedtlercdn.com/product-images/_processed_/d/f/csm_2913743_Productpicture_64f2d41f1e.jpeg', 'l??piz de alta calidad para escribir, dibujar y hacer bocetos.'),
('tijera', 5, 'https://e.staedtlercdn.com/product-images/_processed_/b/3/csm_2972444_Productpicture_504b7b3e96.jpeg','Bl??ster que contiene tijeras con hoja de 14 cm.'),
('lapices de colores', 2, 'https://e.staedtlercdn.com/product-images/_processed_/7/6/csm_2998158_Productpicture_ff67996905.jpeg','Estuche de metal con 12 l??pices acuarelables de colores surtidos'),
('resaltador', 5, 'https://e.staedtlercdn.com/product-images/_processed_/a/4/csm_2848743_Productpicture_dbaae9623f.jpeg','Resaltador con gran dep??sito de tinta para un rendimiento de resaltado extralargo'),
('fibras', 1, 'https://e.staedtlercdn.com/product-images/_processed_/5/8/csm_2885577_Productpicture_bcabcc50f6.jpeg','Bol??grafo con punta de fibra en forma triangular ergon??mica para escribir y colorear de forma relajada y sencilla'),
('crayones', 3, 'https://e.staedtlercdn.com/product-images/_processed_/4/0/csm_2964598_Productpicture_b97e04d776.jpeg','Caja de cart??n con 12 ceras de colores surtidos'),
('comp??s', 3, 'https://e.staedtlercdn.com/product-images/_processed_/f/8/csm_2800492_Productpicture_bb72496d76.jpeg','Estuche con tapa abatible que contiene 1 br??jula de ajuste r??pido con parte de plomo, adaptador universal y caja de repuestos'),
('Mars?? plastic 526 50', 3, 'https://e.staedtlercdn.com/product-images/_processed_/4/0/csm_2989742_Productpicture_01e09ff446.jpeg','Calidad superior para un rendimiento de borrado de primera clase'),
('FIMO', 2, 'https://e.staedtlercdn.com/product-images/_processed_/7/6/csm_2993416_Productpicture_054eb97e1c.jpeg','Especially for beginners and hobby artists'),
('Mars 501 180', 2, 'https://e.staedtlercdn.com/product-images/_processed_/3/f/csm_2142370_Productpicture_9eb056c26f.jpeg','Para todos los l??pices redondos, triangulares y hexagonales de plomo y de colores hasta ?? 12 mm');

INSERT INTO comentarios (product_id, usuario_id, texto) VALUES
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(5, 1, "Le encantaron a mis hijos"),
(5, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(2, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(6, 3, "Fascinantes!!!!"),
(9, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(6, 4, "Muy bueno"),
(2, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(10, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(6, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"),
(6, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(2, 2, "Increibles"),
(2, 1, "Le encantaron a mis hijos"),
(3, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(9, 2, "Increibles"),
(9, 1, "Le encantaron a mis hijos"),
(9, 3, "Fascinantes!!!!"),
(9, 4, "Muy bueno"),
(4, 2, "Increibles"),
(8, 1, "Le encantaron a mis hijos"),
(5, 3, "Fascinantes!!!!"),
(3, 4, "Muy bueno"),
(4, 2, "Increibles"),
(3, 1, "Le encantaron a mis hijos"); 
