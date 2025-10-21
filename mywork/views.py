from django.shortcuts import render
from django.http import HttpResponse, JsonResponse, Http404
from django.template import loader
import os
import time

# 示例文本
texts = ["Text 1", "Text 2", "Text 3"]

def index(request):
    """渲染index.html页面"""
    return render(request, "index.html")

def section(request, num):
    """返回指定章节的文本内容"""
    if 1 <= num <= 3:
        return HttpResponse(texts[num - 1])
    else:
        raise Http404("No such section")

def scroll(request):
    """渲染scroll.html页面"""
    # 获取scroll.html文件的路径
    template_path = os.path.join(os.path.dirname(__file__), 'scroll.html')
    
    # 读取HTML文件内容
    with open(template_path, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    return HttpResponse(html_content)

def hello(request):
    """渲染hello.html页面"""
    # 获取hello.html文件的路径
    template_path = os.path.join(os.path.dirname(__file__), 'hello.html')
    
    # 读取HTML文件内容
    with open(template_path, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    return HttpResponse(html_content)

def posts(request):
    """处理posts API请求，返回JSON格式的帖子数据"""
    
    # 获取开始和结束点
    start = int(request.GET.get("start") or 0)
    end = int(request.GET.get("end") or (start + 9))
    
    # 生成帖子列表
    data = []
    for i in range(start, end + 1):
        data.append(f"Post #{i}")
    
    # 人为延迟响应速度（模拟网络延迟）
    time.sleep(1)
    
    # 返回帖子列表
    return JsonResponse({
        "posts": data
    })