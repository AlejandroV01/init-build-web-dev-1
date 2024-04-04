CREATE TABLE projects (
profile_id BIGINT REFERENCES profiles (id),
project_id BIGINT SERIAL PRIMARY KEY,
project_name TEXT NOT NULL,
position_title TEXT NOT NULL,
start_date TEXT NOT NULL,
end_date TEXT NOT NULL,
description TEXT
);
