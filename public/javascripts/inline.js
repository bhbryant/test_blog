jQuery(document).ready(function() {


    $('[data-edit-path]').each(function() { $(this).append('<a href="#" data-remote="true">Edit Inline</a>'.replace('#',$(this).attr('data-edit-path'))) });

      
  });