$(function() {
		
	window.ismobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
	
	$("#change_email, #new_pssword, #pssword_check").focus(function() {
		$(this).parents(".section").addClass("focus");
	}).blur(function() {
		$(this).parents(".section").removeClass("focus");
	});
	
	 $(".delete-account-confirmation").button();
	
	$(".container.container-profile-page  .content-profile-onpage-settings .profile-body-left ul li a").click(function() {
		var href = $(this).attr("href");
		$(".container.container-profile-page  .content-profile-onpage-settings .panel-content, .container.container-profile-page  .content-profile-onpage-settings .profile-body-left ul li a").removeClass("active");
		$(this).addClass("active");
		$(href).addClass("active");
		return false;
	});
	
	$(".past-press-appearances-section .more").click(function() {
		$(".past-press-appearances-section .press-releases").toggleClass("show-all");
	});
	
	$(".select-field-autocomplete-text-field, #school.school_select").each(function() {
		if($.trim($(this).val()) !== "") {
			$(this).parent().find(".college-img").addClass("state-focus");
		}
		
		$(this).on("focus", function() { // pankaj@happyfuncorp.com #65
				$(this).parent().find(".college-img").addClass("state-focus"); // pankaj@happyfuncorp.com #65
			} ).on("blur", function(){ // pankaj@happyfuncorp.com #65
				if($.trim($(this).val()) === "") {
					$(this).parent().find(".college-img").removeClass("state-focus"); // pankaj@happyfuncorp.com #65
				}
			}).on("click", function() { $(this).toggleClass("autocomplete-open") }); // pankaj@happyfuncorp.com #65
	})
	
	
	function scrolltop() {
	if($(".header-dd").height() > 0) {
		// window.scrollTo(0,0);
		$(document).scrollTop(0);
		$(".header").addClass("scrolling-begins");
		console.log("scrolltotop");
	}
}
	setTimeout(function(){scrolltop();}, 100);
	$(document).scroll(function() {
		var offset = $(".main-menu").offset().top - $(window).scrollTop();
		if(offset <= 90 && !(offset < 0 && !$(".header").hasClass("scrolling-begins"))) {
			$(".header").addClass("stick-to-top");
			if($(window).width() > 640){
				//$(".close_logs").slideUp();
			}
		}
	})
	
	
  //$('select').not('#subscriptions').zfselect();
  //$('select#school,select#tag').zfselect('init', {width:330,overflowHidden:false});
  $('.checkbox').ezMark();
  
  setTimeout(function() {
      $('.content .posts-list li').equalBlocksHeight({limit: 4});
      $('.section .posts-list li, .authors-list .posts-list li').equalBlocksHeight();
  }, 2000);
  
  $('#region').change(function() {
      if ($(this).val() == 'international') {
          $('#zf-select-region').addClass('zf-sel-int');
      }
      else {
          $('#zf-select-region').removeClass('zf-sel-int');
      }
  });

  if ($('#region').val() == 'international') {
      $('#zf-select-region').addClass('zf-sel-int');
  };

  // Explore View Callout Toolbar logic
	$(window).scroll($.debounce( 250, true, function(){
		$('.explore-view').css({
			'color' : '#FF0200',
			'background-position' : '100% -541px'
		});
		$('.list-view').css({
			'color' : '#FF0200',
			'background-position' : '100% -1329px'
		});
	}));

	$(window).scroll($.debounce( 250, function(){
		$('.explore-view').css({
			'color' : '#A2A2A2',
			'background-position' : '100% -565px'
		});
		$('.list-view').css({
			'color' : '#A2A2A2',
			'background-position' : '100% -1269px'
		});
	}));
	

  // Macy's StyleLab Campaign: Link href replacement
  $('.macys-stylelab-ctracker').attr('href', 'http://r1.fmpub.net/?r=http%3A%2F%2Fad.doubleclick.net%2Fclk%3B278137675%3B105381536%3Bn&k4=7125&k5={banner_id}');
  
  $('.overlay_ad').click(function(){
	  console.log('c');
  	$(this).hide();
	$.ajax({
        url: ajaxurl,
        data: {'action':'keep_ad_hidden', 'do':'yes'},
        success:function(data) {
          //  console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });
  })
  
   //$('.responsive-container').css({'width':$(window).width()});
  
  //check widow width to change height of pages
  var org_ccc = $('.carousel-container').css('padding-top');
  $(window).resize(function() {
		if($(window).width() <= 720){
			$('.carousel-container').css({'padding-top': '0'})
		}
		if($(window).width() > 720){
			$('.carousel-container').css({'padding-top': org_ccc})
			$('.responsive-topmenu').css({'display':'none'});
		}
   });
   
   if($(window).width() <= 720){
		$('.carousel-container').css({'padding-top': '0'})
	}
  
  // SHANNON EDIT
  $("#reg-fname, #reg-uname, #reg_pass, #recaptcha_response_field").keyup(function(){
	if($('#reg_email').is(':visible')){
	  if($.trim($('#reg-fname').val()) != '' && $.trim($('#reg-uname').val()) != '' && $.trim($('#reg-email').val()) != '' && $.trim($('#recaptcha_response_field').val()) != ''){
			$('#register-go').addClass('reg-live');
		}else{
			$('#register-go').removeClass('reg-live');
		}
	}else{
		if($.trim($('#reg-fname').val()) != '' && $.trim($('#reg-uname').val()) != '' && $.trim($('#recaptcha_response_field').val()) != ''){
			$('#register-go').addClass('reg-live');
		}else{
			$('#register-go').removeClass('reg-live');
		}
	  }
	  
	  $('.responsive-container').css({'width':$(window).width()});
  })
  /////////////////////////////////
  
  //subscribe to newsletter capture and move to register
  $('#newsletteremail-go').click(function(e){
  	//email capture and sent to mailchimp
	e.preventDefault();
	e.stopPropagation();
	$('#sub-dd').slideUp();
	$('#reg-dd').slideDown();
	$('.sub-dd').removeClass('log-underline');
	$('.reg-dd').addClass('log-underline');
	var e = $('.newsletteremail').val();
	$('#reg_email').val(e);
	setTimeout(function(){$('.newsletter_added').slideUp();},8000); //SHANNON EDIT
	$.ajax({
        url: ajaxurl,
        data: {'action':'newsletter_added', 'email':e},
        success:function(data) {
           // This outputs the result of the ajax request
          //  console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });
	 
  })
  
  //toggle responsive top menu
  var toopen = 1;
  $('.responsive-menu-click').click(function(){
	if(toopen == 1){
		if($(window).width() <= 720 && $(window).width() > 640){
			open_rmenu(500);
		}else if($(window).width() <= 640){
			open_rmenu(425);
		}
	}else{
		close_rmenu();
	}
	
 })
 
 function close_rmenu(){
 	$('.responsive-container').animate({
		width: 'auto',
		marginLeft: '0',
	  }, 500, function() {
		$('.responsive-container').css({'overflow': 'visible','width':'100%'});
		//$('.responsive-container').css({'overflow': 'visible', 'width':'auto'});
		$('.wrapper').css({'width':'auto'});
	});
	$('.responsive-topmenu').animate({
			width: '0px'
		  }, 500, function() {
			$('.responsive-topmenu').hide();
			toopen = 1;
			console.log(toopen);
	});
	
	
 }
 
 function open_rmenu(panel_width){
	 var $window = $(window).width();
	 var $menu_width = 200;
	 var panel_width = $window - $menu_width;
	 $('.responsive-container').animate({
		width: panel_width+'px',
		marginLeft: $menu_width+'px',
	  }, 500, function() {
		  $('.responsive-container').css('overflow','hidden');
		// Animation complete.
	});
	
	$('.responsive-topmenu').animate({
			width: $menu_width+'px'
		  }, 500, function() {
			toopen = 0;
			console.log(toopen);
	});
	$('.responsive-topmenu').css({'display':'block'});
	$('.reg-dd-left').css({'width':'700px'});
 }
  
  //main menu rollovers
  var main_menu = $('.main-menu-container');
  var main = $('.main-menu');
  var right_main_menu = $('.secondary-dd');
  // get height for columns since they are an infinite amount
  var columnamt = $('.columns-link').length;
  var rowheight = 40;
  var advcol = 50;
  var rowamnt = columnamt/3;
  var c_height = (Math.ceil(rowamnt)*rowheight) + advcol;
  
  var f_height = 265;
  var t_height = 265;
  var m_height = 250;
  var b_height = 250;
  var ser_height = 240; // pankaj@happyfuncorp.com #74 SHANNON change from 200, missing trend list at bottom
  var soc_height = 130;
  var m_original = 0;
  
  // SHANNON EDIT
  $('.below-header-container').mouseenter(function(){
  		$('.top-menu-button-name').stop(true, true).slideDown(); // #207 pankaj@happyfuncorp.com

  }).mouseleave(function(){
	  $('.top-menu-button-name').stop(true, true).slideUp(); // #207 pankaj@happyfuncorp.com
  })

  ///////////////////////
  
  function clear_mainmenu(nowing){
	$('.search-dd-region-hidden').slideUp();
  	$('.top-menu-button').each(function(){
		$(this).removeClass('top-menu-showing');
	})
	if(!$('.top-searchsocial').is(':visible')){
		nowing.addClass('top-menu-showing');
	
		$('.rollover-secondary-info').each(function(){
			$(this).hide()
		})
		$('.rollover-secondary-info-right').each(function(){
			$(this).hide()
		})
		main_menu.stop(true).animate({height:m_original},200);
		
		right_main_menu.stop(true).animate({height:m_original},200);
	}
  }
  
  function close_logs(open_this){
  	var same = false;
		$('.close_logs').each(function(){
			if($(this).attr("id") == open_this && !($("#"+open_this).height() == 0 || $("#"+open_this).is(":hidden") ) ) {
				same = true;
				console.log("same");
			}
			$(this).slideUp('fast');
		})
	$('.move_underline').each(function(){
		$(this).removeClass('log-underline');
	})
	if(!same) {
		$('#'+open_this).slideDown();
		/*if($('#'+open_this).find('.college-logo').length > 0){
			$('#'+open_this).find('.college-logo').hide();
		}*/
		console.log("not same");
	}
	$('.'+open_this).addClass('log-underline');
	if($('.above_top_menu_ad').length > 0){
		//control the way margins act when there is a top ad
		var abtmam = $('.above_top_menu_ad').css('margin-top');
		$('.header-dd').css({'margin-top': abtmam});
		$('.main-menu').css({'margin-top': 0});
	}
  }
  
  $('.rtm-log').click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  close_logs('log-dd');
	  close_rmenu();
  })
  
  $('.rtm-reg').click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  close_logs('reg-dd');
	  close_rmenu()
  })
  
  
  // SHANNON EDIT
  $('.signinnow').click(function(e){
  	 e.preventDefault();
	 e.stopPropagation();
	 close_logs('log-dd');
  })
  
  $(".sub-dd").unbind("click").click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  if($('#sub-dd').is(':visible')){
		  $('#sub-dd').slideUp();
		  $('.sub-dd').removeClass('log-underline');
		  $('.college-search').fadeIn();
		  $('.top-logo').fadeIn();
		  
	  }else{
		  close_logs('sub-dd');
		  $('.college-search').fadeOut();
		  $('.top-logo').fadeOut();
	  }
  })
  $(".reg-dd").click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  if(!$('.college-search').is(':visible')){
	  	 $('.college-search').fadeIn();
		 $('.top-logo').fadeIn();
		 // $('.header-dd').css('height', '900');
		 
	  }
	  if($('#reg-dd').is(':visible')){
		  $('#reg-dd').slideUp();
		  $('.reg-dd').removeClass('log-underline');
		  $('.wrapper').css('position', 'relative'); 
		//  $('.header-dd').css('height', '900');
	  }else{
		  close_logs('reg-dd');
		  //$('.header-dd').css('height', '900');
		   $('.wrapper').css('position', 'fixed'); 
	  }

	   var _winH = $(window).height(); 
	   alert(_winH);
	  $('.header-dd').css({height : _winH});
  }) 
  $(".log-dd").click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  if(!$('.college-search').is(':visible')){
	  	 $('.college-search').fadeIn();
		 $('.top-logo').fadeIn();
	  }
	  if($('#log-dd').is(':visible')){
		  $('#log-dd').slideUp();
		  $('.log-dd').removeClass('log-underline');
	  }else{
		  close_logs('log-dd');
	  }
  })
  ////////////////////////////////////////////////////
  
  $('.forgot_pass, .log-error').click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  close_logs('passforget-dd');
  })
  
  $('.forgot_user').click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  close_logs('userforget-dd');
  })
  
  $('.reg-dd-close').click(function(e){
	  $(".reg-dd").removeClass('log-underline');
	  $("#reg-dd").slideUp();
	   $('.wrapper').css('position', 'relative'); 
	  $.ajax({
        url: ajaxurl,
        data: {'action':'dissmiss_subscribe'},
        success:function(data) {
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });
  })
  
  $('.log-dd-close').click(function(e){
	  $("#log-dd").slideUp();
  })
  
  $('#school-go').click(function(e){
	 var s = $('#school-mid option:selected').val();
	 var col = $('#school-mid option:selected').text();
	 var c = col.split("(");
	 var n = $.trim(c[0]);
	  e.preventDefault();
	  e.stopPropagation();
	  $.ajax({
        url: ajaxurl,
        data: {'action':'choose_school', 'school': s, 'name':n},
        success:function(data) {
            // This outputs the result of the ajax request
			//SHANNON EDIT
			$('#newletter-signup').slideDown();
			$('.select_school_newbie').slideUp();
          //  console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });

  })
  
  $('#passforget_submit').click(function(e){
	 var s = $('#passforget').val();
	 $('.passforgot-success').slideUp();
	  e.preventDefault();
	  e.stopPropagation();
		$.post( siteurl+"/wp-login.php",  { action: "lostpassword", user_login: s }, function() {
		})
	  .done(function(data) {
		$('#passforget').val('');
		if($(data).find('#login_error').length > 0){
			$('.passforgot-success').html($(data).find('#login_error').text());
			$('.passforgot-success').addClass('error');
			$('.passforgot-success').removeClass('success');
		}else{
			$('.passforgot-success').text($(data).find('.message').text());
			$('.passforgot-success').addClass('success');
			$('.passforgot-success').removeClass('error');
			$('#passforget').val('');
		}
		$('.passforgot-success').slideDown();
	  })
	  .fail(function() {
		$('.passforgot-success').addClass('error');
		$('.passforgot-success').removeClass('success');
		$('.passforgot-success').html('There was an error getting retrieving your password. Please contact College Fashionista!');
		$('.passforgot-success').slideDown();
	  })
  })
  
  $('#userforget_submit').click(function(e){
	  //there is no forgot username in wordpress since you can signin with email or username, so created manually
	 var s = $('#userforget').val();
	 $('.userforgot-success').slideUp();
	  e.preventDefault();
	  e.stopPropagation();
	  
	  if($.trim(s) == ''){
		  $('.userforgot-success').addClass('error');
		  $('.passforgot-success').removeClass('success');
		  $('.userforgot-success').text('Please enter and email address.');
		  $('.userforgot-success').slideDown();
	  }else{
		  $.ajax({
			url: ajaxurl,
			data: {'action':'forgot_username', 'email': s},
			success:function(data) {
				 if($.trim(data) != '' && data != 0){
					 $('.userforgot-success').removeClass('success');
					 $('.userforgot-success').addClass('error');
					 $('.userforgot-success').text(data);
					 $('.userforgot-success').slideDown();
				 }else{
					 $('.userforgot-success').removeClass('error');
					 $('.userforgot-success').addClass('success');
					 $('.userforgot-success').text('Your username has been sent to the email account you entered!');
					 $('.userforgot-success').slideDown();
				 }
			},
			error: function(errorThrown){
			  $('.userforgot-success').removeClass('success');
			  $('.userforgot-success').addClass('error');
			  $('.userforgot-success').text('There was an error retrieving your username. Please contact College Fashionista!');
			  $('.userforgot-success').slideDown();
			}
		 });
	  }
		
  })
  
  $('.close-sub').click(function(e){
	  e.preventDefault();
	  e.stopPropagation();
	  $('.top-logo').fadeIn();
	  $('.sub-dd').removeClass('log-underline');
	  if($(window).width() > 640){
	  	$('.college-search').fadeIn();
	  }
	  $('#sub-dd').slideUp();
	  $.ajax({
        url: ajaxurl,
        data: {'action':'dissmiss_subscribe'},
        success:function(data) {
            // This outputs the result of the ajax request
            console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
    });

  })


  
  $('.columns').mouseover(function(){
	clear_mainmenu($(this));
  	main_menu.stop(true).animate({height:c_height},200);
	$('#columns').animate({height : c_height})
				 .show(); 
  })
  
  $('.trending').mouseover(function(){
	clear_mainmenu($(this));
	main_menu.stop(true).animate({height:t_height},200);
	$('#trending').animate({height : t_height})
				  .show(); 
  })
  
  $('.features').mouseover(function(){
	clear_mainmenu($(this));
	main_menu.stop(true).animate({height:f_height},200);
	$('#features').animate({height : f_height})
				  .show(); 
  })
  
  $('.beyond').mouseover(function(){
	clear_mainmenu($(this));
	main_menu.stop(true).animate({height:b_height},200);
	$('#beyond').animate({height : b_height})
				.show(); 
	
  })
  
  $('.rollover-secondary-info').mouseleave(function(){
	if($(window).width() > 640){
		$('.top-menu-button').each(function(){
			$(this).removeClass('top-menu-showing');
		})
		//$('.rollover-secondary-info').slideUp('fast');
		main_menu.stop(true).animate({height:m_original},200);
	}
  })
  
  $('.search-wholesite').mouseover(function(){
	clear_mainmenu($(this));
	if(is_search == 0){
		right_main_menu.stop(true).animate({height:ser_height},300);
		$('.search-dd-region-hidden').hide();
		$('.search-dd-region .arrow').removeClass('rotate');
		//$('.search-dd').stop(true).slideDown('fast');
		//$('.search-dd-trending').slideDown('fast');
		$('.search-dd').show().aniamate({height: ser_height});
		$('.search-dd-trending').show().aniamate({height: ser_height});
	}
  })
  
  $('.search-wholesite').click(function(){
  	if(is_search == 1){
		$('.secondary-dd-searchedwords').slideToggle();
	}
  })
  
  $('.mobile-search').click(function(){
	 if($('.mobile-search img').eq(0).is(':visible')){
		$('.secondary-dd').slideDown();
		$('.search-dd').slideUp();
		$('.secondary-dd-searchedwords').slideUp();
		$('.mobile-search img').eq(0).hide();
		$('.mobile-search img').eq(1).show();
		$('.mobile-social img').eq(0).show();
		$('.mobile-social img').eq(1).hide();
		if($(window).width() <= 640){
			$('.article-sm-info-small').hide();
		}
	}else{
		$('.secondary-dd').slideUp();
		$('.mobile-search img').eq(1).hide();
		$('.mobile-search img').eq(0).show();
		if($(window).width() <= 640){
			$('.article-sm-info-small').show();
		}
	}
		  
	if(!$('.search-dd').is(':visible')){
		clear_mainmenu($(this));
		right_main_menu.stop(true).animate({height:250},300, function(){right_main_menu.css({'overflow':'visible','height':'auto'});});
		$('.search-dd-trending').slideDown('fast');
		$('.search-dd').stop(true).slideDown('fast');
		$('.social-dd').stop(true).slideUp('fast');
		$('.secondary-dd').slideDown();
	 }else{
		 $('.search-dd').stop(true).slideUp('fast');
		 $('.search-dd-trending').slideUp('fast');
	 }
	/*if($('.mobile-search img').eq(0).is(':visible')){
		$('.mobile-search img').eq(0).hide();
		$('.mobile-search img').eq(1).show();
		$('.mobile-social img').eq(0).show();
		$('.mobile-social img').eq(1).hide();
		$('.social-dd').slideUp();
		$('.search-dd').slideDown();
		$('.secondary-dd').slideDown();
	}else{
		$('.secondary-dd-searchedwords').slideUp();
		$('.mobile-search img').eq(1).hide();
		$('.mobile-search img').eq(0).show();
		$('.secondary-dd').slideUp();
	}*/
	
  })
  
  $('.mobile-social').click(function(){
	if($('.mobile-social img').eq(0).is(':visible')){
		$('.secondary-dd').slideDown();
		$('.search-dd').slideUp();
		$('.secondary-dd-searchedwords').slideUp();
		$('.mobile-social img').eq(0).hide();
		$('.mobile-social img').eq(1).show();
		$('.mobile-search img').eq(1).hide();
		$('.mobile-search img').eq(0).show();
		var ow;
		$('.social-dd-icon').each(function(){
			ow = ow + parseInt($(this).width());
		})
		
		$('.dotted-border-black').each(function(){
			ow = ow + parseInt($(this).width());
		})
		
		var width = $(window).width();
		
		var leftMargin = (width-ow)/2;    
		 $('.social-dd-social').css("marginLeft", leftMargin);
		 console.log(width+' '+ow);
	}else{
		$('.secondary-dd').slideUp();
		$('.mobile-social img').eq(1).hide();
		$('.mobile-social img').eq(0).show();
	}
		  
	if(!$('.social-dd').is(':visible')){
		clear_mainmenu($(this));
		right_main_menu.stop(true).animate({height:soc_height},300);
		$('.search-dd-trending').slideUp('fast');
		$('.social-dd').stop(true).slideDown('fast');
	 }else{
		 $('.social-dd').stop(true).slideUp('fast');
	 }
  })
  
  /******* SCHOOL AUTOFILL *******/
  
  $('.school_select, .select-field-autocomplete-text-field').click(function(){
  	$(this).next('.school_terms').stop(true).slideToggle();
		$(this).parent().find(".college-img").addClass("state-focus");
	//for whatever reason sometimes overflow is set to hidden instead of overflow-y:scroll
	$(this).next('.school_terms').css({'overflow-y':'scroll'})
	if($(this).next('.school_terms').length < 1){
		holder = $(this).parents('.responsive-topmenu').next('.school_terms');
	}else{
		holder = $(this).next('.school_terms');
	}
	
	holder.show();
  });
  
  $('.school_terms, .search_terms').mouseleave(function(){
  	$(this).stop(true).slideUp();
		$(this).parent().find(".autocomplete-open").removeClass("autocomplete-open");
  })
  
  //search dropdown based on letters
  $(".school_select").keyup(function(){
				// Retrieve the input field text and reset the count to zero
        var filter = $(this).val(), count = 0, holder, schools;
 		
		if($(this).next('.school_terms').length < 1){
			holder = $(this).parents('.responsive-topmenu').next('.school_terms');
			schools = $(this).parents('.responsive-topmenu').next('.school_terms').children('.school_term');
		}else{
			holder = $(this).next('.school_terms');
			schools = $(this).next('.school_terms').children('.school_term');
		}
		
		holder.show();
		$(this).addClass('autocomplete-open');
		
		holder.css({'height':'auto'});
		
        // Loop through school list
        schools.each(function(){
 
            // If the list item does not contain the text phrase hide
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            	$(this).hide();
            } else {
                $(this).show();
				if($(this).text() != filter){
					if($('#searchsubmit').hasClass('search-live')){
						$('#searchsubmit').removeClass('search-live');
						cansend = 0;
					}
				}
                count++;
            }			
        });
		
		if(count == 0){
			holder.append('<div class="school_term no_click">No schools found</div>');
			if($('#searchsubmit').hasClass('search-live')){
				$('#searchsubmit').removeClass('search-live');
				cansend = 0;
			}
		}else{
			if(holder.children('.no_click').length > 0){
				holder.children('.no_click').remove();
			}
		}
		
		if(filter == ''){
			if($('#searchsubmit').hasClass('search-live')){
				$('#searchsubmit').removeClass('search-live');
				cansend = 0;
			}
			if(holder.children('.no_click').length > 0){
				holder.children('.no_click').remove();
			}
			schools.each(function(){
				$(this).show();
			});
		}
		
	});

	$('.school_term').click(function(){
		if($(this).attr('data-link')){
			window.location = $(this).data('link');
		}else if($(this).attr('data-slug')){
			if($(this).parent().prev().attr('id') == 'school-newbie-text-field'){
				$('#school-newbie-text-field').val($(this).text())
			}else{
				cansend = 1;
				$('#search-dd-school-hidden').val($(this).data('slug'));
				$('#search-dd-school').val($(this).text())
				$(this).parent().slideUp();
				$('#searchsubmit').addClass('search-live');
			}
		}else if($(this).attr('data-meta')){
			$('#school_id').val($(this).data('meta'))
			$('#school_profile').val($(this).text())
		}
		$(this).parent().slideUp()
	})
  
  ////////////////////////////////////////////////////////////////////////
  
  /****** SEARCH ******/
  
  var cansend = 0;
  
  function collapse_main(){
  	$('.carousel-container').slideUp();
	$('.container').slideUp();
	$('.search-dd-trending').slideUp();
	$('.secondary-dd').slideUp();
  }
  
  function clear_search(){
	  $('.secondary-dd').slideDown();
	$('.secondary-dd').animate({height:270},300);
	$('.search-dd').slideDown();
  	$('.carousel-container').slideDown();
	$('.container').slideDown();
	$('.search-container').slideUp();
	$('.search-container').html('');
	$('.searched-words').html('');
	$('.search-wholesite img').attr('src', templateDir+'/images/search-white.png');
	$('.secondary-dd-searchedwords').slideUp();
	$('html, body').animate({ scrollTop: 0 }, 'slow');
	$('#term').val('');
	$('.add_tag').each(function(){
		var cur_word_text = $(this).val();
		var slug = cur_word_text.replace(" ", "-");
		$('.popular-tags-holder').append('<div class="add_to_search_term" data-tag="'+slug+'">'+cur_word_text+'</div>')
		$(this).remove();
	})
	if($('#school').val() != $('#search-dd-school-hidden').val()){
	 	$('#search-dd-school').val('');
		$('#search-dd-school-hidden').val('');
	}
	tags = [];
	school = '';
    school_name = '';
    writen_term = '';
    combined_tags = '';
	is_search = 0;
	fired = 0;
  }
  
  $('.search-dd-list').click(function(){
  	$('.search_terms').slideToggle();
  	$('.search_terms').css('overflow', 'scroll');
  })
  
  $('.select_term').click(function(){
	var choosen_tag = $(this);
	var cur_term = $.trim($('#term').val());  
  	$('#term').val(choosen_tag.text());
	$('.search_terms').slideUp('fast');
	$('.add_tag').each(function(){
		$(this).remove();
	})
	$('#searchsubmit').before('<input type="hidden" class="add_tag" value="'+choosen_tag.text()+'" />');
	cansend = 1;
	$('#searchsubmit').addClass('search-live');
	
	if(cansend == 1){
		
		var searchterm = $('#term').val();
		$('.add_tag').each(function(){
			var tag = $(this).val();
			searchterm = searchterm.replace($(this).val(), "");
			var lowercase = tag.toLowerCase()
			tag = lowercase.replace(" ", "-");
			tags.push(tag);
			$('.searched-words').append('<div class="words tag" data-tag="'+tag+'">'+$(this).val()+'</div>');
		})
		combined_tags = tags.join(',');
		writen_term = $.trim(searchterm);
		school = $('#search-dd-school-hidden').val();
		school_name = $('#search-dd-school').val();
		if($.trim(school) != ''){
			$('.searched-words').append('<div class="words school" data-school="'+school+'">'+school_name+'</div>');
		}
		
		if(writen_term != ''){
			$('.searched-words').append('<div class="words term" data-term="'+writen_term+'">'+writen_term+'</div>');
		}
				
		$('.add_to_search_term').each(function(){
			var search_term = $(this);
			if($.inArray( search_term.data('tag'), tags ) > -1){
				search_term.remove();
			}
		})
		
		collapse_main();
		$('.search-container').html('<div class="search-loading">Loading...</div>');
		$('.search-container').slideDown();
		$('.secondary-dd-searchedwords').slideDown();
		
		var last_term = $( ".popular-tags-holder .add_to_search_term" ).last();
		var position = last_term.position();
		var lwidth = last_term.outerWidth(true);
		
		var popular_width = 0;
		
		//determin width of other tag holder for use later
		$('.add_to_search_term').each(function(){
			popular_width += $(this).outerWidth();
		})
		
		if($(window).width() > 640){
			$('.popular-tags-holder').css({'width': popular_width+'px'});
			console.log(popular_width);
		}else{
			$('.popular-tags-holder').css({'width': '100%'});
		}
		// $('.search-wholesite img').attr('src', templateDir+'/images/search-x.png'); // pankaj@happyfuncorp.com #74
		
		//$('#searchform').submit();
		$.get( siteurl,  {'s':'original', 'school': school, 's_term': writen_term, 'taging':combined_tags}, function() {
		})
	  .done(function(data) {
		$('.search-container').html($(data).html()+'<div class="search-clear-out" style="clear:both; width:100%"></div>');
		is_search = 1;
	  })
	  .fail(function() {
		$('.search-container').html('<div>There was an error trying to retrieve your search. Please contact College Fashionista!</div>');
	  })
	} //END OF IF CAN SEND
  })
  
  var is_search = 0;
  var school = '';
  var school_name = '';
  var writen_term = '';
  var combined_tags = '';
  var tags = [];
  //in tags ',' = or, '+' = and
  
  $('#searchsubmit').click(function(e){
  	e.preventDefault();
	e.stopPropagation();
	
	if(cansend == 1){
		
		var searchterm = $('#term').val();
		$('.add_tag').each(function(){
			var tag = $(this).val();
			searchterm = searchterm.replace($(this).val(), "");
			var lowercase = tag.toLowerCase()
			tag = lowercase.replace(" ", "-");
			tags.push(tag);
			$('.searched-words').append('<div class="words tag" data-tag="'+tag+'">'+$(this).val()+'</div>');
		})
		combined_tags = tags.join(',');
		writen_term = $.trim(searchterm);
		school = $('#search-dd-school-hidden').val();
		school_name = $('#search-dd-school').val();
		if($.trim(school) != ''){
			$('.searched-words').append('<div class="words school" data-school="'+school+'">'+school_name+'</div>');
		}
		
		if(writen_term != ''){
			$('.searched-words').append('<div class="words term" data-term="'+writen_term+'">'+writen_term+'</div>');
		}
				
		$('.add_to_search_term').each(function(){
			var search_term = $(this);
			if($.inArray( search_term.data('tag'), tags ) > -1){
				search_term.remove();
			}
		})
		
		collapse_main();
		$('.search-container').html('<div class="search-loading">Loading...</div>');
		$('.search-container').slideDown();
		$('.secondary-dd-searchedwords').slideDown();
		
		var last_term = $( ".popular-tags-holder .add_to_search_term" ).last();
		var position = last_term.position();
		var lwidth = last_term.outerWidth(true);
		
		var popular_width = 0;
		
		//determin width of other tag holder for use later
		$('.add_to_search_term').each(function(){
			popular_width += $(this).outerWidth();
		})
		
		if($(window).width() > 640){
			$('.popular-tags-holder').css({'width': popular_width+'px'});
			console.log(popular_width);
		}else{
			$('.popular-tags-holder').css({'width': '100%'});
		}
		// $('.search-wholesite img').attr('src', templateDir+'/images/search-x.png'); // pankaj@happyfuncorp.com #74
		
		//$('#searchform').submit();
		$.get( siteurl,  {'s':'original', 'school': school, 's_term': writen_term, 'taging':combined_tags}, function() {
		})
	  .done(function(data) {
		$('.search-container').html($(data).html()+'<div class="search-clear-out" style="clear:both; width:100%"></div>');
		is_search = 1;
	  })
	  .fail(function() {
		$('.search-container').html('<div>There was an error trying to retrieve your search. Please contact College Fashionista!</div>');
	  })
	} //END OF IF CAN SEND
  })
  
  //for trending search, on click add to input area, if a tag add the hidden input tag
  $('.search-dd-trending-word').click(function(){
  	var choosen_tag = $(this);
	var cur_term = $.trim($('#term').val());  
  	$('#term').val(cur_term+' '+choosen_tag.text());
	if(choosen_tag.hasClass('tag')){
		$('#searchsubmit').before('<input type="hidden" class="add_tag" value="'+choosen_tag.text()+'" />');
	}
	cansend = 1;
	$('#searchsubmit').addClass('search-live');
  })
   
  $('#term').keyup(function(e){
	  var inputbox = $(this);
	  var inputboxvalue = $(this).val();
	var keycode =  e.keyCode ? e.keyCode : e.which;
  	if($.trim(inputbox.val()) != ''){
		cansend = 1;
		$('#searchsubmit').addClass('search-live');
		if (keycode == 8 || keycode == 46) {
			//if person backspaced or deleted check to see if tags are still there, if not delete input
			$('.add_tag').each(function(){
				var hiddeninput = $(this);
				if(inputboxvalue.indexOf(hiddeninput.val()) == -1){
					hiddeninput.remove();
				}
			})
		}
	}else if($('#search-dd-school-hidden').val() == '' && $.trim(inputbox.val()) == ''){
		cansend = 0;
		$('#searchsubmit').removeClass('search-live');
		$('.add_tag').each(function(){
			$(this).remove();
		})
	}
  })
  
  //remove words and resend ajax search or reset search
  $('body').on('click', '.searched-words .words', function(){
	  var cur_word = $(this);
	  var cur_word_text = cur_word.text();
	  var cur_word_slug = cur_word.data('tag');
  	if($('.searched-words .words').length == 1){
		clear_search();
	}else{
		cur_word.remove();
		$('.popular-tags-holder').append('<div class="add_to_search_term" data-tag="'+cur_word_slug+'">'+cur_word_text+'</div>')
		$('.search-container').html('<div class="search-loading">Loading...</div>');
			tags = [];
		$('.searched-words .tag').each(function(){
			tags.push($(this).data('tag'));
		})
		combined_tags = tags.join(',');
		if($('.searched-words .term').length == 0){
			writen_term = '';
		}
		if($('.searched-words .school').length == 0){
			school = '';
		}
		
		$.get( siteurl,  {'s':'researching', 'school': school, 's_term': writen_term, 'taging':combined_tags}, function() {
		})
	  .done(function(data) {
		$('.search-container').html($(data).html()+'<div class="search-clear-out" style="clear:both; width:100%"></div>');
		is_search = 1;
		fired = 0;
	  })
	  .fail(function() {
		$('.search-container').html('<div>There was an error trying to retrieve your search. Please contact College Fashionista!</div>');
	  })
	}
  })
  
  //add words and resend ajax search
  $('body').on('click', '.add_to_search_term', function(){
	var selected_term = $(this);
  	tags.push(selected_term.data('tag'));
	$('#searchsubmit').before('<input type="hidden" class="add_tag" value="'+selected_term.text()+'" />');
	$('.searched-words').append('<div class="words tag" data-tag="'+selected_term.data('tag')+'">'+selected_term.text()+'</div>');
	combined_tags = tags.join(',');
	
	$('.search-container').html('<div class="search-loading">Loading...</div>');
	selected_term.remove();
	
	$.get( siteurl,  {'s':'researching', 'school': school, 's_term': writen_term, 'taging':combined_tags}, function() {
		})
	  .done(function(data) {
		$('.search-container').html($(data).html()+'<div class="search-clear-out" style="clear:both; width:100%"></div>');
		is_search = 1;
		fired = 0;
	  })
	  .fail(function() {
		$('.search-container').html('<div>There was an error trying to retrieve your search. Please contact College Fashionista!</div>');
	  })
  })
  
  $('.search-clear').click(function(){
	clear_search();
  })
  
  var scrolling = false;
  var scrollingr = false;
  var widthgood = true;
  var scrollback = false
  var added = false;
  
  //popular-tags-holder width found after clicking search button  
  $('.popular-tags-more').mousedown(function(){
    	scrolling = true;
		if(widthgood){
    		startScrollingleft($(".popular-tags-holder"), "-=25px");
		}
		if(scrolling == true && added == false){
			$('.popular-tags-less').show();
			added = true;
		}
    }).mouseup(function(){
    	scrolling = false;
    });
	
	$('.popular-tags-less').mousedown(function(){
    	scrollingr = true;
    		startScrollingright($(".popular-tags-holder"), "+=25px");
    }).mouseup(function(){
    	scrollingr = false;
    });
  
 
  
  function startScrollingleft(obj, param){
    if(!scrolling){ 
		obj.stop(true); 
	} else { 
		obj.animate({"left": param}, "fast", "linear",
			function(){ if (scrolling && widthgood) { 
				startScrollingleft(obj, param); 
				var difference = $('.popular-tags-holder').width() + parseInt($('.popular-tags-holder').css("left"));
				if(difference < $('.search-populartags').width() ){
					widthgood = false;
				}else{
					widthgood = true;
				}
			} 
		}); 
	}
  }
  
  function startScrollingright(obj, param){
    if(!scrollingr){ 
		obj.stop(true); 
	} else { 
		obj.animate({"left": param}, "fast", "linear",
			function(){ if (scrollingr) { 
				startScrollingright(obj, param); 
				if(parseInt($('.popular-tags-holder').css("left")) >= 0){
					$('.popular-tags-less').hide();
					$('.popular-tags-holder').stop(true);
					added = false;
				}
			} 
		}); 
	}
  }
  
  
  /**** REST OF MAIN MENU ****/
  
  $('.besocial').mouseover(function(){
	clear_mainmenu($(this));
	right_main_menu.stop(true).animate({height:soc_height},300);

	$('.social-dd').show().animate({height: soc_height});
	$('.social-dd-trending').show().animate({height: soc_height});
  })
  
  
  $('.carousel-social-share-rollover').mouseenter(function(){
  	$('.carousel-social-share').stop(true).slideUp('fast');
	$('.carousel-social-share-words').stop(true).slideUp('fast');
	$('.carousel-social-share-icons').stop(true).slideDown('fast');
  }).mouseleave(function(){
	$('.carousel-social-share').stop(true).slideDown('fast');
	$('.carousel-social-share-words').stop(true).slideDown('fast');
	$('.carousel-social-share-icons').stop(true).slideUp('fast');
  })
  
  main_menu.mouseleave(function(){
  	//main_menu.stop(true).animate({height:m_original},200);
	main_menu.stop(true).animate({height:m_original},200);
	$('.top-menu-button').each(function(){
		$(this).removeClass('top-menu-showing');
	})
  })
  
  $('.header-container').mouseenter(function(){
	  if($(window).width() > 720){
		main_menu.stop(true).animate({height:m_original},200);
		right_main_menu.stop(true).animate({height:m_original},300);
		$('.top-menu-button').each(function(){
			$(this).removeClass('top-menu-showing');
		})
	  }
  })
  
  right_main_menu.mouseleave(function(){
	if(!$('.top-searchsocial').is(':visible')){
		$('.search-dd-region-hidden').hide();
		$('.search_terms').hide();
		right_main_menu.stop(true).animate({height:m_original},300);
		$('.top-menu-button').each(function(){
			$(this).removeClass('top-menu-showing')
		})
	}
  })
  
  
   
	if(window.ismobile) {
		$('.search-dd-region-1').click(function(){
  		$('.search-dd-region-hidden-1').slideToggle();
			if($('.search-dd-region-1 .arrow').hasClass('rotate')){
				$('.search-dd-region-1 .arrow').removeClass('rotate');
			}else{
				$('.search-dd-region-1 .arrow').addClass('rotate');
			}
  	});
		
		$('.search-dd-region').click(function(){
			$('.search-dd-region-hidden').slideToggle();
			if($('.search-dd-region .arrow').hasClass('rotate')){
				$('.search-dd-region .arrow').removeClass('rotate');
			}else{
				$('.search-dd-region .arrow').addClass('rotate');
			}
		});
		
		$('.search-dd-region-2').click(function(){
			$('.search-dd-region-hidden-2').slideToggle();
			if($('.search-dd-region-2 .arrow').hasClass('rotate')){
				$('.search-dd-region-2 .arrow').removeClass('rotate');
			}else{
				$('.search-dd-region-2 .arrow').addClass('rotate');
			}
		});
	} else {
		$('.search-dd-region-1').hover(function(){
  			$('.search-dd-region-hidden-1').stop(false, true).slideDown();
			$('.search-dd-region-1 .arrow').addClass('rotate');
  		});
		
		$('.search-dd-region').hover(function(){
  			$('.search-dd-region-hidden').stop(false, true).slideDown();
			$('.search-dd-region .arrow').addClass('rotate');
  		});
	
		$('.search-dd-region-2').hover(function(){
			$('.search-dd-region-hidden-2').stop(false, true).slideDown();
			$('.search-dd-region-2 .arrow').addClass('rotate');
		});
	
		
		$(document).mousemove(function(e) {
			var $target = $(e.target);
			
				if(!(
					$(e.target).hasClass("social-switch") || ($(e.target).parents(".social-switch").size() > 0)
					||
					$(e.target).hasClass("social-add") || ($(e.target).parents(".social-add").size() > 0)
				)) {
					$(".social-switch").stop(true).slideUp();
					$(".social-add").removeClass("dropdown-open");	
				}

			if(
				!(
					$target.hasClass("search-dd-region-1") || ($target.parents(".search-dd-region-1").size() > 0)
					||
					$target.hasClass("search-dd-region-hidden-1") || ($target.parents(".search-dd-region-hidden-1").size() > 0)
				)
			) {
				$('.search-dd-region-hidden-1').stop(true).slideUp();
				$('.search-dd-region-1 .arrow').removeClass('rotate');
			}
			if(
				!(
					$target.hasClass("search-dd-region") || ($target.parents(".search-dd-region").size() > 0)
					||
					$target.hasClass("search-dd-region-hidden") || ($target.parents(".search-dd-region-hidden").size() > 0)
				)
			) {
				$('.search-dd-region-hidden').stop(true).slideUp();
				$('.search-dd-region .arrow').removeClass('rotate');
			}
			
			if(
				!(
					$target.hasClass("search-dd-region-2") || ($target.parents(".search-dd-region-2").size() > 0)
					||
					$target.hasClass("search-dd-region-hidden-2") || ($target.parents(".search-dd-region-hidden-2").size() > 0)
				)
			) {
				$('.search-dd-region-hidden-2').stop(true).slideUp();
				$('.search-dd-region-2 .arrow').removeClass('rotate');
			}
		});
	}
																	   
  //SHANNON EDIT
  $('.search-dd-region-hidden-1, .search-dd-region-hidden, .search-dd-region-hidden-2').click(function(){
	 var ssrh = $(this);
	 if($(this).hasClass('search-dd-region-hidden-2')){ 
	 	var image1 = $('.search-dd-region-2 img:first-child').attr('src');
		var image2 = $('.search-dd-region-hidden-2').children('img').attr('src');
		var region = ssrh.siblings('input[name="regionnum"]').val();
		if(typeof region === 'undefined'){
			region = ssrh.prev().find('input[name="regionnum"]').val();
		}
		console.log(region);
		  $.ajax({
			url: ajaxurl,
			data: {'action':'retrieve_schools', 'region':region},
			success:function(data) {
				$('.school_terms').each(function(){
					//console.log(data);
					$(this).html(data);
					$('.search-dd-region-2 img:first-child').attr('src', image2);
					$('.search-dd-region-hidden-2').children('img').attr('src', image1);
					if(region == 3){ssrh.siblings('input[name="regionnum"]').val('4');}else if(region == 4){ssrh.siblings('input[name="regionnum"]').val('3');}
					ssrh.slideUp();
				})
	          }
		   })
	 }else{
		 var image1 = $('.search-dd-region-1').children('img').eq(0).attr('src');
		 var image2 = $('.search-dd-region-hidden-1').children('img').attr('src');
		 var image3 = $('.search-dd-region img:first-child').eq(0).attr('src');
		 var image4 = $('.search-dd-region-hidden').children('img').attr('src');
		 var region = $('input[name="regionnum"]').val();
		  $.ajax({
			url: ajaxurl,
			data: {'action':'retrieve_schools', 'region':region},
			success:function(data) {
				$('.school_terms').each(function(){
					console.log(data);
					$(this).html(data);
					$('.search-dd-region-1').children('img').eq(0).attr('src', image2);
					$('.search-dd-region-hidden-1').children('img').attr('src', image1);
					$('.search-dd-region img:first-child').attr('src', image4);
					$('.search-dd-region-hidden').children('img').attr('src', image3);
					$('input[name="regionnum"]').each(function(){
						if(region == 3){$(this).val('4');}else if(region == 4){$(this).val('3');}
					})
					$('.search-dd-region-hidden-1').slideUp();
					$('.search-dd-region-hidden').slideUp();
				})
	          }
		   })
	   }
  	//$(this).prev('form').submit();
  })
  
  $('.search-dd-region-hidden-3, .search-dd-region-3').click(function(){
	  var ssrh = $(this);
	  var region = $(this).data('parent');
	  $.ajax({
			url: ajaxurl,
			data: {'action':'retrieve_schools', 'region':region},
			success:function(data) {
				$('.school_terms').each(function(){
					$(this).html(data);
					/*if($('.search-dd-region-2').length > 0){
						$('.search-dd-region-2 img:first-child').attr('src', image2);
						$('.search-dd-region-hidden-2').children('img').attr('src', image1);
					}*/
					if(region == 3){ssrh.siblings('input[name="regionnum"]').val('4');}else if(region == 4){ssrh.siblings('input[name="regionnum"]').val('3');}
				})
	          }
		   })
  })
  
  /////////////////////////////////////
      
  /****** LAZY LOAD ******/
  
  var fired = 0;
  var cur_page = 2;
  
  //ajax to retrieve more posts when user at bottom of page
  $(window).bind('scroll', function() {
	  if(is_search == 1){
		if($(this).scrollTop() >= $('.search-container').offset().top + $('.search-container').outerHeight() - window.innerHeight) {
			if(fired == 0){
				$('.search-clear-out').before('<div class="search-loading">Loading...</div>');
				fired = 1;
				$.get( siteurl,  { 's':'researching', 'school': school, 's_term': writen_term, 'taging':combined_tags, 'paged': cur_page}, function() {
				})
			  .done(function(data) {
				  $('.search-loading').remove();
				$('.search-clear-out').before($(data).html());
				cur_page++;
				fired = 0;
			  })
			  .fail(function(jqXHR, textStatus, errorThrown) {
				  if (jqXHR.status === 0) {
						$('.search-container').append('<div>No connection to the server. Please contact College Fashionista!</div>');
					} else if (jqXHR.status == 404) {
						//this page does not exist, so stop trying
						$('.search-loading').remove();
					} else if (jqXHR.status == 500) {
						$('.search-container').append('<div>No connection to search. Please contact College Fashionista!</div>');
					} else if (textStatus === 'parsererror') {
						$('.search-container').append('<div>Posts are not readable. Please contact College Fashionista!</div>');
					} else if (textStatus === 'timeout') {
						alert('Time out error.');
					} else if (textStatus === 'abort') {
						$('.search-container').append('<div>Stopped trying to retrieve these posts. Please contact College Fashionista!</div>');
					} else {
						$('.search-container').append('<div>'+jqXHR.responseText+'. Please contact College Fashionista!</div>');
					}
			  })
				
			}
		}
	  }else{
	  	if($('.post_holder').length != 0){
			if($(this).scrollTop() >= $('.search-container').offset().top + $('.search-container').outerHeight() - window.innerHeight) {
				if(fired == 0){
					$('.search-clear-out').before('<div class="search-loading">Loading...</div>');
					fired = 1;
					$.get( window.location.href+'/page/'+cur_page+'/', function() {
					})
				  .done(function(data) {
					  $('.search-loading').remove();
					$('.post_holder').append($(data).find('.post_holder').html());
					cur_page++;
					fired = 0;
				  })
				  .fail(function(jqXHR, textStatus, errorThrown) {
					  if (jqXHR.status === 0) {
							$('.search-container').append('<div>No connection to the server. Please contact College Fashionista!</div>');
						} else if (jqXHR.status == 404) {
							//this page does not exist, so stop trying
							$('.search-loading').remove();
						} else if (jqXHR.status == 500) {
							$('.search-container').append('<div>No connection to search. Please contact College Fashionista!</div>');
						} else if (textStatus === 'parsererror') {
							$('.search-container').append('<div>Posts are not readable. Please contact College Fashionista!</div>');
						} else if (textStatus === 'timeout') {
							alert('Time out error.');
						} else if (textStatus === 'abort') {
							$('.search-container').append('<div>Stopped trying to retrieve these posts. Please contact College Fashionista!</div>');
						} else {
							$('.search-container').append('<div>'+jqXHR.responseText+'. Please contact College Fashionista!</div>');
						}
				  })
					
				}
		  	}
		 }
	  }
   })

  /****** TRENDS PAGE ********/
  
  if($('.masonry-section').length > 0){
    var $container = $('.masonry-section');
	
	$container.imagesLoaded( function() {
		console.log('done');
	 // $container.isotope({ layoutMode: 'masonry',
	  //});
	  //$container.nested({ selector: 'article', resizeToFit: false, minColumn: 2, minWidth: 265, complete: onComplete});
	});
  }
  
  function onComplete(){
  	console.log('done');
  }
  
  // SHANNON EDIT
  var lastscrolltop = 0, st, d;
  function detectd(){
  	st = window.pageYOffset;
	if(st > lastscrolltop){
		d = 'd';
	}else{
		d = 'u';
	}
	return d;  
   }
   
   if($('.header-dd').height() > 0){
   	$('.carousel-container').addClass('carousel-container');
   }
  
  $(window).on('resize', function(){
      if($(window).width() > 720){  
	  	$('.logo-container').css({'margin-left': 'auto'})
		$('.wrapper').css({'width':'auto'});
		$('.responsive-container').css({'width': 'auto', 'margin-left': 'none',' overflow': 'hidden'});
	  }
	});
  
  var lastScrollLeft = 0;
  
  $(window).scroll(function(e){
	  // SHANNON EDIT
  if($(window).width() > 720){  
	  if($('.above_top_menu_ad').length > 0){
		var dd = detectd();
		$al = $('.above_top_menu_ad');
		$bl = $('.main-menu');
		$hl = $('.header-dd');
		if(parseInt($al.css('marginTop')) > -66 && dd == 'd'){
			$al.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			if($hl.height() == 0){
				$bl.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			}
			if($hl.height() != 0){
				$hl.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			}
			$('.top-menu-button-name').stop(true, true).slideUp(); // #207 pankaj@happyfuncorp.com
			$('.carousel-container').css({'padding-top':'200px'});
			//$al.stop(true).animate({"marginTop":'-'+$(window).scrollTop()+'px'});
		}else if(dd == 'u'){
			$al.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			if($hl.height() == 0){
				$bl.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			}
			if($hl.height() != 0){
				$hl.css({'margin-top':'-'+$(window).scrollTop()+'px'});
			}
		}else{
			$al.css({'margin-top':'-66px'});
			if($hl.height() == 0){
				$bl.css({'margin-top':'-66px'});
			}
			//$hl.css({'margin-top':'-66px'});
		}
		
	  if($('#sub-dd').is(':visible') && $(window).width() > 640){
  		$('#sub-dd').slideUp(function(){
			$hl.css({'margin-top':0});
			$.ajax({
				url: ajaxurl,
				data: {'action':'dissmiss_subscribe'},
				success:function(data) {
					$('.college-search').fadeIn();
					$('.top-logo').fadeIn();
				},
				error: function(errorThrown){
					console.log(errorThrown);
				}
			});
		});
  	  }

	}
	
	if($(window).width() > 720 && $(window).width() < 980){  
		var documentScrollLeft = $(document).scrollLeft();
		if (lastScrollLeft != documentScrollLeft) {
			$('.logo-container').css({'margin-left': '-'+documentScrollLeft+'px'})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
			lastScrollLeft = documentScrollLeft;
		}
	}
  }
    
  if($('.top-login-loggedin').length > 0){
	  var position = $('.top-login').position();
	  var newtop = position.top + $('.top-login').height();
	  $('.loggedin-settings').css({'top':newtop+'px'});
  }
  
  /////////////////////////////////////// 
  if($(window).width() > 720){
	  $el = $('.trend-search-holder'); 
	  if ($(this).scrollTop() > 500 && $el.css('position') != 'fixed'){ 
		$('.trend-search-holder').css({'position': 'fixed', 'top': '134px'}); 
		$('.trend_terms').css({'position': 'fixed', 'top': '205px'});
	  }
	  if ($(this).scrollTop() < 500 && $el.css('position') == 'fixed')
	  {
		$('.trend-search-holder').css({'position': 'static', 'top': 'auto'}); 
		$('.trend_terms').css({'position': 'absolute', 'top': '-30px'});
	  } 
  }else{
  	 $el = $('.trend-search-holder'); 
	  if ($(this).scrollTop() > 360 && $el.css('position') != 'fixed'){ 
		$('.trend-search-holder').css({'position': 'fixed', 'top': '70px'}); 
		$('.trend_terms').css({'position': 'fixed', 'top': '140px'});
	  }
	  if ($(this).scrollTop() < 360 && $el.css('position') == 'fixed')
	  {
		$('.trend-search-holder').css({'position': 'static', 'top': 'auto'}); 
		$('.trend_terms').css({'position': 'absolute', 'top': '-30px'});
	  } 
  }
}); //END OF WINDOW SCROLL

$('.trends-search-dd').click(function(){
	$('.trend_terms').slideToggle();
})
  
  
//search dropdown based on letters
  $("#trend-search").keyup(function(){
	// Retrieve the input field text and reset the count to zero
	var filter = $(this).val(), count = 0, holder = $('.trend_terms'), schools = $('.trend_terms').children('.trend_term');
	
	holder.show();
	if(holder.outerHeight() < 390){
		holder.css({'height':'auto'});
	}else{
		holder.css({'height':'390px'});
	}
	
	// Loop through school list
	schools.each(function(){

		// If the list item does not contain the text phrase hide
		if ($(this).text().search(new RegExp(filter, "i")) < 0) {
			$(this).hide();
		} else {
			$(this).show();
			count++;
		}			
	});
	
	if(count == 0){
		holder.append('<div class="trend_term no_click">No trends found</div>');
	}else{
		if(holder.children('.no_click').length > 0){
			holder.children('.no_click').each(function(){
			$(this).remove();
			})
		}
	}
	
	if(filter == ''){
		if(holder.children('.no_click').length > 0){
			holder.children('.no_click').each(function(){
				$(this).remove();
			})
		}
		schools.each(function(){
			$(this).show();
		});
	}
	
}); 


$('.past-press-appearances-section .more').click(function(){
	$('.past-press-appearances-section .press-releases ul').slideDown();
})
  
  /****** REGISTRATION ******/
  
    $('.top-login-userarrow').click(function(){
  	if(!$(this).hasClass('rotate-down')){
		$(this).addClass('rotate-down');
		var position = $('.top-login').position();
		var newtop = position.top + $('.top-login').height();
		$('.loggedin-settings').css({'top':newtop+'px'});
		$('.loggedin-settings').slideDown();
	}else{
		$(this).removeClass('rotate-down');
		$('.loggedin-settings').slideUp();
	}
  })
  
  $('.loggedin-signout').click(function(){
  	$.ajax({
		url: ajaxurl,
		data: {'action':'ajax_logout'},
		success:function(data) {
			window.location = siteurl+'?lo=lo';
		}
	})
  })

  
  function showRecaptcha(element) {
	  
  	 Recaptcha.create("6LdAD_cSAAAAAH1yxEw4JNlM8p_4kuGxBRCVdKh0", element, {
		 theme: "custom",
		 custom_theme_widget: 'recaptcha_widget',
		 callback: Recaptcha.focus_response_field});
 }
 //CHANGE BACK uncomment
 showRecaptcha('recaptcha_widget'); //SHANNON
 
 
 $('#signin-go').click(function(e){
 	e.preventDefault();
	e.stopPropagation();
	$('.log-error').slideUp();
	if($.trim($('#log_pass').val()) == '' || $.trim($('#log_pass').val()) == ''){
		$('.log-error').html('Please enter your email or username and a password');
		$('.log-error').slideDown();
	}else{
	  $.post( siteurl+"/wp-login.php",  { 'log': $('#log_name').val(), 'pwd': $('#log_pass').val(), 'testcookie':1, 'wp-submit':'Log In', 'redirect_to': siteurl }, function() {
		})
	  .done(function(data) {
		if($(data).find('#login_error').length > 0){
			$('.log-error').html($(data).find('#login_error').html());
			$('.log-error').slideDown();
		}else{
			window.location.reload(true); //SHANNON EDIT
		}
		
	  })
	  .fail(function() {
		$('.log-error').html('There was an error trying to log you in. Please contact College Fashionista!');
		$('.log-error').slideDown();
	  })
	}
	/*$.ajax({
		url: ajaxurl,
		data: {'action':'ajax_login','user':$('#log_name').val(),'pass':$('#log_pass').val()},
		success:function(data) {
			if(data != '' && data != 0){
				err = data.substr(0, data.length-1);
				$('.log-error').html(err);
				$('.log-error').slideDown();
			}else{
				window.location = profilepage;
			}
		}
	})*/
	
 })
 
 //SHANNON EDIT
 setTimeout(function(){$('.newsletter_added').slideUp();},8000);
 //////////////////////
  
  $('#register-go').click(function(e){
  	  e.preventDefault();
	  e.stopPropagation();
	  
	  var wname = $('#reg-fname').val();
 	  var fname = wname.split(' ');
	  if(Recaptcha.get_response() == ''){
		  $('.captcha_do').slideDown();
	  }else{
		  $.ajax({
			url: ajaxurl,
			data: {'action':'collect_registration','challenge':Recaptcha.get_challenge(),'response':Recaptcha.get_response(), 'username':$('#reg-uname').val(),'email':$('#reg_email').val(),'first_name':fname[0],'last_name':fname[1],'user_app_id':$('#reg_pass').val(),'role':'subscriber'},
			success:function(data) {
				//reload the page because template redirect will run the auto login with the session variables sent by the registration area
				//otherwise errors
				console.log(data)
				if(data == 'nametaken'){
					$('.usr_reg_error').slideDown();
				}else if(data == 'caperr'){
					$('.captcha_incor').slideDown();
					Recaptcha.reload();
				}else if(data != '' && data != 0){
					$('.reg_error_unknown').text(data);
					$('.reg_error_unknown').slideDown();
				}else{
					location.reload(true)
				}
			},
			error: function(errorThrown){
				console.log(errorThrown);
			}
		  })
	  }
	  
  })
  
  $('.reg-facebook').click(function(){
  	FB.login(function(response) {
	  if (response.status === 'connected') {
		// Logged into your app and Facebook.
		loggedin();
	  } else if (response.status === 'not_authorized') {
		// The person is logged into Facebook, but not your app.
	  } else {
		// The person is not logged into Facebook, so we're not sure if
		// they are logged into this app or not.
	  }
	});
  })
  
  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected' && loggedinnow == '') {
      // Logged into your app and Facebook.
      //loggedin();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
		if(loggedinnow == ''){
		  statusChangeCallback(response);
		}
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1459512460985339',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.0' // use version 2.0
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
	if(loggedinnow == ''){  
		statusChangeCallback(response);
	}
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function loggedin() {
      FB.api('/me', function(response) {
      console.log(JSON.stringify(response));
	  //console.log(response.first_name+'-'+response.last_name);
	  //console.log(response.id);
	  var get_avatar = 'http://graph.facebook.com/'+response.id+'/picture/?type=large';
	  $.ajax({
        url: ajaxurl,
        data: {'action':'collect_registration','fb_login':'yes','username':response.first_name+'-'+response.last_name,'user_app_id':response.id,'role':'author', 'avatar':get_avatar},
        success:function(data) {
            // This outputs the result of the ajax request
			if(data != '' && data != 0){
				$('#reg-dd').slideDown();
				$('.fb_reg_error').slideDown();
				console.log(data)
			}else{
				//window.location = siteurl+'?lo=li';
				location.reload(true)
			}//console.log(data);
        },
        error: function(errorThrown){
            console.log(errorThrown);
        }
      });
    });

  }
  
  var curr_txt = '';
  
  $('.reg-twitter').click(function(){
	hello.login('twitter');
	
	hello.on('auth.login', function(r){
		// Get Profile
		hello.api(r.network+':/me', function(p){
			console.log(p.id + ' ' + p.profile_image_url + ' ' + ' ' + r.network+ ' ' + p.name);
			//remove '_normal' from profile image to get original
			var str = p.profile_image_url;
			var avatar_url = str.replace('_normal','');
		  $.ajax({
			url: ajaxurl,
			data: {'action':'collect_registration','twt_login':'yes','username':p.name,'user_app_id':p.id,'role':'author', 'avatar':avatar_url},
			success:function(data) {
				// This outputs the result of the ajax request
				if(data != '' && data != 0){
					$('#reg-dd').slideDown();
					$('.twt_reg_error').slideDown();
					console.log(data)
				}else{
					//window.location = siteurl+'?lo=li';
					location.reload(true)
				}//console.log(data);
			},
			error: function(errorThrown){
				console.log(errorThrown);
			}
		  });
			
		});
	});

  })
  

hello.init({twitter : 'TvveKl7C9FCpnDtA8JQCVyUyO'},
	{redirect_uri:'http://builds.happyfuncorp.com/collegefashonista/'});
  
  /****** SOCIAL ******/
  
  //set rad bg if user not logged in
if(loggedinnow == ''){
	$('.rad-holder').each(function(){
		$(this).addClass('clear-heart');
	})
}

$('body').on('mouseenter', '.under-social-rollover', function() {
	 $(this).prev('.social-rollover').stop(true).fadeIn();
});

$('body').on('mouseleave','.social-rollover',function() {
	 $(this).stop(true).fadeOut();
});

$('body').on('click','.social-rollover',function() {
	 $(this).stop(true).fadeOut();
});  

$('body').on('mouseenter', '.under-raded-rollover', function() {
	 $(this).prev('.raded-rollover').stop(true).fadeIn();
});

$('body').on('mouseleave','.raded-rollover',function() {
	 $(this).stop(true).fadeOut();
});

$('body').on('click','.raded-rollover',function() {
	 $(this).stop(true).fadeOut();
});
  
$('body').on('mouseenter', '.rad-holder', function() {
	  if(!$(this).hasClass('already-rad')){
		$(this).children('.cur_rads').hide();
		$(this).children('.plus_rads').show();
		$(this).removeClass('clear-heart');
		$(this).addClass('opaque-heart');
	  }else{
	  	$(this).children('.cur_rads').hide();
		$(this).children('.plus_rads').hide();
		$(this).children('.minus_rads').show();
	  }
  })
  
$('body').on('mouseleave', '.rad-holder', function() {
	  if(!$(this).hasClass('already-rad')){
		$(this).children('.cur_rads').show();
		$(this).children('.plus_rads').hide();
		$(this).addClass('clear-heart');
		$(this).removeClass('opaque-heart');
	  }else{
	  	$(this).children('.cur_rads').show();
		$(this).children('.plus_rads').hide();
		$(this).children('.minus_rads').hide();
	  }
  });

$bookmark_path = templateDir+'/members/single/bookmarks/ajax.php';

$('body').on('click','.rad-holder',function(){
	var cur_rad = $(this);
	var curamnt = cur_rad.children('.cur_rads').text();
	var post_id = cur_rad.attr('post-id');
	var author_id = cur_rad.attr('author-id');
	if(loggedinnow == ''){
		$('#reg-dd').find('.reg-topwords').text('Want to show some love?');
		$('#reg-dd').find('.reg-topdesc').text('Register for an account and get access to exclusive features, and RAD your favorite looks.');
		  close_logs('reg-dd');
	}else{
		if(!cur_rad.hasClass('already-rad')){
			var rading	= 'add rad'
			//use bookmark code
			$.ajax({
				url: $bookmark_path + '?method=add',
				type: 'GET',
				data: 'post_id=' + post_id,
				
				success: function(returndata) {
					console.log('rad added from bookmarks');
				}
			})
		}else{
			var rading	= 'remove rad'
			//use bookmark code
			$.ajax({
				url: $bookmark_path + '?method=delete',
				type: 'GET',
				data: 'post_id=' + post_id,
				
				success: function(returndata) {
					console.log('rad removed from bookmarks');
				}
			})
		}
		$.ajax({
			url: ajaxurl,
			data: {'action':'rad_this','rad':rading, 'postid':post_id, 'authorid':author_id},
			success:function(data) {
				console.log(rading);
				// This outputs the result of the ajax request
				if(data == 'added'){
					cur_rad.addClass('already-rad');
					cur_rad.removeClass('clear-heart');
					cur_rad.addClass('opaque-heart');
					curamnt++;
					cur_rad.children('.cur_rads').text(curamnt);
					console.log(data);
				}else if(data == 'removed'){
					cur_rad.removeClass('already-rad');
					cur_rad.addClass('clear-heart');
					cur_rad.removeClass('opaque-heart');
					curamnt--;
					cur_rad.children('.cur_rads').text(curamnt);
					console.log(data);
				}else{
					console.log(data);
				}
			},
			error: function(errorThrown){
				console.log('error '+errorThrown);
			}
		  });
	}
})

$('body').on('click','.raded-rollover',function(){
	var cur_rad = $(this);
	var post_id = cur_rad.attr('post-id');
	var author_id = cur_rad.attr('author-id');
	var article = $('.post-'+post_id);
	//use bookmark code
	$.ajax({
		url: $bookmark_path + '?method=delete',
		type: 'GET',
		data: 'post_id=' + post_id,
		
		success: function(returndata) {
			console.log('rad removed from bookmarks');
		}
	})
	
	//remove rad from rad save
	$.ajax({
		url: ajaxurl,
		data: {'action':'rad_this','rad':'remove rad', 'postid':post_id, 'authorid':author_id},
		success:function(data) {
			console.log('removed rad');
			// This outputs the result of the ajax request
			if(data == 'removed'){
				article.each(function(){ $(this).fadeOut('slow'); });
				console.log(data);
			}else{
				console.log(data);
			}
		},
		error: function(errorThrown){
			console.log(errorThrown);
		}
	  });
})




/********* BRAND PAGES *********/
function scrollToAnchor(aid){
    var aTag = $("#"+ aid);
    $('html,body').animate({scrollTop: aTag.offset().top - 150},'slow');
}

$('.brand-nav-dd-first, .brand-nav-downarrow').click(function(){
	$('.brand-nav-pulldwn').slideToggle(); //SHANNON EDIT
})

$('.brand-nav-pulldwn').mouseleave(function(){
  	$(this).stop(true).slideUp();
})

//SHANNON EDIT
$('.brand-featured-latestpost-v, .brand-featured-latestpost-t').click(function(){
	var goto = $(this).data('slug');
	scrollToAnchor(goto);
	$('.brand-nav-pulldwn').stop(true).slideUp();
})


/********* JOBS PAGES *********/
$('.job-notloggedin-register').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	close_logs('reg-dd');
})

$('.job-notloggedin-aready-registered a').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	close_logs('log-dd');
})

$('.job-share').hover(function(){
	$(this).stop(true).animate({width: "243px"}, 200);
}, function() {
	$(this).stop(true).animate({width: "80px"}, 200);
})

$(".job-containter").click(function() {
	$(this).find(".job-content").toggleClass("content-show");
})


}); //END OF ONLOAD