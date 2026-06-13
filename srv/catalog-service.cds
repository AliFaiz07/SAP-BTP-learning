using myapp from '../db/schema';

service CatalogService {
    entity Books as projection on myapp.Books;
}
