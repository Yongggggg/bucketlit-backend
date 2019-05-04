from models.item import Item
from models.user import User
from flask import Blueprint, jsonify, request
from helpers import encode_auth_token, decode_auth_token


items_api_blueprint = Blueprint('items_api', __name__, template_folder='templates')

@items_api_blueprint.route('/', methods=['GET', 'POST'])
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
            start_by = req_data['start_by']
            description = req_data['description']

            item = Item(title=title, category=category, start_by=start_by, description=description, user=user)

            if item.save():
                return jsonify([{
                    'status': 'success',
                    'message': 'Successfully created a new item in your Bucket List',
                    'item': {
                        'id': item.id,
                        'title': item.title,
                        'category': item.category,
                        'start_by': item.start_by,
                        'description': item.description,
                    }
                }])
            else:
                return jsonify([{
                    'status': 'failed',
                    'message': 'Unable to create this item'
                }])

        elif request.method == "GET":
            items = Item.select().where(Item.user_id == user.id)
            return jsonify({
                'items':
                    [{'id': item.id,
                      'title': item.title,
                      'category': item.category,
                      'description': item.description,
                      'start_by': item.start_by,
                      'completed_by': item.completed_by,
                      'complete': item.complete} for item in items]})

@items_api_blueprint.route('/<item_id>/', methods=['GET', 'PUT'])
def edit(item_id):
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
        if request.method == "PUT":
            req_data = request.get_json()
            title = req_data['title']
            category = req_data['category']
            description = req_data['description']
            start_by = req_data['start_by']
            completed_by = req_data['completed_by']
            complete = req_data['complete']

            item = Item.update(title=title, category=category, start_by=start_by, description=description, completed_by=completed_by, complete=complete).where(Item.id == item_id)

            if item.execute():
                item = Item.get(Item.id == item_id)
                return jsonify([{
                    'status': 'success',
                    'message': 'Successfully created a new item in your Bucket List',
                    'item': {
                        'id': item.id,
                        'title': item.title,
                        'category': item.category,
                        'description': item.description,
                        'start_by': item.start_by,
                        'completed_by': item.completed_by,
                        'complete': item.complete
                    }
                }])
            else:
                return jsonify([{
                    'status': 'failed',
                    'message': 'Unable to create this item'
                }])

        elif request.method == "GET":
            item = Item.get(Item.id == item_id)
            return jsonify({
                'item':
                    [{'id': item.id,
                      'title': item.title,
                      'category': item.category,
                      'description': item.description,
                      'start_by': item.start_by,
                      'completed_by': item.completed_by,
                      'complete': item.complete}]})
            
