package data

import (
	"context"
	"log"
	"quoccuong-api/config"
	"quoccuong-api/models"
	"time"
)

func NewProject() {
	log.Println("Starting database export test...")

	loc, err := time.LoadLocation("Asia/Ho_Chi_Minh")
	if err != nil {
		log.Fatal(err)
	}

	t := time.Now().In(loc)

	collection := config.DB.Database("quoccuong_db").Collection("projects")

	newProject := models.Project{
		Investor:    "Anh Thang Văn Hóa",
		Title:       "Nhà Phố Hiện Đại 7 Tầng Ở Trung Tâm Sài Gòn",
		Description: "Thiết kế không gian mở và đơn giản nhưng sang trọng.",
		Category:    "Nhà Phố",
		Area:        150,
		Place:       "Phường Sài Gòn, TP.HCM",
		IsCompleted: true,
		Date:        t,
		ImageUrl:    "assets/nha-pho.png",
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, err := collection.InsertOne(ctx, newProject)
	if err != nil {
		log.Fatal("Failed to insert the project: ", err)
	}

	log.Printf("Successfully inserted to the Project collection! \nDocument ID: %v", result.InsertedID)
}
