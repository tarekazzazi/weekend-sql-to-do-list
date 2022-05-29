--- makes a table tasks in database called weekend-to-do-app
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"isComplete" BOOLEAN DEFAULT FALSE
);

-- Adds these tasks to table
INSERT INTO "tasks" 
		( "name", "isComplete")
VALUES
	('Vaccum the rugs', FALSE),
	('Wash dishes', FALSE),
	('Do laundery', FALSE),
	('Sweep steps' FALSE),
	('Make bed' FALSE),
	('Rake leaves' FALSE),
	('Make dinner' FALSE);
