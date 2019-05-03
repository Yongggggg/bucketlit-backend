from models.base_model import BaseModel
import peewee as pw
from models.bucketlist import Bucketlist

class Journal(BaseModel):
    bucketlist = pw.ForeignKeyField(Bucketlist, backref="journal")
    title = pw.CharField()
    date = pw.DateField()
    reflection = pw.CharField(max_length=1000, null=True)
    image_url = pw.CharField(null=True)