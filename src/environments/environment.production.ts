export const environment = {
    /* Parameter name to run production environment*/  
    /* Use ng build - environment=production*/
    name: "production",
  
    /* API TMDB*/
    API_TMDB : 'https://api.themoviedb.org/3',
    API_TMDB_SEARCHMOVIES : 'https://api.themoviedb.org/3/search/movie',
    API_TMDB_SEARCHTVSHOWS : 'https://api.themoviedb.org/3/search/tv',
    API_TMDB_GETMOVIESDETAILS : 'https://api.themoviedb.org/3/movie',
    API_TMDB_GETTVSHOWSDETAILS : 'https://api.themoviedb.org/3/tv',
    API_KEY_TMDB : 'd4fec862aa80d52ef944b7757bb64c44',
  
    /* API VIDEO APPLICATION BACKEND*/
    API_VIDEOAPP_ENDPOINT_CLIENTFIND :'http://localhost:8080/client',
  
    /* API IAM*/
    API_IAM_ENDPOINT_REGISTER :'http://localhost:8081/register',
    API_IAM_ENDPOINT_LOGIN:'http://localhost:8081/login',
  
    /* URL VIDEO APPLICATION FRONTEND*/
    URL_VIDEOAPP_HOME :'http://localhost:4200',
    URL_VIDEOAPP_REGISTER :'http://localhost:4200/register',
    URL_VIDEOAPP_LOGIN :'http://localhost:4200/login'
  };