"user strict";

$(document).ready(function () {
	//menu header bar
	$(".header-bar, .header-bartwo").on("click", function (e) {
		$(".main-menu, .header-bar, .header-bartwo").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		$(".main-menu, .header-bar").removeClass("active");
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar

	//owl carousel
	$(".match__fixing__wrap").owlCarousel({
		loop: true,
		margin: 9,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1243: {
				items: 3,
			},
			1399: {
				items: 4,
			},
		},
	});
	//Sponsor Carousel
	$(".footer__sponsor").owlCarousel({
		loop: true,
		margin: 9,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 2,
			},
			400: {
				items: 3,
			},
			600: {
				items: 4,
			},
			767: {
				items: 5,
			},
			991: {
				items: 4,
			},
			1199: {
				items: 5,
			},
			1243: {
				items: 6,
			},
			1799: {
				items: 9,
			},
		},
	});
	//owl carousel
	$(".horse__slide__wrap").owlCarousel({
		loop: true,
		margin: 24,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: false,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fa-solid fa-angle-left"></i>',
			'<i class="fa-solid fa-angle-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 2,
			},
			1243: {
				items: 3,
			},
			1399: {
				items: 4,
			},
		},
	})
	
	//Deposit complate
	    // Number Active
	var qvalue = $(".quick-value h5");
	$(qvalue).on('click', function (e) {
		$(qvalue).removeClass('active');
		$(this).addClass('active');
		let cval = $(this).html();
		$("#dAmount, #amount").val('$'+cval+'.00');
	});
	//Deposit complate

	//Date Picker
	$(".datepicker").datepicker();
	//Date Picker

	//Magnifiq pupup
	$('.picture-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	$('.play-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
			}
	});
	//Magnifiq pupup

	//Serach Popup
	$('#search').click(function() {
		$('.search-form').animate({right: 0}, 50);
		$('.search-popup').show();
		$('.search-bg').click(function() {
		  $('.search-popup').hide();
		  $('.search-form').animate({right: '-100%'}, 50);
		});
	  });
	//Serach Popup

	// Custom Dropdown
	let customDropdown = $('[data-set="custom-dropdown"]');
	let dropdownContent = $(".custom-dropdown__content");
	if (customDropdown || dropdownContent) {
		customDropdown.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
			$("body").toggleClass("custom-dropdown-open");
			dropdownContent.toggleClass("is-open");
		});
		});
		dropdownContent.each(function () {
		$(this).on("click", function (e) {
			e.stopPropagation();
		});
		});
		$(document).on("click", function () {
		$("body").removeClass("custom-dropdown-open");
		dropdownContent.removeClass("is-open");
		});
	}
	// Custom Dropdown End

	//porfile
	// const input = document.createElement('input');
	// 	input.type = 'file';
	// 	input.accept = 'image/*';
	// 	input.onchange = function () {
	// 	const reader = new FileReader();
	// 	reader.onload = function () {
	// 		document.getElementById('profile-picture').src = reader.result;
	// 	};
	// 	reader.readAsDataURL(input.files[0]);
	// 	};

	// 	document.getElementById('profile-picture').onclick = function () {
	// 	input.click();
	// };
	//porfile

	//Button Click
	// 	function handleClick(event) {
	// 	if (event.target.tagName !== "BUTTON") {
	// 	  return;
	// 	}
	// 	let buttonValue = event.target.innerText;
	// 	document
	// 	  .querySelector(".result")
	// 	  .innerText = buttonValue;
	//   }
	//   document
	// 	.querySelector(".buttons")
	// 	.addEventListener("click", handleClick);
	//Button Click
	
	// password hide
	$(".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5, .toggle-password6, .toggle-password7, .toggle-password8, .toggle-password9, .toggle-password10").click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
		var input = $($(this).attr("id"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});



	// wow animation
	new WOW().init();
	// wow animation

	//preloader
	setTimeout(function(){
		$('.bg-load').fadeToggle();
	}, 1500);
	//preloader

	//--Nice Select--//
	$('select').niceSelect();
	
	const sportsList = {
        1: {
            name: 'Soccer',
            icon : 'football'
        },
        18: {
            name: 'Basketball',
            icon : 'basketball'
        },
        13: {
            name: 'Tennis',
            icon : 'tennis'
        },
        91: {
            name: 'Volleyball',
            icon : 'volly'
        },
        78: {
            name: 'Handball',
            icon : 'handball'
        },
        16: {
            name: 'Baseball',
            icon : 'baseball'
        },
        2: {
            name: 'Horse Racing',
            icon : 'horse'
        },
        4: {
            name: 'Greyhounds',
            icon : 'greyhound',
            png: true,
        },
        17: {
            name: 'Ice Hockey',
            icon : 'icehockey'
        },
        14: {
            name: 'Snooker',
            icon : 'snooker',
            png: true,
        },
        12: {
            name: 'American Football',
            icon : 'afootball'
        },
        3: {
            name: 'Cricket',
            icon : 'cricket'
        },
        83: {
            name: 'Futsal',
            icon : 'futsal',
            png:true,
        },
        15: {
            name: 'Darts',
            icon : 'darts'
        },
        92: {
            name: 'Table Tennis',
            icon : 'ttennis'
        },
        94: {
            name: 'Badminton',
            icon : 'badminton',
            png:true,
        },
        8: {
            name: 'Rugby Union',
            icon : 'rugby',
            png:true,
        },
        19: {
            name: 'Rugby League',
            icon : 'rugby',
            png:true,
        },
        36: {
            name: 'Australian Rules',
            icon : 'rules',
            png:true,
        },
        66: {
            name: 'Bowls',
            icon : 'bowls',
            png:true,
        },
        9: {
            name: 'Boxing',
            icon : 'boxing',
            png:true,
        },
        75: {
            name: 'Gaelic Sports',
            icon : 'gsport',
            png:true,
        },
        90: {
            name: 'Floorball',
            icon : 'floorball',
            png:true,
        },
        95: {
            name: 'Beach Volleyball',
            icon : 'bvolleyball',
            png:true,
        },
        110: {
            name: 'Water Polo',
            icon : 'polo',
            png:true,
        },
        107: {
            name: 'Squash',
            icon : 'squash',
            png:true,
        },
        151: {
            name: 'E-sports',
            icon : 'esport',
            png:true,
        },
        162: {
            name: 'MMA',
            icon : 'mma',
            png:true,
        },
        148: {
            name: 'Surfing',
            icon : 'surfing',
            png:true,
        },
    }

    function fillLiveAccordion() {
        const keys = Object.keys(sportsList);
        for(let i = 0; i < keys.length; i++) {
            const name = sportsList[keys[i]].name;
            const icon = sportsList[keys[i]].icon;
            const png = sportsList[keys[i]].png;
            let elem = `<i class="icon-${icon}"></i>`;
            if(png == true) {
                elem = `<img src="/assets/img/sports/${icon}.png" width='20' style="filter:invert(1) brightness(0.6) !important;">`;
            }

            $("#accordion_live").append(`<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne${i}">
    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="false" aria-controls="collapseOne${i}">
      <span class="d-flex align-items-center gap-2 left-chokoboko">
        <span class="mt-1">${elem}</span>
        <span class="score text-white">
        ${name}
        </span>
      </span>
      <span class="d-flex align-items-center gap-1 icon-rightfs10">
        111
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </button>
  </h2>
  <div id="collapseOne${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion_live">
    <div class="accordion-body">
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Premier League 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            La Liga 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Serie A 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Bundesliga 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Ligue 1
          </span>
          <span>
            0
          </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            All other leagues
          </span>
          <span>
            0
          </span>
      </div>
    </div>
  </div>
</div>`);
        }        
    }

    function fillPrematchAccordion() {
        const keys = Object.keys(sportsList);
        for(let i = 0; i < keys.length; i++) {
            const name = sportsList[keys[i]].name;
            const icon = sportsList[keys[i]].icon;
            const png = sportsList[keys[i]].png;
            let elem = `<i class="icon-${icon}"></i>`;
            if(png == true) {
                elem = `<img src="/assets/img/sports/${icon}.png" width='20' style="filter:invert(1) brightness(0.6) !important;">`;
            }
    
            $("#accordion_prematch").append(`<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne${i}">
    <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne${i}" aria-expanded="false" aria-controls="collapseOne${i}">
      <span class="d-flex align-items-center gap-2 left-chokoboko">
        <span class="mt-1">${elem}</span>
        <span class="score text-white">
        ${name}
        </span>
      </span>
      <span class="d-flex align-items-center gap-1 icon-rightfs10">
        111
        <i class="fa-solid fa-chevron-down"></i>
      </span>
    </button>
  </h2>
  <div id="collapseOne${i}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion_live">
    <div class="accordion-body">
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Premier League 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            La Liga 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Serie A 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Bundesliga 
          </span>
          <span>
            0
        </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            Ligue 1
          </span>
          <span>
            0
          </span>
      </div>
      <div class="d-flex fs14 b__bottom pb-2 align-items-center justify-content-between text-white">
          <span>
            All other leagues
          </span>
          <span>
            0
          </span>
      </div>
    </div>
  </div>
</div>`);
        }     
    }
    
    fillLiveAccordion();
    fillPrematchAccordion();    

    sportsSocket.send(JSON.stringify({type:'home'}));

});


