--DATABASE--
CREATE DATABASE IF NOT EXISTS `capstone`;

USE `capstone`;

CREATE TABLE IF NOT EXISTS kota (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kota_asal VARCHAR(45) NOT NULL,
    kota_tujuan VARCHAR(45) NOT NULL
 );

 CREATE TABLE IF NOT EXISTS tarif_pengiriman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kota_asal VARCHAR(45) NOT NULL,
    kota_tujuan VARCHAR(45) NOT NULL, 
    berat_barang VARCHAR(25) NOT NULL,
    jenis_paket VARCHAR(40) NOT NULL,
    jenis_pengiriman VARCHAR(30) NOT NULL,
    tarif INT NOT NULL,
    estimasi_pengiriman VARCHAR(20) NOT NULL
 );


 CREATE TABLE IF NOT EXISTS tracking_paket (
    nomor_resi INT PRIMARY KEY NOT NULL,
    nama VARCHAR(45) NOT NULL,
    nomor_telepon INT NOT NULL,
    status_pengiriman VARCHAR(30) NOT NULL
 );


 