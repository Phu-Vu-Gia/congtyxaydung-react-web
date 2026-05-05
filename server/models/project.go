package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Project struct {
	ID          primitive.ObjectID `bson:"_id,omitempty"`
	Investor    string             `bson:"investor"`
	Title       string             `bson:"title"`
	Description string             `bson:"description"`
	Category    string             `bson:"category"`
	Area        float32            `bson:"area_sqm"`
	Place       string             `bson:"place"`
	IsCompleted bool               `bson:"is_completed"`
	Date        time.Time          `bson:"date"`
	ImageUrl    string             `bson:"image"`
}
