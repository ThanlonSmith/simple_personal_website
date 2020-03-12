# -*- coding: utf-8 -*-
# @Time    : 2020/3/12 下午7:23
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : professional_skills.py
# @Software: PyCharm
from .. import admin_bp
from flask import render_template


@admin_bp.route('/professional_skills')
def professional_skills():
    return render_template('/admin/professional_skills.html')
