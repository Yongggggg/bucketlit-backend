from models.base_model import BaseModel
import peewee as pw
from models.user import User

class Bucketlist(BaseModel):
    user_id = pw.ForeignKeyField(User, backref="bucketlist")
    title = pw.CharField()
    description = pw.CharField(max_length=1000, null=True)
    category = pw.CharField()
    longitude = pw.DecimalField(max_digits=9, decimal_places=6, null=True)
    latitude = pw.DecimalField(max_digits=9, decimal_places=6, null=True)
    complete = pw.BooleanField(default=False)
    address = pw.CharField(null=True)