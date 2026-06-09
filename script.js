document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 📢 0. 상단 전광판 문구 무한 순환 기능
  // ==========================================
  const tickerText = document.getElementById('ticker-text')
  const messages = [
    '> ❤️이병천 교수님 팬입니다❤️',
    '> 웹프로그래밍 너무 재밌어요!',
    '> 앞으로도 잘 부탁드리겠습니다!!',
  ]
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

// ==========================================
//  4. 이스터 에그 (로고 클릭 시 콘솔 및 알림)
// ==========================================
const logo = document.querySelector('.logo')
let clickCount = 0

// 이병천 교수님 이스터에그 꼭 확인해주십쇼..!
console.log(
  "%c💻 Kim MinJae's Security Portfolio",
  'color: #00ffcc; background: #001122; font-size: 16px; padding: 5px 10px; border-radius: 5px;',
)
console.log(
  '웹 프로그래밍과 웹 해킹을 사랑하는 정보보호학전공 학생입니다. 로고를 5번 클릭해보세요!',
)

logo.addEventListener('click', () => {
  clickCount++
  if (clickCount === 5) {
    alert(
      '❤️이병천 교수님❤️ 안녕하십니까! 웹 프로그래밍(HTML/CSS/JS) 열심히 공부하고 있는 김민재입니다!! 수업 정말 잘 듣고 있고 앞으로도 잘 부탁드리겠습니다!!',
    )
    clickCount = 0
  }
})
