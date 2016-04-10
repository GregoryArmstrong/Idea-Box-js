function searchIdeas(){
  $('#idea-searcher').on('keyup', function(){
    var $inputText = $(this).children('input').val().toLowerCase();
    var $ideaElements = $('.idea')

    $ideaElements.removeClass('hidden')
    var $hideIdeas = $ideaElements.filter(function(){
      $ideaBodyAndText = $(this).find(".title").text().toLowerCase() +
          $(this).find(".body").text().toLowerCase()
      return !($ideaBodyAndText.includes($inputText))
    })
    $hideIdeas.addClass('hidden')
  })
}
