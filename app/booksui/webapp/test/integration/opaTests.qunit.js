sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ns/booksui/test/integration/FirstJourney',
		'ns/booksui/test/integration/pages/BooksList',
		'ns/booksui/test/integration/pages/BooksObjectPage',
		'ns/booksui/test/integration/pages/Books_attachmentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_attachmentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ns/booksui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_attachmentsObjectPage: Books_attachmentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);