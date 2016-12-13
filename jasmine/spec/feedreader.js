/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This spec loops through the allFeeds object and verifies that it URL's that are defined and that they aren't empty.

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are deined', function() {
            for (var i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toBe('');
            }
        });

        // This spec loops through the allFeeds object and verifies that Names are defined and that they aren't empty.

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are deined', function() {
             for (var i = 0; i < allFeeds.length; i++) {
               expect(allFeeds[i].name).toBeDefined();
               expect(allFeeds[i].name).not.toBe('');
             }
         });

    });


    // These suite will verify the state of menu when the page loads and it also verifies that when the menu is clicked, the menu will be visible/hidden.

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        var body = $('body');

        // The spec below verifies that the menu page is hidden by deault when the page loads.

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('to be hidden by default when the page loads', function() {
           expect(body.hasClass('menu-hidden')).toBe(true);
         });

        //  The spec below verifies that when the menu icon is clicked that it will become visible and hidden.

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          describe('when clicked', function() {

            var slideMenu = $('.slide-menu');

            // Before each spec runs, the beforeEach function toggles the menu-hidden class

            beforeEach(function() {
              body.toggleClass('menu-hidden');
            });

            // After each spec runs, the afterEach function toggles the menu-hidden class back.

            afterEach(function() {
              body.toggleClass('menu-hidden');
            });

            it('should display the menu', function() {
              expect(slideMenu.css('transform')).not.toBe('slideMenu.css("transform", "translate3d(-12em, 0, 0)")');
            });

            it('should hide the menu after it was clicked', function() {
              expect(slideMenu.css('transform')).not.toBe('slideMenu.css("transform", "translate3d(0, 0, 0)")');
            });
          });
    });

    // The suite below verifies that the initial feed populates with information for the user to click on.

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

      // Before each spec runs, the beforeEach function handles request it will wait till the request is complete

      beforeEach(function(done) {
        loadFeed(0, done);
      });

      // The spec gathers how many divs are populated with the 'entry' class and verifies that there is more than '0'.

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
      it('has added entries', function(done) {
        var entry = $('.feed').contents().find('.entry').size();
        expect(entry).not.toBe(0);
        done();
      });
    });

    // The suite below verifies that when a new feed is loaded, that the conent has actually changed.

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
      var html;

      // Before each spec runs, the beforeEach function handles request it will wait till the request is complete

      beforeEach(function(done) {
        loadFeed(1, function() {
          html = $('.feed').html();
          done()
        })
      })

      // This spec compares one feed's content against another feed's content and verifies that they aren't the same.
      
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      it('confirmed that new feed loaded', function(done){
        loadFeed(0, function() {
          expect($('.feed').html()).not.toEqual(html);
          done();
        })
      });
    });
}());
