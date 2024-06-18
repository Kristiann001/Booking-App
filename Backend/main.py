from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.province import Province
from models.booking import Booking 
from validation_model import BookingModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/province")
def get_provinces():
    provinces = Province.find_all()
    return provinces

@app.get("/booking")
def get_booking():
    bookings = Booking.find_all()
    return bookings

@app.post("/booking")
def save_booking(data: BookingModel):
    booking = Booking(
        first_name=data.first_name,
        last_name=data.last_name,
        residence=data.residence,
        province=data.province,
        email=data.email,
        password=data.password,
        confirm_password=data.confirm_password
    )
    booking.save()
    return booking.to_dict()

Booking.create_table()
