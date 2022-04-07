CREATE DATABASE graphqlcrudTest ; 

CREATE TABLE role (
  
  role_id SERIAL PRIMARY KEY , 
  role_name VARCHAR(255), 
  role_description VARCHAR(255)
);

