from pydantic import BaseModel

class BookingModel(BaseModel):
    first_name: str
    last_name: str
    residence: str
    province: str
    email: str
    password: str
    confirm_password: str
    