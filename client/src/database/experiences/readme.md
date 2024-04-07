CREATE TABLE experiences (
profile_id BIGINT REFERENCES profiles (id),
experience_id BIGINT SERIAL PRIMARY KEY,
company TEXT NOT NULL,
title TEXT NOT NULL,
start_date TEXT NOT NULL,
end_date TEXT NOT NULL,
description TEXT
);
