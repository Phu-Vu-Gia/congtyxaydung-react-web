package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Customer struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	FullName    string             `bson:"full_name"`
	Email       string             `bson:"email"`
	PhoneNumber string             `bson:"phone_number"`
	Title       string             `bson:"title"`
	Message     string             `bson:"message"`
	Date        time.Time          `bson:"date"`
}
