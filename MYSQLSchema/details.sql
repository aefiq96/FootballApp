create database fut;
use fut;

CREATE TABLE IF NOT EXISTS Details
(
	id INT(11) AUTO_INCREMENT,
	Name varchar(255) NOT NULL,
	Nationality varchar(255) NOT NULL,
	National_Position varchar(255),
	Club varchar(255) NOT NULL, 
	Club_Position varchar(255) NOT NULL,
	Club_Kit  INT(11) NOT NULL,
	Rating INT(11) NOT NULL,
	Height varchar(255) NOT NULL,
	Weight varchar(255) NOT NULL,
	Birth_Date date not NULL,
	Age INT(11) NOT NULL,
	Ball_Control INT(11) NOT NULL,
	Marking INT(11) NOT NULL,
	Speed INT(11) NOT NULL,
	Strength INT(11) NOT NULL,
	Shot_Power INT(11) NOT NULL,
	Finish INT(11) NOT NULL,
	GK_Diving INT(11) NOT NULL,
	GK_Reflexes INT(11) NOT NULL,
	PRIMARY KEY (id)
);

