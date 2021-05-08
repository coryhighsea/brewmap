CREATE TABLE brewys (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    brewery_name VARCHAR(255) NOT NULL,
    rating INT NOt NULL,
    lat FLOAT NOT NULL,
    lng FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

INSERT INTO brewys(Brewery_name, rating, lat, lng) VALUES
('Copper Brewing', 9, 49.880529, -119.457427);