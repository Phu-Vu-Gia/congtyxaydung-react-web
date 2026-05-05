package config

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var DB *mongo.Client

func ConnectDB() {
	// Get the URI from the .env file
	mongoURI := os.Getenv("MONGO_URI")

	// Set a 10-second timeout so it doesn't hang forever if the internet dies
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Connect to MongoDB Atlas
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(mongoURI))
	if err != nil {
		log.Fatal("❌ Database connection failed: ", err)
	}

	// Ping the database to prove it actually connected
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal("❌ Database ping failed: ", err)
	}

	log.Println("✅ Successfully connected to MongoDB Atlas!")
	DB = client
}
