# -*- coding: utf-8 -*-
# @Time    : 2020/2/29 下午9:12
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : index.py
# @Software: PyCharm
from .. import home_bp
from flask import render_template


@home_bp.route('/')
def index():
    return render_template('/home/index.html')