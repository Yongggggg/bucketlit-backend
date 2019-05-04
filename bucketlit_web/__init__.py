from app import app
from flask import render_template
from bucketlit_web.blueprints.users.views import users_blueprint
from flask_assets import Environment, Bundle
from .util.assets import bundles

assets = Environment(app)
assets.register(bundles)

app.register_blueprint(users_blueprint, url_prefix="/users")

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500


@app.route("/")
@app.route('/<path:path>')
def home(path=None):
    return render_template('index.html')

@app.route("/manifest.json")
def manifest():
    return app.send_static_file("build/manifest.json")

@app.route("/service-worker.js")
def service():
    return app.send_static_file("build/service-worker.js")

@app.route("/precache-manifest.0cd9b7c1265178d702aac1af7cab0e8b.js")
def precache():
    return app.send_static_file("build/precache-manifest.0cd9b7c1265178d702aac1af7cab0e8b.js")