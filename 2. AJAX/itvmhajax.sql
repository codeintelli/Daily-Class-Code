-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2021 at 07:02 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `itvmhajax`
--

-- --------------------------------------------------------

--
-- Table structure for table `ajaxcrud`
--

CREATE TABLE `ajaxcrud` (
  `id` int(250) NOT NULL,
  `firstname` varchar(250) NOT NULL,
  `lastname` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mob` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ajaxcrud`
--

INSERT INTO `ajaxcrud` (`id`, `firstname`, `lastname`, `email`, `mob`) VALUES
(4, 'Aakash', 'Patel', 'aakashpatel9799@gmail.com', '2147483647'),
(8, 'krupa', 'panchal', 'krupapanchal@gmail.com', '23132424324'),
(13, 'anjali', 'Patel', 'anjalipatel9799@gmail.com', '2147483647'),
(14, 'nimisha', 'badiyani', 'nimishabadiyani22@gmail.com', '9408340168'),
(16, 'rahul', 'manavadariya', 'rm9799@gmail.com', '9999999999'),
(17, 'utsav', 'khalas', 'khalasutsav@gmail.com', '769898344'),
(20, 'dushyant', 'khoda', 'dk9054254800@gmail.com', '+91769898344');

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id` int(250) NOT NULL,
  `class` varchar(250) NOT NULL,
  `mid` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id`, `class`, `mid`) VALUES
(1, 'FIRST YEAR', 1),
(2, 'second year', 1),
(3, 'third YEAR', 1),
(4, 'FIRST YEAR', 2),
(5, 'SECOND YEAR', 2),
(6, 'THIRD YEAR', 2),
(7, 'FIRST YEAR', 3),
(8, 'SECOND YEAR', 3),
(9, 'THIRD YEAR', 3),
(10, 'FIRST YEAR', 4),
(11, 'SECOND YEAR', 4),
(12, 'THIRD YEAR', 4),
(13, 'FIRST YEAR', 5),
(14, 'SECOND YEAR', 5),
(15, 'THIRD YEAR', 5),
(16, 'FIRST YEAR', 6),
(17, 'SECOND YEAR', 6),
(18, 'THIRD YEAR', 6);

-- --------------------------------------------------------

--
-- Table structure for table `degree`
--

CREATE TABLE `degree` (
  `mid` int(250) NOT NULL,
  `degrees` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `degree`
--

INSERT INTO `degree` (`mid`, `degrees`) VALUES
(1, 'BCA'),
(2, 'MCA'),
(3, 'BBA'),
(4, 'MBA'),
(5, 'DEPLOMA'),
(6, 'DEPLOMA.DEGREE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ajaxcrud`
--
ALTER TABLE `ajaxcrud`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `degree`
--
ALTER TABLE `degree`
  ADD PRIMARY KEY (`mid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ajaxcrud`
--
ALTER TABLE `ajaxcrud`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `degree`
--
ALTER TABLE `degree`
  MODIFY `mid` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
