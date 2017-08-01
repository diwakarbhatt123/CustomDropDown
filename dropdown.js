let page;
$(document).ready(function() {
    page = 1;
    getNews();
});

function getNews(source) {
    let newsSource = (source) ? source : "google-news";
    $.ajax({

        url: `https://cors-anywhere.herokuapp.com/https://newsapi.org/v1/articles?source=${newsSource}&api_key=eceda4a298bb4f7dae1d5c7efd007211`,
        type: 'GET',
        headers: {
            'Accept': 'text/json',
            'Access-Control-Allow-Origin': '*',
            'x-api-key': 'eceda4a298bb4f7dae1d5c7efd007211'
        },
        crossDomain: true,
        success: function(resp) {
            let articles = resp.articles;
            $('.content').text("");
            articles.forEach(function(news) {
                addNewsToUi(news);
            });
        },
        // error: function() { alert('Failed!'); },
    });
}

function addNewsToUi(news) {
    let newsPoster = news.urlToImage;
    let newsTitle = news.title;
    let newsDescription = news.description;
    let newsAuthor = news.author;
    let newsUrl = news.url;
    let newsPanel = '<div class="moviePanel"><div class="moviePosterDiv"><img height="300" width="200" src="' + newsPoster + '" class="moviePoster"></div><div class="movieContent"><h1 class="movieTitle">' + newsTitle + '</h1><p class="movieDescription">' + newsDescription + '</p><p class="movieDescription">' + newsAuthor + '</p><a class="movieDescription" href=' + newsUrl + ' target="_blank">Read More</a></div></div>';
    $(".content").append(newsPanel);
}