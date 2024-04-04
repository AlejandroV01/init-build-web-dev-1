CREATE TABLE educations (
education_id BIGINT SERIAL PRIMARY KEY,
profile_id BIGINT REFERENCES profiles (id),
school TEXT NOT NULL,
major TEXT NOT NULL,
start_date TEXT NOT NULL,
end_date TEXT NOT NULL
);
