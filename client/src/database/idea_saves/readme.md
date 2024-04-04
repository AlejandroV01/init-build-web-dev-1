CREATE TABLE idea_saves (
idea_id BIGINT REFERENCES ideas(idea_id),
profile_id BIGINT REFERENCES profiles(id),
PRIMARY KEY (idea_id, profile_id)
);
