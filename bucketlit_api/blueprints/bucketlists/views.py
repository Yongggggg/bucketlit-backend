from models.bucketlist import Bucketlist
from models.user import User
from flask import Blueprint, jsonify, request
from helpers import encode_auth_token, decode_auth_token


bucketlists_api_blueprint = Blueprint('bucketlists_api', __name__, template_folder='templates')

@bucketlists_api_blueprint.route('/', methods=['GET', 'POST'])
def create():
    auth_header = request.headers.get('Authorization')

    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        return jsonify([{
            'status': 'failed',
            'message': 'Not authorization header.'
        }])

    decoded = decode_auth_token(token)
    user = User.get(User.id == decoded)

    
    if user:
        if request.method == "POST":
            req_data = request.get_json()
            title = req_data['title']
            category = req_data['category']
            completed_by = req_data['completed_by']
            description = req_data['description']

            item = Bucketlist(title=title, category=category, completed_by=completed_by, description=description, user=user)

            if item.save():
                return jsonify([{
                    'status': 'success',
                    'message': 'Successfully created a new item in your Bucket List',
                    'item': {
                        'id': item.id,
                        'title': item.title,
                        'category': item.category,
                        'completed_by': item.completed_by,
                        'description': item.description,
                    }
                }])
            else:
                return jsonify([{
                    'status': 'failed',
                    'message': 'Unable to create this item'
                }])

        elif request.method == "GET":
            items = Bucketlist.select().where(Bucketlist.user_id == user.id)
            return jsonify({
                'items':
                    [{'id': item.id,
                      'title': item.title,
                      'category': item.category,
                      'description': item.description,
                      'latitude': item.latitude,
                      'longitude': item.longitude,
                      'address': item.address,
                      'completed_by': item.completed_by,
                      'complete': item.complete} for item in items]})

            
