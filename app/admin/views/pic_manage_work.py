# -*- coding: utf-8 -*-
# @Time    : 2020/3/12 下午8:59
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : pic_manage.py
# @Software: PyCharm
from .. import admin_bp
from flask import render_template


@admin_bp.route('/pic_manage_work')
def pic_manage_work():
    return render_template('/admin/pic_manage_work.html')
