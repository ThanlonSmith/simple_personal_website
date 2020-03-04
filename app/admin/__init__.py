# -*- coding: utf-8 -*-
# @Time    : 2020/2/29 下午5:42
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : __init__.py
# @Software: PyCharm
from flask import Blueprint

admin_bp = Blueprint('admin', __name__,url_prefix='/admin')
