mongod&
mongoimport --host localhost:27017 --db blog --collection common.users --file common.users.json --jsonArray --drop
mongoimport --host localhost:27017 --db blog --collection blog.posts --file blog.posts.json --jsonArray --drop