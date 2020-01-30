var counter=0;

    $(document).ready(()=>{
        $("#form").submit( (e)=>{
            e.preventDefault();
            for(var x=0;x<2;x++)
            {
                if($("#answer"+(x+1)+":checked").val()==1)
                    counter++;
            }
            console.log(counter);
            $.ajax({
                url: '/submit',
                data :{
                    teamName: $('#teamName').val(),
                    points: counter
                },
                method: "POST",
                success : function(data){
                    console.log("fdfss");
                },
                error:function(err){
                    alert(JSON.stringify(err.responseText));
                }
            }); 
        });
    });

console.log(counter);