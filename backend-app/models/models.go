package models

import (
	"time"
	"database/sql"
)

// wrapper for database
type Models struct {
	DB DBModel
}

// returns models with db pool
func NewModels(db *sql.DB) Models{
	return Models {
		DB: DBModel{DB: db},
	}
}

// is the type for movies
type Movie struct {
	ID int `json:"id"`
	Title string `json:"title"`
	Description string `json:"description"`
	Year int `json:"year"`
	ReleaseDate time.Time `json:"release_date"`
	Runtime int `json:"runtime"`
	Rating int `json:"rating"`
	MPAARating string `json:"mpaa_rating"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	MovieGenre map[int]string `json:"genres"`
	Poster string `json:"poster"` 

}

// type for genres
type Genre struct {
	ID int `json:"id"`
	GenreName string `json:"genre_name"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`

}

// type for movei genre
type MovieGenre struct {
	ID int `json:"-"`
	MovieID int `json:"-"`
	GenreID int `json:"-"`
	Genre Genre `json:"genre"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`

}

// User is the type for users
type User struct {
	ID int
	Email string
	Password string
}
