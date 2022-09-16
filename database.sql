--DROP TABLE "shoppingList";

-- set up a database named 'shoppingList'
-- run this SQL command to set up the table.
CREATE TABLE shoppingList
	(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80) NOT NULL,
	"quantity" DECIMAL NOT NULL,
	"units" VARCHAR(20) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
    );
    
-- test data
INSERT INTO shoppingList (name, quantity, units)
	VALUES
		('Grapes', '2', 'lbs'),
		('Poptarts', '1', 'box'),
		('Sunkist', '1', '12 pk'),
		('Ground Beef', '2.5', 'per lb');
		
		