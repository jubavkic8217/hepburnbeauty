$(function(){
    var $forma = $("#forma");
    $.validator.addMethod("noSpace",function(value,element){
        return value == '' || value.trim().length != 0
    }, "Nisu dozvoljeni razmaci!");
    if($forma.length){
        $forma.validate({
            rules:{
                Ime:{
                    required: true,
                    noSpace: true
                },

                Prezime:{
                    required:true,
                    noSpace: true
                },

                email:{
                    required: true,
                    email: true,
                    noSpace: true
                },

                pwd:{
                    required: true,
                    noSpace: true
                },

                clanak:{
                    required: true,
                }
            },
            messages:{
                Ime:{
                    required: '<br>Ovo polje je obavezno!'
                },

                Prezime:{
                    required: '<br>Ovo polje je obavezno!'
                },

                email:{
                    required: '<br>Ovo polje je obavezno!',
                    email: '<br>Unesite validnu e-mail adresu!'
                },

                pwd:{
                    required: '<br>Ovo polje je obavezno!'
                },

                clanak:{
                    required:'<br>Obavezno je odabrati članak!'
                }
            }
        })
    }
    
});

$(document).ready(function()
    {
        $("#potvrdi").click(function()
        {
            var clanak=$("#clanak");
            if(clanak.val()=="")
            {
                document.getElementById("rezultat").innerHTML="<br><b>Molim izaberite jedan članak!</b>";
                document.getElementById("rezultat").style.color="red";
            }
            else
            {
                document.getElementById("rezultat").innerHTML="<br>Izabran je članak: <b>"+clanak.val()+"</b>";
                document.getElementById("rezultat").style.color="green";
            }
        })


});


var currentDate= new Date();
var month = currentDate.getMonth();
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var fullDate = day + "/" + (month+1) + "/" + year;
document.getElementById('date').innerHTML = fullDate;

function myFunction(){
    alert("Hvala Vam što posećujete naš sajt!");
}

$(document).ready(function(){
    $("#zatvori").click(function(){
      $("#forma").slideUp(3000);
    });
    $("#otvori").click(function(){
      $("#forma").slideDown(3000);
    });
});

$(document).ready(function(){
$('.container-slike').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{
        enabled:true
    }
});

});

