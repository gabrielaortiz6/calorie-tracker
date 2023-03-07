
fetch("https://api.edamam.com/api/nutrition-data?app_id=2197e613&app_key=49154045da302b5e11705006dfe3dfa6&ingr=1%20apple")
  .then((response) => response.json())
  .then((data) => console.log(data));

 $(document).ready(function(){
    $(document).on('#food-input', function(){
        const query = $(this).val();
        $.ajax({
            url:"https://api.edamam.com/api/nutrition-data?app_id=2197e613&app_key=49154045da302b5e11705006dfe3dfa6&ingr=1%20apple",

            data:{
                q : query
            },
            success: function(response){
                const suggestions = response.results.map(result => result.name);
                const dropdown =$('<div id = "food-list"></div>');
                suggestions.forEach(suggestion => {
                    const item =$('<div id = "food-list"></div>').text(suggestion);
                    item.on(click,function(){
                        $('#food-input').val(suggestion);
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
