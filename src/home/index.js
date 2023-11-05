'use strict'

function startCountdown () {
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const yyyy = today.getFullYear()
  const nextYear = yyyy + 1
  const dayMonth = '11/11/'
  let birthday = dayMonth + yyyy

  today = mm + '/ ' + dd + '/' + yyyy
  if (today > birthday) {
    birthday = dayMonth + nextYear
  }
  // end

  const countDown = new Date(birthday).getTime()
  const x = setInterval(function () {
    const now = new Date().getTime()
    const distance = countDown - now

    document.getElementById('days').innerText = Math.floor(distance / (day))
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour))
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute))
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second)

    // do something later when date is reached
    if (distance < 0) {
      document.getElementById('headline').innerText = 'Its my birthday!'
      document.getElementById('countdown').style.display = 'none'
      document.getElementById('content').style.display = 'block'
      clearInterval(x)
    }
    // seconds
  }, 0)
}

startCountdown()
