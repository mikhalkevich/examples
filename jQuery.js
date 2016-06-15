$(function(){
    if($('[name=anamn_dis]:checked').val() == 'Да'){
        $('.showhide_clinical #hideerr').show();
        $('#zabolevania_block').show();
    }else{
        $('.showhide_clinical #hideerr').hide();
        $('#zabolevania_block').hide();
    } 

    $('.dropdown-toggle').dropdown();
    $('.openblock input, .openblock textarea, .openblock select').attr('disabled',true);
    $('.openblock button').text('Проверено');
    $('a.glyphicon-remove').hide();
    $('.prichina').hide();
	// визит 1
    toggles('provereno','showhide','block_title_patient');
    toggles('provereno','showhide_zhal','block_title_zhal');
    // визит 2
    toggles('provereno','showhide','block_title_osm');
    toggles('provereno','showhide_adverseevent','block_title_adverseevent');
    toggles('provereno','showhide_com','block_title_com');
    // визит 3
    toggles('nones','showhide','block_title_osm');
    toggles('nones','showhide_adverseevent','block_title_adverseevent');
    toggles('nones','showhide_com','block_title_com');

    function toggles(big,show, small){
        $('.'+big+' .'+show).hide();
        $('.'+big+' .'+small).click(function () {
          $("."+show).toggle();
        });
    }
    //создаем ссылку "Сообщить об ошибке"
    $('.miss').each(function(){
     data = $(this).attr('data');
     data_id = $(this).attr('data_id');

     $(this).append("<a href=# class='btn btn-success zhyrnal' data_id='"+data_id+"' data='"+data+"'>Журнал изменений</a> \n\
                     <a href='#' class='btn btn-danger misstake' data='"+data+"' data-toggle='modal' data-target='.bs-example-modal-lg'>Сообщить об ошибке</a>");
    });
    $('.misstake').click(function(){
        $.ajax({
            'type':'POST',
            'url':'/adminka/ajax',
            'data':'name='+$(this).attr('data')+'&url='+document.location.href,
            'success':function(data){
                $('.modal-content').html(data);
            }
        });
    });
    $('.zhyrnal').click(function(e){
        e.preventDefault();
           dd = $(this).attr('data_id');
           $.ajax({
               'type':'POST',
               'url':'/adminka/ajaxzhyrnal',
               'data':'name='+$(this).attr('data')+'&url='+document.location.href,
               'success':function(data){

                   $('#'+dd).html(data);
               }
           });
       });
});