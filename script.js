$(document).ready(function () {
    var count = 0;
    $('#btn').on("click", function () {
        var inputValue = $('.input-value').val();
        if (inputValue != '') {
            count++;
            $(".to-do").append('<li class="accord"><input type="checkbox" class = "check" id="check-' + count + '"><label for="check-' + count + '"></label><span class="main-content">' + inputValue + '</span><span class="remove"><i class="material-icons">delete_forever</i></span></li>')
        }
        $('.input-value').val('');

        $(document).on('change', 'input[type="checkbox"]', function () {
            if ($(this).is(':checked')) {
                $(this).closest("li").children(".remove").addClass("active");
            } else {
                $(this).closest("li").children(".remove").removeClass("active");
            }
        })

        $(document).on('click', '.remove', function () {
            $(this).parent().fadeOut(500);
        })

        $('ul').on('click', '.check', function () {
            $(this).parent('li').toggleClass('checkin');
        })
    })
})
