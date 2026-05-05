package data

import (
	"context"
	"log"
	"quoccuong-api/config"
	"quoccuong-api/models"
	"time"
)

func NewCustomer() {
	loc, err := time.LoadLocation("Asia/Ho_Chi_Minh")
	if err != nil {
		log.Fatal(err)
	}

	t := time.Now().In(loc)

	collection := config.DB.Database("quoccuong_db").Collection("customers")

	newCustomer := models.Customer{
		FullName:    "Thang Văn Hóa",
		Email:       "haohung99@gmail.com",
		PhoneNumber: "(+84) 83 969 6011",
		Title:       "Muốn xây một cái nhà xưởng chế biến thực phẩm ở Đồng Nai",
		Message:     "Mình muốn được tư vấn thiết kế nhà xưởng chế biến thực phẩm, diện tích là 12 héc-ta",
		Date:        t,
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, err := collection.InsertOne(ctx, newCustomer)
	if err != nil {
		log.Fatal("Failed to insert the project: ", err)
	}

	log.Printf("Successfully inserted to the Customer collection! \nDocument ID: %v", result.InsertedID)
}
