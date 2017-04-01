(function($){
    var wikipediaViewer = {
        

        search: function(searchTerm) {
            
            
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?",
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    this.updateUI(data);
                    
                }.bind(this)
            })
           
        },

        updateUI: function(response) {
            
            var $articles = $(".articles").html("");
            for(var i = 0; i < response[1].length; i++) {
                $(".articles").prepend("<a href=" + response[3][i] + " target='_blank'><div class='article'><h2>" + response[1][i] + "</h2><p>" + response[2][i] + "</p></div</a>");
            }
           
            console.log(response);
            
        }
        


    
    }
    



$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        var searchTerm = $("#search").val();
        wikipediaViewer.search(searchTerm);
        
    });
  
});

})(jQuery);