
$(".btn1").on("click", () => {
    $(".row1").toggleClass("d-none")
    $(".row2").toggleClass("d-none")
    $.ajax("https://asadbek6035.pythonanywhere.com/account/register/",{
        method:"POST",
        data:{
            full_name:$(".text").val(),
            phone_number: $(".num").val(),
            password2: $(".pass2").val()
        },
        success:function(run){
            console.log(run);
        },
        error:function(res){
            console.log(res);
        }
    })
})

  