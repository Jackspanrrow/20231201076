// 从第一个帖子开始
let counter = 1;

// 每次加载20个帖子
const quantity = 20;

// 当DOM加载完成时，渲染前20个帖子
document.addEventListener('DOMContentLoaded', load);

// 如果滚动到底部，加载下一批20个帖子
window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        load();
    }
};

// 如果点击隐藏按钮，删除帖子
document.addEventListener('click', event => {
    
    // 找到被点击的元素
    const element = event.target;
    
    // 检查用户是否点击了隐藏按钮
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        element.parentElement.addEventListener('animationend', () => {
            element.parentElement.remove();
        });
    }
});

// 加载下一组帖子
function load() {
    
    // 设置开始和结束帖子编号，并更新计数器
    const start = counter;
    const end = start + quantity - 1;
    counter = end + 1;
    
    // 获取新帖子并添加帖子
    fetch(`/posts?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(add_post);
    })
    .catch(error => {
        console.error('Error loading posts:', error);
    });
}

// 将给定内容的新帖子添加到DOM
function add_post(contents) {
    
    // 创建新帖子
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `${contents} <button class="hide">Hide</button>`;
    
    // 将帖子添加到DOM
    document.querySelector('#posts').append(post);
}