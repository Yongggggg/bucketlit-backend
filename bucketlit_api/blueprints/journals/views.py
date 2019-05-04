from models.item import Item
from models.journal import Journal
from models.user import User
from flask import Blueprint, jsonify, request
from helpers import encode_auth_token, decode_auth_token

journals_api_blueprint = Blueprint('journals_api', __name__, template_folder='templates')

@journals_api_blueprint.route('/<item_id>/', methods=['GET', 'POST'])
def create(item_id):
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
        item = Item.get(Item.id == item_id)
        if item:
            if request.method == "POST":
                req_data = request.get_json()
                title = req_data['title']
                date = req_data['date']
                reflection = req_data['reflection']

                journal = Journal(title=title, date=date, reflection=reflection, item=item)

                if journal.save():
                    return jsonify([{
                        'status': 'success',
                        'message': 'Successfully created a new item in your Bucket List',
                        'journal': {
                            'id': journal.id,
                            'title': journal.title,
                            'date': journal.date,
                            'reflection': journal.reflection,
                        }
                    }])
                else:
                    return jsonify([{
                        'status': 'failed',
                        'message': 'Unable to create this journal'
                    }])

            elif request.method == "GET":
                journals = Journal.select().where(Journal.item_id == item.id)
                return jsonify({
                    'journal':
                        [{'id': journal.id,
                            'title': journal.title,
                            'date': journal.date,
                            'reflection': journal.reflection,
                            'item': journal.item_id} for journal in journals]})

@journals_api_blueprint.route('/delete/<journal_id>/', methods=['DELETE'])
def delete(journal_id):
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
        journal = Journal.delete().where(Journal.id == journal_id)
        if journal.execute():
            return jsonify([{
                'status': 'success',
                'message': 'Successfully delete selected journal.',
            }])
        else:
            return jsonify([{
                'status': 'failed',
                'message': 'Unable to create this journal'
            }])






            
