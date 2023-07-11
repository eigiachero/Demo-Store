CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` varchar(256) NOT NULL,
	`description` text,
	`photo` varchar(256));
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(256) PRIMARY KEY NOT NULL,
	`full_name` text);
