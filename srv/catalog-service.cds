using myapp from '../db/schema';

service CatalogService {
    entity Books as projection on myapp.Books;
    entity Authors as projection on myapp.Authors;
}


//services= declares an API Service
//CatalogService= name of the API Service
