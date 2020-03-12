# -*- coding: utf-8 -*-
# @Time    : 2020/2/29 下午5:36
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : __init__.py.py
# @Software: PyCharm
from flask import Flask
from app.admin import admin_bp
from app.home import home_bp


def creat_app():
    app = Flask(__name__)
    app.register_blueprint(admin_bp)
    app.register_blueprint(home_bp)
    app.debug = True
    return app
