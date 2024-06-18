from db import conn, cursor

class Booking:
    TABLE_NAME = "booking"

    def __init__(self, first_name, last_name, residence, province, email, password, confirm_password):
        self.id = None
        self.first_name = first_name
        self.last_name = last_name
        self.residence = residence
        self.province = province
        self.email = email
        self.password = password
        self.confirm_password = confirm_password

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (first_name, last_name, residence, province, email, password, confirm_password)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """
        cursor.execute(sql, (self.first_name, self.last_name, self.residence, self.province, self.email, self.password, self.confirm_password))
        conn.commit()
        self.id = cursor.lastrowid
        return self

    def to_dict(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "residence": self.residence,
            "province": self.province,
            "email": self.email,
            "password": self.password,
            "confirm_password": self.confirm_password
        }

    @classmethod
    def create_table(cls):
        sql = f"""
        CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            residence TEXT NOT NULL,
            province TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            confirm_password TEXT NOT NULL
        )
        """
        cursor.execute(sql)
        conn.commit()
        print("Booking table created successfully")

    @classmethod
    def find_all(cls):
        sql = f"SELECT * FROM {cls.TABLE_NAME}"
        rows = cursor.execute(sql).fetchall()
        return [cls.row_to_instance(row).to_dict() for row in rows]

    @classmethod
    def row_to_instance(cls, row):
        if row is None:
            return None
        booking = cls(
            first_name=row[1],
            last_name=row[2],
            residence=row[3],
            province=row[4],
            email=row[5],
            password=row[6],
            confirm_password=row[7]
        )
        booking.id = row[0]
        return booking
