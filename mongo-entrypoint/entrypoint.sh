#!/usr/bin/env bash

echo "Creating mongo users..."
mongosh --authenticationDatabase admin --host localhost -u mongoadmin -p mongopasswd fitbot_db --eval "db.createUser({user: 'fitbotUser', pwd: 'fitbotUserPass', roles: [{role: 'readWrite', db: 'fitbot_db'}]});"
echo "Mongo users created."