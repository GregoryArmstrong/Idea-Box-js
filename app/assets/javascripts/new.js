function saveNewIdea(){
  $('#submit-new-idea').on('click', function(){
    var ideaTitle = $('#new-idea-title').val();
    var ideaBody  = $('#new-idea-body').val();
    $.ajax({
      url: '/api/v1/ideas',
      type: 'POST',
      data: {
        'title': ideaTitle,
        'body': ideaBody
      },
      success: function(response){
        $('#new-idea-title').val("");
        $('#new-idea-body').val("")
        displayNewIdea(response);
      }, error: function(xhr) {
      }
    })
  })
}

function displayNewIdea(idea){
  // if(idea.body){
  //   idea.body = truncateIdeaBody(idea)
  // } else {
  //   idea.body = ""
  // }
  $('#idea-index').prepend(ideaHtml(idea))
}
