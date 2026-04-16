// const hamburger = document.getElementById('hamburger')
// const navMenu = document.getElementById('navMenu')

// hamburger.addEventListener('click', () => {
//   navMenu.classList.toggle('active')
// })

document.addEventListener('DOMContentLoaded', function () {

  // ================= NAVBAR =================
  const hamburger = document.getElementById('hamburger')
  const navMenu = document.getElementById('navMenu')

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active')
  })

  // ================= TESTIMONIAL =================
  const track = document.querySelector('.slider-track')
  const slides = document.querySelectorAll('.slide')
  const next = document.querySelector('.next')
  const prev = document.querySelector('.prev')

  let index = 0

  function updateSlider () {
    if (!slides.length) return
    const slideWidth = slides[0].offsetWidth + 20
    track.style.transform = `translateX(-${index * slideWidth}px)`
  }

  if (next && prev) {
    next.addEventListener('click', () => {
      if (index < slides.length - getVisibleSlides()) {
        index++
        updateSlider()
      }
    })

    prev.addEventListener('click', () => {
      if (index > 0) {
        index--
        updateSlider()
      }
    })
  }

  function getVisibleSlides () {
    if (window.innerWidth <= 600) return 1
    if (window.innerWidth <= 992) return 2
    return 3
  }

  window.addEventListener('resize', updateSlider)

  // ================= BLOG =================
  const blogCards = document.querySelectorAll('.blog-card')
  const blogPageBtns = document.querySelectorAll('[data-page-btn]')
  const blogPrevBtn = document.getElementById('blogPrevBtn')
  const blogNextBtn = document.getElementById('blogNextBtn')

  let blogCurrentPage = 1
  const blogTotalPages = blogPageBtns.length

  function blogShowPage (page) {
    blogCurrentPage = page

    blogCards.forEach((card) => {
      const cardPage = Number(card.getAttribute('data-page'))
      card.style.display = cardPage === page ? 'flex' : 'none'
    })

    blogPageBtns.forEach((btn) => {
      btn.classList.toggle(
        'blog-active',
        Number(btn.dataset.pageBtn) === page
      )
    })

    if (blogPrevBtn) blogPrevBtn.disabled = page === 1
    if (blogNextBtn) blogNextBtn.disabled = page === blogTotalPages
  }

  blogPageBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      blogShowPage(Number(btn.dataset.pageBtn))
    })
  })

  if (blogPrevBtn) {
    blogPrevBtn.addEventListener('click', () => {
      if (blogCurrentPage > 1) {
        blogShowPage(blogCurrentPage - 1)
      }
    })
  }

  if (blogNextBtn) {
    blogNextBtn.addEventListener('click', () => {
      if (blogCurrentPage < blogTotalPages) {
        blogShowPage(blogCurrentPage + 1)
      }
    })
  }

  blogShowPage(1)

  // ================= AUTO SCROLL (FIXED) =================
  const container = document.querySelector('.cta-container')

  if (!container) {
    console.log('❌ cta-container not found')
    return
  }

  console.log('✅ auto scroll running')

  // duplicate content
  container.innerHTML += container.innerHTML

  let speed = 1

  function autoScroll () {
    container.scrollLeft += speed

    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0
    }
  }

  let interval = setInterval(autoScroll, 20)

  container.addEventListener('mouseenter', () => clearInterval(interval))
  container.addEventListener('mouseleave', () => {
    interval = setInterval(autoScroll, 20)
  })

  // ============================topbar=================
  window.addEventListener('scroll', function () {
    const btn = document.getElementById('topbar-btn')
    if (!btn) return

    if (window.scrollY > 200) {
      btn.classList.add('show')
    } else {
      btn.classList.remove('show')
    }
  })

  document.addEventListener('click', function (e) {
    if (e.target.id === 'topbar-btn') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  })

// ===============================watsap==================================
  window.addEventListener('scroll', function () {
  const btn = document.getElementById('topbar-btn')
  if (!btn) return

  if (window.scrollY > 200) {
    btn.style.opacity = "1"
    btn.style.visibility = "visible"
  } else {
    btn.style.opacity = "0"
    btn.style.visibility = "hidden"
  }
})

document.getElementById('topbar-btn')?.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})
})
