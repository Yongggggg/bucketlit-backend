from models.base_model import BaseModel
import peewee as pw
from models.user import User

class Item(BaseModel):
    user = pw.ForeignKeyField(User, backref="item")
    title = pw.CharField(unique=True)
    description = pw.CharField(max_length=1000, null=True)
    category = pw.CharField()
    complete = pw.BooleanField(default=False)
    start_by =  pw.DateField()
    completed_by =  pw.DateField(null=True)