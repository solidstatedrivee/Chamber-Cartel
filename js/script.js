$(function() {
    let cartel = [{
            member: "Caleb Herron",
            role: "Artistic Director, Percussion"
        },
        {
            member: "Laura Gordy",
            role: "Piano"
        }, {
            member: "Matthieu Clavé ",
            role: " Flute"
        }, {
            member: "Judith Klein",
            role: "Flute"
        }, {
            member: "Michael Abrams",
            role: "Clarinet"
        }, {
            member: "Brandyn Taylor",
            role: "Saxophone"
        }, {
            member: "Shawna Pennock",
            role: "Saxophone"
        }, {
            member: "Tracy Woodard ",
            role: "Violin"
        }, {
            member: "Adelaide Federici",
            role: "Violin"
        }, {
            member: "Katie Taylor",
            role: "Viola"
        }, {
            member: "Sprite Crawford",
            role: "Viola"
        }, {
            member: "Justin Dougherty",
            role: "Cello"
        }, {
            member: "Gabriel Monticello",
            role: "Bass"
        }, {
            member: "Adam Bernstein",
            role: "Bass"
        }, {
            member: "Victor Pons",
            role: "Percussion"
        }, {
            member: "Brandon Dodge",
            role: "Percussion"
        }, {
            member: "Lauren Hayes",
            role: "Harp"
        }, {
            member: "Paul Scanling",
            role: "Conductor"
        }, {
            member: "Paul Bowman",
            role: "Guitar, Artist Affiliate"
        }, {
            member: "Stephanie Aston",
            role: "Soprano, Artist Affiliate"
        }, {
            member: "Ariana Warren",
            role: "Clarinet, Artist Affiliate"
        }, {
            member: "Amy O’Dell",
            role: "Piano, Artist Affiliate"
        },
    ];


    for (let i in cartel) {
        $('.lineupContainer').append(`<p><span class="cartelMember">${cartel[i].member}</span> / ${cartel[i].role}</p>`);
    }

    let bioImageArray = [1, 2, 3, 4, 5, 6, 7];
    let bioImageArrayEnd = bioImageArray.length + 1;
    // console.log(bioImageArrayEnd);

    let rotateBioImage = function() {
        for (let i = 1; i <= bioImageArrayEnd; i++) {
            (function(i) {
                setTimeout(function() {
                    if (i == bioImageArrayEnd - 1) {
                        rotateBioImage();
                    }
                    $('.image').css('background-image', 'url(../images/carouselimage' + i + '.jpg)');
                    // console.log(i);

                }, 3000 * i)

            })(i);
        }
    }

    for (let i = 1; i <= bioImageArrayEnd; i++) {
        (function(i) {
            setTimeout(function() {
                if (i == bioImageArrayEnd - 1) {
                    rotateBioImage();
                }
                $('.image').css('background-image', 'url(../images/carouselimage' + i + '.jpg)');
                // console.log(bioImageArrayEnd);
                // console.log(i);

            }, 3000 * i)

        })(i);
    }

    //MODAL

    //grabs the modal content window
    let getAlbumCoverModalContent = document.getElementsByClassName("albumCoverModalContent");

    //when each album cover is clicked display the modal window and set the image of the content window to the image that was clicked on
    $(".albumCoverImage").click(function() {
        //display the window
        $(".albumCoverModalWindow").css("display", "block");
        //set the content window to the respective image
        $(".albumCoverModal").css("background-image", "url('" + this.attributes[0].nodeValue + "')");
    })

    //when the close button is clicked in the modal hide the window
    $(".closeModal").click(function() {
        $(".albumCoverModalWindow").fadeOut("fast");

    })

    //also if the user clicks anywhere outside the image content window close the modal
    window.onclick = function(e) {
            if (e.target == getAlbumCoverModalContent[0]) {
                $(".albumCoverModalWindow").fadeOut("fast");

            }
        }
        //END MODAL

    //START
    // code snippet below handles the scroll event that triggers the fixed nav
    // when the landing section is scrolled past, it makes the fixed nav appear 
    //and highlights the links accordingly when certain sections are reached

    // get the landing section so its properties can be observed
    let getHero = document.getElementsByClassName("landing")[0];
    //grabs the height of the landing section in pixels so we can tell exactly when we scroll past it
    let getHeroHeight = getHero.offsetHeight;

    //event handler that triggers the fixed nav if the the offset height value is greater than the height of the landing section
    // otherwise it doesn't display it at all
    $(window).scroll(function() {
            //if the y offset is greater than the landing height, we have scrolled past it
            //if it isnt then we haven't and we wont't display the nav
            if (window.pageYOffset >= getHeroHeight) {
                $(".fixedNav").css("display", "block")
                $(".mobileNavIconContainer").css("display", "inline-block");
            } else {
                $(".fixedNav").fadeOut();
                $(".mobileNavIconContainer").fadeOut();
            }

            //grab the position (in pixels) of the browser scrollbar relative to the top so that we can tell which sections are scrolled past
            let position = $(this).scrollTop();

            //each section to be highlighted has an HTML class of 'section' and we use the each() function to iterate over them
            //and observe them respectively
            $(".section").each(function() {

                //targets each section and grabs its offset position from the top so we can tell when they are reached
                let target = $(this).offset().top;
                //get the HTML id value from each section because these are same values used in the href in the fixed nav
                //that will be highlighted when reached
                let getID = $(this).attr("id");
                // console.log($(this));

                //if the scrollbar position is greater than or equal to the repsective offset of each section then that particular section is 
                //reached and its respective internal link will be highlighted
                if (position >= (target - 120)) {

                    //remove the css class 'active' so that the links are highlighted respectively instead of consecutively
                    //you dont want a link to be highlighted then the next link is also highlighted when its section is reached
                    $("#fixedNavLinks > ul > li > a").removeClass("active");

                    //since the internal links point to sections in the document, you can use getID to add the class 'active' when there is a match
                    $('#fixedNavLinks > ul > li > a[href=\"#' + getID + '\"]').addClass('active');
                }
            })
        })
        //END

    $("body").addClass("load"); //FADES IN THE PAGE

    let getMobileNavContent = document.getElementsByClassName("mobileNavContent");
    //START MOBILE NAVIGATION CLICK EVENT ON LANDING SECTION
    //DISPLAYS OR HIDES THE NAVIGATION CONTENT BASED ON THE STATE OF THE ICON
    $('#nav-icon3').click(function() {
        //IF THE ICON IS CLICKED AND THE MODAL IS OPEN, THEN CLOSE THE MODAL
        if ($(this).data("clicked", true) && $(this).hasClass("open")) {
            $(".mobileNavContent").removeClass("displayMobileNavContent");
            $(".mobileNavContent").addClass("hideMobileNavContent");
        } else { //IF THE ICON IS CLICKED AND THE MODAL IS NOT OPEN, THEN OPEN THE MODAL
            $(".mobileNavContent").removeClass("hideMobileNavContent");
            $(".mobileNavContent").toggleClass("displayMobileNavContent");
        }
        $(this).toggleClass('open'); //WHENEVER ICON IS CLICKED TOGGLE THE CLASS THAT CHANGES ITS STATE
        $("body").toggleClass("modalOpen"); //IF THE MODAL IS OPEN, PREVENT SCROLLING. REFER TO CSS
        //IF ANY OF THE LINKS ARE CLICKED IN THE MODAL, CLOSE THE MODAL
        $(".mobileNavContent > ul > li > a").click(function() {
            $(".mobileNavContent").toggleClass("displayMobileNavContent");
            $("#nav-icon3").toggleClass('open');
            $("body").toggleClass("modalOpen");

        });
        //IF THE MODAL ITSELF IS CLICKED, CLOSE THE MODAL. INCREASES UX BECAUSE IT MEETS USER EXPECTATION
        $(".displayMobileNavContent").click(function() {
            if ($("#nav-icon3").hasClass("open")) {
                $(".mobileNavContent").removeClass("displayMobileNavContent");
                $(".mobileNavContent").addClass("hideMobileNavContent");
                $("#nav-icon3").removeClass('open');
                $("body").toggleClass("modalOpen");

            }

        });
    }); //END MOBILE NAVIGATION CLICK EVENT ON LANDING SECTION
    $(".mobileNavIcon").click(function() {
        if ($(this).data("clicked", true) && $(this).hasClass("closeIcon")) {
            $(".mobileNavContent").removeClass("displayMobileNavContent");
            $("#mobileNavContent > ul > li > a").removeClass("mobileNavContentActiveItem");
            $(".mobileNavContent").addClass("hideMobileNavContent");
        } else {
            $(".mobileNavContent").removeClass("hideMobileNavContent");
            $(".mobileNavContent").toggleClass("displayMobileNavContent");
            let position = $(this).offset().top;
            $(".section").each(function() {

                let target = $(this).offset().top;

                let getID = $(this).attr("id");

                if (position >= (target - 120)) {
                    $("#mobileNavContent > ul > li > a").removeClass("mobileNavContentActiveItem");
                    $('#mobileNavContent > ul > li > a[href=\"#' + getID + '\"]').addClass('mobileNavContentActiveItem');

                }
            })
        }
        $(".mobileNavIcon").toggleClass("closeIcon");
        $("body").toggleClass("modalOpen");
        $(".displayMobileNavContent").click(function() {
            if ($(".mobileNavIcon").hasClass("closeIcon")) {
                $(".mobileNavContent").removeClass("displayMobileNavContent");
                $(".mobileNavContent").addClass("hideMobileNavContent");
                $(".mobileNavIcon").removeClass('closeIcon');
                $("body").toggleClass("modalOpen");

            }

        });


    });

    //ENABLES SMOOTH SCROLLING
    //A CROSS BROWSER SOLUTION TO PLAIN CSS
    $("a").click(function(e) {
            //BUT WE DONT WANT BOOTSTRAP CAROUSEL TO SMOOTHE SCROLL
            if (this.hash !== "" && $(this).hasClass("carousel-control-next") == false && $(this).hasClass("carousel-control-prev") == false) {
                e.preventDefault();
                //STORE HASH VALUE WHICH HAS INFO ABOUT LOCATION
                let hash = this.hash;
                //USE ANIMATE FUNCTION TO SCROLL TO ELEMENT BASED ON ITS LOCATION RELATIVE TO THE TOP OF THE WINDOW
                $("html, body").animate({
                    scrollTop: $(hash).offset().top
                }, 800, function() {
                    //STORE HASH ONCE MORE SO ITS THE CURRENT LOCATION
                    window.location.hash = hash;
                })
            }
        })
        //BACK TO TOP BUTTON BOTTOM OF THE PAGE
        //ONCE CLICKED IT SETS THE SCROLL TOP VALUE TO 0 WHICH MOVES SITE TO THE TOP OF THE PAGE
    $(".backToTop").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

})