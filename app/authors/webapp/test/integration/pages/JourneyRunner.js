sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"authorsview/authors/test/integration/pages/AuthorsList",
	"authorsview/authors/test/integration/pages/AuthorsObjectPage"
], function (JourneyRunner, AuthorsList, AuthorsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('authorsview/authors') + '/test/flp.html#app-preview',
        pages: {
			onTheAuthorsList: AuthorsList,
			onTheAuthorsObjectPage: AuthorsObjectPage
        },
        async: true
    });

    return runner;
});

