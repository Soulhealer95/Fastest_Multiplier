/**
 * Created by Test on 2016-11-27.
 */
//Main subroutine; begins with click on button
$(document).ready(function ()
{
    $('#button_sub').click(function () {

        var num1 = $('#number').val().toString(); //storing input
        var num2 = $('#number2').val().toString();
        var ans = [];

        //Sanity Checks
        if(num1.match(/[^0-9]/g) != null || num2.match(/[^0-9]/g) != null)
        {
            alert("Invalid Input!");
        }
        else
        {
            ans = Karat(num1, num2);

            var content = "<br><div class='col-lg'><label class='form-control-label'><b>Answer: </b>"+ans+"</label></div>"
            $("#Answer").html(content);
        }

    });
});
