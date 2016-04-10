function editIdeas(){
  $('#idea-index').delegate('.edit-idea', 'blur', function(){
    var $ideaObject = $(this).children('span')
    var $ideaDataId = $ideaObject.attr('data-id')
    var $ideaId = $(this).closest('.idea').attr('data-id')
    var $ideaNewData = $ideaObject.text() || " "

    ideaParams = setIdeaParams($ideaDataId, $ideaNewData);

    $.ajax({
      url: 'api/v1/ideas/' + $ideaId,
      type: 'PUT',
      data: ideaParams,
      success: function(response){
      }, error: function(xhr){
        console.log(xhr.responseText)
      }
    });
  })
}

function setIdeaParams(ideaDataId, ideaNewData) {
  return { ideaDataId: ideaNewData };
}
