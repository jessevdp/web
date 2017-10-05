(function () {
  var $container = document.querySelector('main')
  var $headings = $container.querySelectorAll('h1')

  var links = []

  $headings.forEach(function ($heading) {
    var text = $heading.textContent
    var id = text.replace(/\W/g, '').toLowerCase()

    // Create a link out of our heading and
    // add it to our array
    var $link = '<a href="#' + id + '">' + text + '</a>'
    links.push($link)

    // Edit the heading itself
    $heading.id = id
    $heading.innerHTML = $link
  })

  var $nav = document.querySelector('nav')
  var $nav_container = $nav.querySelector('.local')

  // Add every link to the navigation
  links.forEach(function (link) {
    $nav_container.insertAdjacentHTML('beforeend', link)
  })
}())
