// 实验班培养方案可视化 - 交互逻辑

// 老师简介弹窗功能
function openTeacherModal() {
  var modal = document.getElementById('teacherModal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeTeacherModal() {
  var modal = document.getElementById('teacherModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('实验班培养方案可视化已加载');

  // 参考通知链接悬停效果
  const refLinks = document.querySelectorAll('.ref-notice');
  refLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(3px)';
    });
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // 单元格条目悬停高亮
  const cellItems = document.querySelectorAll('.cell-item');
  cellItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(102, 126, 234, 0.06)';
      this.style.borderRadius = '4px';
    });
    item.addEventListener('mouseleave', function() {
      this.style.background = '';
    });
  });

  // 点击弹窗外部区域关闭弹窗
  var modal = document.getElementById('teacherModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeTeacherModal();
      }
    });
  }

  // 按ESC键关闭弹窗
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeTeacherModal();
    }
  });
});
