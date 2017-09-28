(function() {
  var $container = document.querySelector('main')
  var $headings = $container.querySelectorAll('h1')

  $headings.forEach(function ($heading) {
    var text = $heading.textContent
    var id = text.replace(/\W/g, '').toLowerCase()
    var $link = '<a href="#' + id + '">' + text + '</a>'

    $heading.id = id
    $heading.innerHTML = $link

  })
}());
