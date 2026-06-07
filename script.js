document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 📢 0. 상단 전광판 문구 무한 순환 기능 (새로 추가됨)
  // ==========================================
  const tickerText = document.getElementById('ticker-text')
  const messages = ['> 이병천 교수님 팬입니다', '> 웹프로그래밍 너무 재밌어요!']
  let messageIndex = 0

  // 3초마다 문구를 순환시키는 함수
  setInterval(() => {
    // 1. 먼저 자연스럽게 위로 숨김 (Fade out 애니메이션 트리거)
    tickerText.classList.add('fade')

    // 2. 투명해진 타이밍(0.5초 뒤)에 글자를 바꾸고 다시 나타나게 함
    setTimeout(() => {
      messageIndex = (messageIndex + 1) % messages.length
      tickerText.textContent = messages[messageIndex]
      tickerText.classList.remove('fade')
    }, 500)
  }, 3000)

  // ==========================================
  // 1. 다크 모드 토글 (LocalStorage 연동)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle')

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode')
    themeToggleBtn.textContent = '☀️'
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')

    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark')
      themeToggleBtn.textContent = '☀️'
    } else {
      localStorage.setItem('theme', 'light')
      themeToggleBtn.textContent = '🌙'
    }
  })

  // ==========================================
  // 2. 상단 스크롤(Scroll-to-Top) 이동 버튼
  // ==========================================
  const scrollTopBtn = document.getElementById('scroll-to-top')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show')
    } else {
      scrollTopBtn.classList.remove('show')
    }
  })

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })

  // ==========================================
  // 3. 스크롤 포지션 감지 네비게이션 하이라이트
  // ==========================================
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-list a')

  window.addEventListener('scroll', () => {
    let currentSectionId = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (window.scrollY >= sectionTop - 150) {
        currentSectionId = section.getAttribute('id')
      }
    })

    navLinks.forEach((link) => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active')
      }
    })
  })
})
