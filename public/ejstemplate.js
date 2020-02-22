$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
 

$(document).ready(()=>{
    $("#form1").submit( (e)=>{
        e.preventDefault();
        var counter=0;
        for(var x=0;x<quizzes.length;x++)
        {
            if($("#answer"+(x+1)+":checked").val() == quizzes[x].correctOption)
                counter++;
        }
        console.log(counter);
        ajax_call(counter)
    });
});


$(document).ready(()=>{
    $("#form2").submit( (e)=>{
        e.preventDefault();
        var counter=0;
        for(var x=0;x<25;x++)
        {
            if($("#answer"+(x+1)+":checked").val()==1)
                counter++;
        }
        console.log(counter);
        ajax_call(counter);
    });
});


$(document).ready(()=>{
    $("#form3").submit( (e)=>{
        e.preventDefault();
        $.ajax({
            url: '/quiz/add',
            data :{
                question: $('#question').val(),
                type: $("#type:checked").val(),
                A: $('#A').val(),
                B: $('#B').val(),
                C: $('#C').val(),
                D: $('#D').val(),
                correctOption: $("#correctOption:checked").val()
                },

            method: "POST",
            success : function(data){
                alert(data.message);
                window.location.replace("/admin");
            },
            error:function(err){
                alert(JSON.stringify(err.responseText));
            }
        }); 
    });
});

function ajax_call(counter)
{
    $.ajax({
        url: '/submit',
        data :{
            teamName: $('#teamName').val(),
            points: counter
        },
        method: "POST",
        success : function(data){
            window.location.replace(data.link);
        },
        error:function(err){
            alert(JSON.stringify(err.responseText));
        }
    }); 
}