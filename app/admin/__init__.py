# -*- coding: utf-8 -*-
# @Time    : 2020/2/29 下午5:42
# @Author  : Thanlon
# @Wechat：18512152005
# @Email   : thanlon@sina.com
# @File    : __init__.py
# @Software: PyCharm
from flask import Blueprint

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')
from .views import index, about_mine, professional_skills, personal_profile, life_quotes, messages, pic_manage_work, \
    video_manage_work, pic_manage_amateur, video_manage_amateur
