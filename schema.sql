CREATE TABLE brews (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    brewery_name VARCHAR(255) NOT NULL,
    rating INT NOt NULL,
    lat INT NOT NULL,
    lng INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)

INSERT INTO brews(Brewery_name, rating, lat, lng) VALUES
('Kettle River', 10, 49.896293, -119.487);