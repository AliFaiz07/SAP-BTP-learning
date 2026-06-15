namespace myapp;

entity Authors {
    key ID     : Integer;
        name   : String;
        country: String;
}

entity Books {
    key ID      : Integer;
        title   : String;
        price   : Decimal;
        discount: Decimal;
        author  : Association to Authors;
}