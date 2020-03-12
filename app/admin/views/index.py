# -*- coding: utf-8 -*-
# @Time    : 2020/3/5 上午7:57
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : index.py
# @Software: PyCharm
from flask import render_template
from .. import admin_bp


@admin_bp.route('/index')
def index():
    return render_template('/admin/index.html')
