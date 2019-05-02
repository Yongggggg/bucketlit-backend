from models.base_model import BaseModel
import peewee as pw
from models.user import User

class Bucketlist(BaseModel):
    user = pw.ForeignKeyField(User, backref="bucketlist")
    title = pw.CharField(unique=True)
    description = pw.CharField(max_length=1000, null=True)
    category = pw.CharField()
    longitude = pw.DecimalField(max_digits=9, decimal_places=6, null=True)
    latitude = pw.DecimalField(max_digits=9, decimal_places=6, null=True)
    complete = pw.BooleanField(default=False)
    completed_by =  pw.DateField()
    address = pw.CharField(null=True)