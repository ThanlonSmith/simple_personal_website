# -*- coding: utf-8 -*-
# @Time    : 2020/3/5 上午7:49
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : robot.py
# @Software: PyCharm
from .. import home_bp
from flask import render_template


@home_bp.route('/robots.txt')
def robot():
    return render_template('robots.txt')
