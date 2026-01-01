// ============================================
// 网站功能脚本
// ============================================

// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    
    // 设置当前年份
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // 移动端菜单切换
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // 关闭移动菜单当点击链接时
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // 滚动时的导航栏效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            navbar.style.padding = '1.2rem 0';
        }
    });
    
    // 项目数据
    const projects = [
        {
            title: "交互式数据可视化",
            description: "使用D3.js创建的实时数据仪表板，展示复杂的业务指标，支持多维度数据筛选和实时更新。",
            tags: ["JavaScript", "D3.js", "数据可视化", "图表"],
            color: "#4A90E2"
        },
        {
            title: "电子商务平台",
            description: "完整的在线商店，具有用户认证、购物车、支付集成和库存管理功能，支持多语言和多货币。",
            tags: ["React", "Node.js", "MongoDB", "支付集成", "REST API"],
            color: "#50C878"
        },
        {
            title: "任务管理应用",
            description: "协作式项目管理工具，具有实时更新、文件共享、团队聊天和进度跟踪功能，支持移动端。",
            tags: ["Vue.js", "Firebase", "实时数据库", "PWA"],
            color: "#FF6B6B"
        },
        {
            title: "个人理财追踪器",
            description: "帮助用户跟踪支出、设定预算目标并提供财务洞察的应用，具有数据分析和可视化报告功能。",
            tags: ["React Native", "Redux", "图表", "移动应用"],
            color: "#9B59B6"
        },
        {
            title: "作品集网站生成器",
            description: "允许用户通过拖放界面创建和自定义个人作品集网站的工具，无需编程知识。",
            tags: ["HTML/CSS", "JavaScript", "UI/UX设计", "响应式设计"],
            color: "#FFA500"
        },
        {
            title: "天气预测应用",
            description: "具有精美UI的天气应用，提供详细预报、天气警报和空气质量指数，支持地理位置。",
            tags: ["API集成", "响应式设计", "地理位置", "PWA"],
            color: "#3498DB"
        }
    ];
    
    // 渲染项目卡片
    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        
        if (projectsGrid) {
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';
                
                projectCard.innerHTML = `
                    <div class="project-image" style="background: linear-gradient(135deg, ${project.color} 0%, ${adjustColor(project.color, -30)} 100%)">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                // 添加点击效果
                projectCard.addEventListener('click', function() {
                    alert(`查看 "${project.title}" 的详细信息\n\n这是一个演示项目，实际项目中可以链接到项目详情页或GitHub仓库。`);
                });
                
                projectsGrid.appendChild(projectCard);
            });
        }
    }
    
    // 辅助函数：调整颜色亮度
    function adjustColor(color, amount) {
        let usePound = false;
        
        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }
        
        const num = parseInt(color, 16);
        let r = (num >> 16) + amount;
        
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        
        let b = ((num >> 8) & 0x00FF) + amount;
        
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        
        let g = (num & 0x0000FF) + amount;
        
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16).padStart(6, '0');
    }
    
    // 联系表单处理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 这里在实际项目中应该发送到服务器
            // 现在只是演示
            alert(`感谢 ${name} 的联系！\n\n我们已经收到您的消息，会尽快回复到 ${email}。`);
            
            // 重置表单
            this.reset();
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 渲染项目
    renderProjects();
    
    // 控制台欢迎信息
    console.log('%c👋 欢迎来到我的作品集网站！', 'color: #000; font-size: 18px; font-weight: bold;');
    console.log('%c这是一个完全响应式的个人作品集网站，使用纯HTML、CSS和JavaScript构建。', 'color: #666; font-size: 14px;');
});

// 页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});