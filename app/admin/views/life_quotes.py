# -*- coding: utf-8 -*-
# @Time    : 2020/3/12 下午8:41
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : personal_profile.py
# @Software: PyCharm
from .. import admin_bp
from flask import render_template


@admin_bp.route('/life_quotes')
def life_quotes():
    return render_template('/admin/life_quotes.html')
