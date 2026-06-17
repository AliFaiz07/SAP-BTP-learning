using myapp from '../db/schema';
service CatalogService {
    entity Books as projection on myapp.Books;
    entity Authors as projection on myapp.Authors;
}
annotate CatalogService.Books with @odata.draft.enabled;
annotate CatalogService.Authors with @odata.draft.enabled;