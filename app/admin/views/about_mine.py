# -*- coding: utf-8 -*-
# @Time    : 2020/3/12 下午6:34
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : about_mine.py
# @Software: PyCharm
from .. import admin_bp
from flask import render_template


@admin_bp.route('/about_mine')
def about_mine():
    return render_template('/admin/about_mine.html')
