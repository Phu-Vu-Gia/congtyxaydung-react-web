package main

import (
	"log"
	"quoccuong-api/config"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
)

func init() {
	// 1. Load the .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// 2. Initialize the MongoDB
	config.ConnectDB()
}

func main() {
	// Initialize the app
	app := fiber.New()

	// Middleware: Enable CORS so Vite can talk to this server
	app.Use(cors.New())

	// Basic Test Route (Exactly like app.get in Express!)
	app.Get("/api/health", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Quoc Cuong Go API is running smoothly!!",
		})
	})

	// Start the Server on Port 5000
	log.Println("🚀 Go Server is running on http://localhost:5000")
	log.Fatal(app.Listen(":5000"))
}
