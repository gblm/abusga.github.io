// 当前年份
document.getElementById('current-year').textContent = new Date().getFullYear();

// 移动端菜单切换
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// 关闭移动菜单当点击链接时
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// 项目数据
const projects = [
    {
        title: "交互式数据可视化",
        description: "使用D3.js创建的实时数据仪表板，展示复杂的业务指标。",
        tags: ["JavaScript", "D3.js", "数据可视化"],
        imageColor: "#4A90E2"
    },
    {
        title: "电子商务平台",
        description: "完整的在线商店，具有用户认证、支付集成和库存管理功能。",
        tags: ["React", "Node.js", "MongoDB", "支付集成"],
        imageColor: "#50C878"
    },
    {
        title: "任务管理应用",
        description: "协作式项目管理工具，具有实时更新、文件共享和团队聊天功能。",
        tags: ["Vue.js", "Firebase", "实时数据库"],
        imageColor: "#FF6B6B"
    },
    {
        title: "个人理财追踪器",
        description: "帮助用户跟踪支出、设定预算目标并提供财务洞察的应用。",
        tags: ["React Native", "Redux", "图表"],
        imageColor: "#9B59B6"
    },
    {
        title: "作品集网站生成器",
        description: "允许用户通过拖放界面创建和自定义个人作品集网站的工具。",
        tags: ["HTML/CSS", "JavaScript", "UI/UX"],
        imageColor: "#FFA500"
    },
    {
        title: "天气预测应用",
        description: "具有精美UI的天气应用，提供详细预报和天气警报。",
        tags: ["API集成", "响应式设计", "地理位置"],
        imageColor: "#3498DB"
    }
];

// 渲染项目卡片
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image" style="background-color: ${project.imageColor}"></div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // 添加滚动时的导航栏效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });
    
    // 为项目卡片添加点击效果
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            // 这里可以添加项目详情弹窗或跳转
            alert(`查看 "${this.querySelector('.project-title').textContent}" 的详细信息`);
        });
    });
});