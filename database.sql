CREATE TABLE "to-do-list" (
	"id" serial primary key,
	"chore" VARCHAR(80) NOT NULL,
	"effort_required" INTEGER,
	"complete" BOOLEAN
	);
INSERT INTO "to-do-list"
	(chore, effort_required, complete)
VALUES 
	('Vaccum Rugs', 2, false),
	('Wash Cloths', 4, false),
	('Fold Laundry', 6, false),
	('Take Out Trash', 3, false),
	('Sweep Steps', 6, false),
	('Wash Dishes', 5, false),
	('Clean Gutters', 8, false),
	('Rake Leaves', 7, false);
