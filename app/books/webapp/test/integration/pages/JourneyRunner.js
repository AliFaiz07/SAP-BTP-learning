sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"bo/books/test/integration/pages/BooksList",
	"bo/books/test/integration/pages/BooksObjectPage"
], function (JourneyRunner, BooksList, BooksObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('bo/books') + '/test/flpSandbox.html#bobooks-tile',
        pages: {
			onTheBooksList: BooksList,
			onTheBooksObjectPage: BooksObjectPage
        },
        async: true
    });

    return runner;
});

