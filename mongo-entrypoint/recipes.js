db = connect( 'mongodb://localhost/fitbot_db' );

db.createCollection(
    'recipes',
    {
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['title', 'ingredients', 'method'],
                properties: {
                    title: {
                        bsonType: 'string'
                    },
                    ingredients: {
                        bsonType: ['array'],
                        minItems: 1,
                        items: {
                            bsonType: 'string',
                        }
                    },
                    method: {
                        bsonType: ['array'],
                        minItems: 1,
                        items: {
                            bsonType: 'string',
                        }
                    }
                }
            }
        }
    }
);

db.recipes.createIndex({title : 1}, { unique: true })