function setScrollBy(value) {
    // Прокрутить окно на координату value
    window.scrollBy(0, value)
    const windowScrollTop = window.scrollY
    console.log(windowScrollTop)
  }
  
  const input = document.querySelector('.lesson__input')
  const btn = document.querySelector('.lesson__btn')
  
  // Забегая вперед
  // Таким образом можно повешать прослушку события клика
  btn.addEventListener(
    'click',
    () => setScrollBy(input.value)
  )