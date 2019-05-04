from models.base_model import BaseModel
import peewee as pw
from models.item import Item

class Journal(BaseModel):
    item = pw.ForeignKeyField(Item, backref="journal")
    title = pw.CharField()
    date = pw.DateField()
    reflection = pw.CharField(max_length=1000, null=True)
