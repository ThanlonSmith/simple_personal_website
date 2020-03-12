# -*- coding: utf-8 -*-
# @Time    : 2020/3/12 下午8:59
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : video_manage.py
# @Software: PyCharm
from .. import admin_bp
from flask import render_template


@admin_bp.route('/video_manage_work')
def video_manage_work():
    return render_template('/admin/video_manage_work.html')