$(document).ready(function(){
    $('#autocomplete').on('input', function(){
        const query = $(this).val();
        $.ajax({
            url:"https://api.edamam.com/api/food-database/v2/parser",
            data:{
                q : query
            },
            success: function(response){
                const suggestions = response.results.map(result => result.name);
                const dropdown =$('<div id = "autocomplete-dropdown"></div>');
                suggestions.forEach(suggestion => {
                    const item =$('<div id = "autocomplete-dropdown"></div>').text(suggestion);
                    item.on(click,function(){
                        $('#autocomplete').val(suggestion);
                        dropdown.hide();
                    });
                    dropdown.append(item);
                });
                $('body').append(dropdown);
            }
        });
    });
});

//"https://code.jquery.com/jquery-3.6.0.min.js"
