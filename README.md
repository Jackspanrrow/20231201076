# newdjango

一个使用 Django 4.x 初始化的空项目骨架，包含最基本的配置与开发服务器运行说明。

## 环境要求
- Python 3.9+（本项目使用虚拟环境 `.venv`）
- pip（推荐升级到最新版本）

## 快速开始
1. 创建虚拟环境（如未创建）：
   - Windows：`py -3 -m venv .venv`
2. 安装依赖：
   - `./.venv/Scripts/python -m pip install Django`
3. 启动开发服务器：
   - `./.venv/Scripts/python manage.py runserver`
   - 访问 `http://127.0.0.1:8000/`

## 项目结构
- `manage.py`：项目管理入口
- `mysite/`：项目设置与 URL 配置
  - `settings.py`、`urls.py`、`wsgi.py`、`asgi.py`
- `.venv/`：虚拟环境（已在 `.gitignore` 中忽略）

## 迁移与数据库
- 应用迁移：`./.venv/Scripts/python manage.py migrate`
- 默认数据库：`db.sqlite3`（已在 `.gitignore` 中忽略）

## 部署提示
- 生产环境请关闭 `DEBUG`，并正确配置 `ALLOWED_HOSTS`

## 许可证
本项目采用 MIT License，详情见 `LICENSE`。