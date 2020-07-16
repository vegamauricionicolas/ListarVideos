-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-07-2020 a las 01:34:01
-- Versión del servidor: 10.1.25-MariaDB
-- Versión de PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cemiya`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mejorvideo`
--

CREATE TABLE `mejorvideo` (
  `usuario_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `pass` varchar(20) NOT NULL,
  `rol` varchar(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(20) NOT NULL,
  `creador` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `pass`, `rol`, `nombre`, `email`, `creador`) VALUES
(1, 'mauricio', '1', 'admin', 'Pepe Jose Maria', 'p@gmail.com', 'mauricio'),
(2, 'pepe', '2', 'productor', 'Juan José Carrizo', 'j@gmail.com', 'mauricio'),
(3, 'y', '3', 'productor', 'Ariel Ortega', 'a@gmail.com', 'mauricio'),
(4, 'pepe2', '12', 'productor', 'Yepeto', 'k@gmail.com', 'mauricio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video`
--

CREATE TABLE `video` (
  `id` int(11) NOT NULL,
  `url` varchar(20) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `video`
--

INSERT INTO `video` (`id`, `url`, `usuario_id`, `titulo`, `descripcion`) VALUES
(10, 'nSwHNG8PDag', 2, 'SHEA333333333', 'Got Talent EspaÃ±a'),
(11, 'lxGdWPiyQiU', 2, 'Milagro', 'Holaaaa'),
(12, 'HddiGZZPGp0', 2, 'Milagro', 'Holaaaa'),
(13, 'ngf1KF2_kPI', 2, 'Milagro', 'Holaaaa'),
(14, 'ujVLJ2xqePA', 2, 'Milagro', 'Holaaaa'),
(15, 'p7iZKL9D1s0', 2, 'Milagro', 'Holaaaa'),
(16, 'fm4MS7S5hwk', 1, 'Milagro', 'Holaaaa'),
(17, '81ERF5S3x3o', 1, 'Milagro', 'Holaaaa'),
(18, 'TkFHYODzRTs', 1, 'Milagro', 'Holaaaa'),
(19, 'SAqp6YJWIUU', 1, 'Milagro', 'Holaaaa'),
(20, '6RiUB8EfcDU', 1, 'Milagro', 'Holaaaa'),
(21, 'Cc0u1sUUnNM', 1, 'Milagro', 'Holaaaa'),
(22, 'xIG1ncfn-6o', 1, 'Milagro', 'Holaaaa'),
(23, 'XQKQbry-yeE', 1, 'Milagro', 'Holaaaa'),
(24, 'VBJg5T5bC4k', 1, 'Milagro', 'Holaaaa'),
(25, 'u5Z8Bf8pjzo', 1, 'Milagro', 'Holaaaa'),
(26, 'xHLfRFUD2zo', 1, 'Milagro', 'Holaaaa'),
(27, 'hSsdhUG9rBI', 1, 'Milagro', 'Holaaaa'),
(28, 'X5Wkp1gsNik', 1, 'Milagro', 'Holaaaa'),
(29, 'cd549lZtPEU', 1, 'Milagro', 'Holaaaa'),
(30, 'iIyoWWiMDC4', 1, 'Milagro', 'Holaaaa'),
(31, '50RbVujPPGs', 1, 'Milagro', 'Holaaaa'),
(32, 'ExsGyZDBlJQ', 1, 'Milagro', 'Holaaaa'),
(33, 'YJ0u-MpYpM4', 1, 'Milagro', 'Holaaaa'),
(34, '_wpiilTD4JY', 1, 'Milagro', 'Holaaaa'),
(35, 'IRk3tg7xlFs', 1, 'Milagro', 'Holaaaa'),
(36, 'tmFz4VggR88', 1, 'Milagro', 'Holaaaa'),
(37, 'MPnGbdL5D40', 1, 'Milagro', 'Holaaaa'),
(38, 'H-C1vxgAnEc', 1, 'Milagro', 'Holaaaa'),
(39, 'https://www.youtube.', 1, 'Milagro', 'Holaaaa'),
(40, 'euiwueiwu', 1, 'Milagro', 'Holaaaa'),
(41, '33333', 1, 'Milagro', 'Holaaaa'),
(47, '2', 1, 'Milagro', 'Holaaaa'),
(48, '4', 1, 'Milagro', 'Holaaaa'),
(49, '5', 1, 'Milagro', 'Holaaaa'),
(50, 'http://localhost/scr', 1, 'Milagro', 'Holaaaa'),
(51, 'yuyuyu', 1, 'Milagro', 'Holaaaa'),
(52, 'ENLACE', 1, 'Milagro', 'Holaaaa'),
(53, 'we', 1, 'Milagro', 'Holaaaa'),
(54, 'b', 1, 'Milagro', 'Holaaaa'),
(55, '2M7cmEXFXnA', 1, 'Milagro', 'Holaaaa'),
(67, '_7zHxbvoXpk', 1, 'Milagro', 'Holaaaa'),
(68, 'rrrrrrrrrrrr', 1, 'Milagro', 'Holaaaa'),
(69, 'wwwwwwwwwww', 1, 'Milagro', 'Holaaaa'),
(70, '1111111', 1, 'Milagro', 'Holaaaa'),
(71, '2222222', 1, 'Ejemplo', 'Holaaaa'),
(72, '3333333333', 1, 'Ejemplo', 'Holaaaa'),
(73, '44444444', 1, 'Ejemplo', 'qqqqqqqqq'),
(74, 'ATVOT3RAVYo', 1, 'Ejemplo', 'qqqqqqqqq'),
(75, 'clsc3cvPBTI', 1, 'Merakio', 'MATEEEEEE'),
(76, 'WAJv6Wu3YhI', 1, 'Merakio', 'MATEEEEEE'),
(77, 'nyk6WHQpfbw', 1, 'PEPE', 'MATEEEEEE'),
(78, 'lGQplfmcoI4', 1, 'COMIDA', 'RICO'),
(79, '2gsQ0PISnvw', 1, 'AVENGERS', 'RICO'),
(80, 'rxdl6j8EKjo', 1, 'El mejor vendedor del mundo', 'Podcast Emprende Aprendiendo'),
(81, 'CAiJ0iUFfAo', 1, 'YEAAAA', 'PEPAAAAAAAA'),
(82, '-IpDkjf6mSY', 1, 'CHEEEEEEEEE', 'PANAAAA'),
(83, 'v2BDKprWboA', 1, 'QEPPPPPPP', 'reeeeeeeeeeee'),
(84, 'Jk9PFsuXGqQ', 1, 'PEEEEEEE', 'DESKKKKKKKKK'),
(85, 'tUYgq6JNfGg', 1, 'RAAAAAAAAAA', 'eeeeeeeeeee'),
(86, 'qzosJ76vow4', 1, 'eireurie', 'dddddddd'),
(88, 'CellWJ-0DjQ', 2, 'askdjakldj', 'skljsfj');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `url` (`url`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `video`
--
ALTER TABLE `video`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
