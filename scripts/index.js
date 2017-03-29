(function($){
    var wikipediaViewer = {
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=",

        search: function() {
            var query = $("#search").val();
            $.get(this.url + query).done(function(response) {
                this.updateUI(response);
            })
        },

        updateUI: function(response) {
            var titles = response[1].forEach(function(title){
                var $title = $(".article");
            $title.append(
                $('<h2>').text(title)
            )
            })
            
        }
        


    
    }
    



$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault();
        wikipediaViewer.search();
        return false;
    });
  
});

})(jQuery);