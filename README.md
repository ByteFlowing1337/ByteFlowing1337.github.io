# Welcome!
# 大一在读，编程菜鸟
# A first-year undergraduate student and a CS freshman :D
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>编程新手的成长笔记</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        :root {
            --primary: #4361ee;
            --secondary: #3f37c9;
            --accent: #4cc9f0;
            --light: #f8f9fa;
            --dark: #212529;
            --gray: #6c757d;
            --success: #4CAF50;
            --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            --transition: all 0.3s ease;
        }
        
        body {
            background-color: #f0f2f5;
            color: var(--dark);
            line-height: 1.6;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* 导航栏样式 */
        header {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
        
        .logo i {
            margin-right: 10px;
            color: var(--accent);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 30px;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 8px 12px;
            border-radius: 4px;
            transition: var(--transition);
        }
        
        .nav-links a:hover {
            background: rgba(255, 255, 255, 0.15);
        }
        
        .nav-links a.active {
            background: rgba(255, 255, 255, 0.25);
        }
        
        /* 英雄区域 */
        .hero {
            padding: 80px 0;
            background: linear-gradient(rgba(67, 97, 238, 0.9), rgba(63, 55, 201, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
        }
        
        .hero-content {
            max-width: 700px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 20px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .hero p {
            font-size: 1.3rem;
            margin-bottom: 30px;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            background: var(--accent);
            color: white;
            border: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            cursor: pointer;
            transition: var(--transition);
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(76, 201, 240, 0.3);
        }
        
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(76, 201, 240, 0.4);
        }
        
        /* 博客内容区域 */
        .blog-section {
            padding: 80px 0;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            display: inline-block;
            background: white;
            padding: 0 20px;
            position: relative;
            z-index: 2;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background: #ddd;
            z-index: 1;
        }
        
        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .blog-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            transition: var(--transition);
        }
        
        .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }
        
        .card-img {
            height: 200px;
            overflow: hidden;
        }
        
        .card-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }
        
        .blog-card:hover .card-img img {
            transform: scale(1.05);
        }
        
        .card-content {
            padding: 25px;
        }
        
        .card-content h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark);
        }
        
        .card-content p {
            color: var(--gray);
            margin-bottom: 20px;
        }
        
        .meta {
            display: flex;
            justify-content: space-between;
            color: var(--gray);
            font-size: 0.9rem;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
        
        /* 关于区域 */
        .about-section {
            padding: 80px 0;
            background: white;
        }
        
        .about-content {
            display: flex;
            align-items: center;
            gap: 50px;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-text h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .about-text p {
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        
        .skills {
            margin-top: 30px;
        }
        
        .skill-bar {
            margin-bottom: 15px;
        }
        
        .skill-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
        }
        
        .skill-progress {
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .progress {
            height: 100%;
            background: var(--primary);
            border-radius: 4px;
        }
        
        .about-image {
            flex: 1;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
        }
        
        .about-image img {
            width: 100%;
            display: block;
        }
        
        /* 联系区域 */
        .contact-section {
            padding: 80px 0;
            background: #f8f9fa;
        }
        
        .contact-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 25px;
        }
        
        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }
        
        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }
        
        .contact-details h3 {
            margin-bottom: 5px;
        }
        
        .contact-details p {
            color: var(--gray);
        }
        
        .contact-form {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: var(--card-shadow);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-control {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            transition: var(--transition);
        }
        
        .form-control:focus {
            border-color: var(--primary);
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }
        
        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }
        
        /* 页脚 */
        footer {
            background: var(--dark);
            color: white;
            padding: 50px 0 20px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-column h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }
        
        .footer-column h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background: var(--accent);
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 12px;
        }
        
        .footer-links a {
            color: #adb5bd;
            text-decoration: none;
            transition: var(--transition);
        }
        
        .footer-links a:hover {
            color: var(--accent);
            padding-left: 5px;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            background: #343a40;
            color: white;
            border-radius: 50%;
            transition: var(--transition);
        }
        
        .social-links a:hover {
            background: var(--accent);
            transform: translateY(-3px);
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #343a40;
            color: #6c757d;
            font-size: 0.9rem;
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .navbar {
                flex-direction: column;
                padding: 15px 0;
            }
            
            .nav-links {
                margin-top: 20px;
            }
            
            .nav-links li {
                margin: 0 10px;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero p {
                font-size: 1.1rem;
            }
            
            .about-content {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <!-- 导航栏 -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <i class="fas fa-laptop-code"></i>
                    <span>CodeNewbie</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#" class="active">首页</a></li>
                    <li><a href="#">博客</a></li>
                    <li><a href="#">项目</a></li>
                    <li><a href="#">学习笔记</a></li>
                    <li><a href="#">关于我</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- 英雄区域 -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>从编程菜鸟到开发者的旅程</h1>
                <p>记录一个大一计算机专业学生的编程学习、项目实践与技术成长</p>
                <a href="#" class="btn">查看我的学习笔记</a>
            </div>
        </div>
    </section>

    <!-- 博客区域 -->
    <section class="blog-section">
        <div class="container">
            <div class="section-title">
                <h2>最新文章</h2>
            </div>
            <div class="blog-grid">
                <!-- 博客卡片 1 -->
                <div class="blog-card">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="HTML & CSS">
                    </div>
                    <div class="card-content">
                        <h3>HTML & CSS 入门指南</h3>
                        <p>分享我作为初学者学习HTML和CSS的经验，包括常见陷阱和实用资源...</p>
                        <a href="#" class="btn">阅读全文</a>
                        <div class="meta">
                            <span><i class="far fa-calendar"></i> 2023-10-15</span>
                            <span><i class="far fa-comment"></i> 24 评论</span>
                        </div>
                    </div>
                </div>
                
                <!-- 博客卡片 2 -->
                <div class="blog-card">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="JavaScript">
                    </div>
                    <div class="card-content">
                        <h3>JavaScript 学习曲线</h3>
                        <p>从变量声明到异步编程，记录我学习JavaScript的心路历程...</p>
                        <a href="#" class="btn">阅读全文</a>
                        <div class="meta">
                            <span><i class="far fa-calendar"></i> 2023-10-08</span>
                            <span><i class="far fa-comment"></i> 18 评论</span>
                        </div>
                    </div>
                </div>
                
                <!-- 博客卡片 3 -->
                <div class="blog-card">
                    <div class="card-img">
                        <img src="https://images.unsplash.com/photo-1581094794329-efd8df1e7f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Git">
                    </div>
                    <div class="card-content">
                        <h3>Git 版本控制入门</h3>
                        <p>从零开始学习Git：基本命令、工作流程和团队协作实践...</p>
                        <a href="#" class="btn">阅读全文</a>
                        <div class="meta">
                            <span><i class="far fa-calendar"></i> 2023-10-01</span>
                            <span><i class="far fa-comment"></i> 32 评论</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 关于区域 -->
    <section class="about-section">
        <div class="container">
            <div class="section-title">
                <h2>关于我</h2>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h2>计算机科学专业大一学生</h2>
                    <p>你好！我是一名计算机科学专业的大一学生，对Web开发和编程充满热情。这个博客记录了我的学习旅程、项目经验和编程心得。</p>
                    <p>作为一名编程新手，我深知学习编程的挑战，因此希望通过这个博客分享我的学习过程，帮助其他初学者少走弯路。</p>
                    
                    <div class="skills">
                        <h3>当前技能树</h3>
                        <div class="skill-bar">
                            <div class="skill-info">
                                <span>HTML/CSS</span>
                                <span>75%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="progress" style="width: 75%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-bar">
                            <div class="skill-info">
                                <span>JavaScript</span>
                                <span>60%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="progress" style="width: 60%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-bar">
                            <div class="skill-info">
                                <span>Python</span>
                                <span>50%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="progress" style="width: 50%"></div>
                            </div>
                        </div>
                        
                        <div class="skill-bar">
                            <div class="skill-info">
                                <span>Git</span>
                                <span>40%</span>
                            </div>
                            <div class="skill-progress">
                                <div class="progress" style="width: 40%"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="关于我">
                </div>
            </div>
        </div>
    </section>

    <!-- 联系区域 -->
    <section class="contact-section">
        <div class="container">
            <div class="section-title">
                <h2>联系我</h2>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h3>邮箱</h3>
                            <p>contact@codenewbie.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3>位置</h3>
                            <p>中国 · 某大学计算机学院</p>
                        </div>
                    </div>
                    
                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h3>社交媒体</h3>
                            <p>GitHub · 知乎 · B站</p>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form">
                    <form>
                        <div class="form-group">
                            <label for="name">姓名</label>
                            <input type="text" id="name" class="form-control" placeholder="你的名字">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" id="email" class="form-control" placeholder="你的邮箱">
                        </div>
                        
                        <div class="form-group">
                            <label for="message">留言</label>
                            <textarea id="message" class="form-control" placeholder="你想对我说什么..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn">发送消息</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>CodeNewbie</h3>
                    <p>一个记录编程学习旅程的个人博客，分享从零开始学习编程的经验、资源和心得体会。</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>快速链接</h3>
                    <ul class="footer-links">
                        <li><a href="#">首页</a></li>
                        <li><a href="#">关于我</a></li>
                        <li><a href="#">博客</a></li>
                        <li><a href="#">项目作品</a></li>
                        <li><a href="#">学习资源</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>分类</h3>
                    <ul class="footer-links">
                        <li><a href="#">前端开发</a></li>
                        <li><a href="#">Python学习</a></li>
                        <li><a href="#">算法与数据结构</a></li>
                        <li><a href="#">Git与GitHub</a></li>
                        <li><a href="#">大学生活</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>订阅更新</h3>
                    <p>订阅我的博客，获取最新的学习笔记和编程资源。</p>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="你的邮箱地址">
                        <button class="btn" style="width: 100%; margin-top: 10px;">订阅</button>
                    </div>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2023 CodeNewbie - 编程新手的成长笔记. 保留所有权利。</p>
            </div>
        </div>
    </footer>

    <script>
        // 简单的表单验证
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if(name && email && message) {
                alert('消息已发送！感谢你的联系。');
                this.reset();
            } else {
                alert('请填写所有字段！');
            }
        });
        
        // 滚动效果
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 50) {
                header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });
    </script>
</body>
</html>
