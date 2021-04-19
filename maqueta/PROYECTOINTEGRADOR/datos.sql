CREATE TABLE usuario (
	id INT UNSIGNED PRIMARY KEY,
    nombre_apellido VARCHAR(150),
    usuario VARCHAR(150),
    email VARCHAR(150),
    edad TINYINT(255),
    fecha_nacimiento DATE 
);

CREATE TABLE producto (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    url TEXT,
	nombre_producto VARCHAR(255),
    fecha_creacion DATE,
    usuario_id INT UNSIGNED,
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
('Valu Drechsler', 'valudrech', 'vdrechsler@udesa.edu.ar', 21, '2000/04/13'),
('Naty Yemal', 'natyyemal', 'nyemal@udesa.edu.ar', 20, '2001/03/14'),
('Rocio Jacob', 'rjacob', 'rjacob@udesa.edu.ar', 20, '2000/10/20'),
('Angeles', 'ajacob', 'ajacob@udesa.edu.ar', 18, '2002/12/10'),
('Paz', 'ajacob', 'pjacob@udesa.edu.ar', 18, '2005/10/15');

INSERT INTO producto (id, url, nombre_producto, fecha_creacion, usuario_id) VALUES
('www.staedtler.com', 'lapicera', '2021/04/11', 1),
('www.staedtler.com', 'lapiz', '2021/04/11', 1),
('www.staedtler.com', 'tijera', '2021/04/11', 5),
('www.staedtler.com', 'pegamento en barra', '2021/04/11', 2),
('www.staedtler.com', 'resaltador', '2021/04/11', 5),
('www.staedtler.com', 'fibras', '2021/04/11', 1),
('www.staedtler.com', 'crayones', '2021/04/11', 3),
('www.staedtler.com', 'resaltador', '2021/04/11', 3),
('www.staedtler.com', 'liquid', '2021/04/11', 3),
('www.staedtler.com', 'FIMO', '2021/04/11', 2);

INSERT INTO comentarios (id, product_id, usuario_id, texto, fecha_creacion) VALUES
(3, 4, "Muy bueno", '2021/04/11')
(4, 2, "Increibles", '2021/04/11')
(3, 1, "Le encantaron a mis hijos", '2021/04/11')
(3, 3, "Fascinantes!!!!", '2021/04/11')
(3, 4, "Muy bueno", '2021/04/11')
(2, 2, "Increibles", '2021/04/11')
(2, 1, "Le encantaron a mis hijos", '2021/04/11')
(2, 3, "Fascinantes!!!!", '2021/04/11')
(3, 4, "Muy bueno", '2021/04/11')
(4, 2, "Increibles", '2021/04/11')
(3, 1, "Le encantaron a mis hijos", '2021/04/11')
(3, 3, "Fascinantes!!!!", '2021/04/11')
(3, 4, "Muy bueno", '2021/04/11')
(4, 2, "Increibles", '2021/04/11')
(3, 1, "Le encantaron a mis hijos", '2021/04/11')
(3, 3, "Fascinantes!!!!", '2021/04/11')
(3, 4, "Muy bueno", '2021/04/11')
(4, 2, "Increibles", '2021/04/11')
(3, 1, "Le encantaron a mis hijos", '2021/04/11')
(3, 3, "Fascinantes!!!!", '2021/04/11')




