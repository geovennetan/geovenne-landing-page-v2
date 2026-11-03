# Geovenne Tan Landing Page V2

这是一个独立的本地静态网站，使用 HTML、CSS 与原生 JavaScript 开发。页面用于介绍 Geovenne Tan 的信托基金及长期理财规划服务，并引导访客通过 WhatsApp 发起初次咨询。

## 项目文件

- `index.html`：完整页面内容与 7 个区块
- `style.css`：品牌样式、桌面与手机响应式设计
- `script.js`：手机导航、滚动进度、当前导航状态与 FAQ 互动
- `assets/geovenne-profile.jpg`：从原始照片复制的网页使用版本
- `assets/fonts/`：本地 Noto Sans SC 与 Noto Serif SC 字体，离线预览无需连接字体服务
- `WhatsApp Image 2026-10-12 at 4.57.21 PM.jpeg`：保留不变的原始顾问照片

## 本地预览

最简单的方法是直接双击 `index.html`，使用浏览器打开。

若电脑已安装 Python，也可以在此文件夹打开 PowerShell，然后运行：

```powershell
python -m http.server 8000
```

再在浏览器访问：

```text
http://localhost:8000
```

按 `Ctrl + C` 可停止本地预览服务器。

## WhatsApp

所有咨询按钮均连接到号码 `60163702666`，并预先填入：

> 你好 Geovenne，我想了解理财规划及投资咨询。

## 范围说明

此项目没有后台、数据库、表单或 API，也没有自动部署设置。本地文件不会自动上传至 GitHub 或 Railway。
