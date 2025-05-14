	//to remove red checkbox highlight
	function removeCheckBoxError(){
		$( "#subform .checkbox-wpr" ).removeClass("field-error");
	};
	//to remove input highlite when valid
	function removeInputError(e){
		$("input[name = '"+e+"']").parent().removeClass("field-error");
		$("#"+e+"-text").hide();
	};
	function clearForm()
	{
		var subform = document.getElementById('subform');
		$("input[type = 'checkbox']").prop('checked', false);
		subform.FirstName.value = '';
		subform.LastName.value = '';
		subform.hf_4_s_Email_Address.value = '';
	};

	$(function() {
		//form validation
		$("#subform").validate({
			
			rules: {
				FirstName: {
					required: true,
					notNumber: true
				},
				LastName: {
					required: true,
					notNumber: true
				},
				hf_4_s_Email_Address: {
					required : true,
					strictemail : true
				},
				subscription: "required"
			},
			messages:{
				FirstName : {
					required:"<a href='#hf_2_s_First_NameIDID' class='scrollto'>First Name  – Please enter your first name.</a>",
					notNumber: "<a href='#hf_2_s_First_NameIDID' name='invalid-firstname' class='scrollto'>First Name – Invalid First Name</a>"
				},
				LastName: {
					required: "<a href='#hf_3_s_Last_NameIDID' class='scrollto'>Last Name – Please enter your last name.</a>",
					notNumber: "<a href='#hf_3_s_Last_NameIDID' name='invalid-lastname' class='scrollto'>Last Name – Invalid Last Name</a>"
				},
				hf_4_s_Email_Address: {
					required: "<a href='#hf_4_s_Email_AddressIDID' class='scrollto'>Email Address – Please enter your email address.</a>",
					strictemail: "<a href='#hf_4_s_Email_AddressIDID' name='invalid-email' class='scrollto'>Email Address - Please enter a valid email address.</a>"
				},
				subscription: "<a href='#subscription' class='scrollto'>Subscriptions – Please select at least one publication.</a>"
			},
			errorElement : 'li',
    		errorLabelContainer: '.err-cont',
    		errorContainer: ".fail",
		    invalidHandler: function(form, validator) {
		        if (!validator.numberOfInvalids()){
		            return;
		        }else{
		        	//for checkboxes
		        	if($('#subform input:checked').length == 0){
		        		$( "#subform .checkbox-wpr" ).addClass("field-error");
		        	}
		        	//for inputs
		        	$.each(validator.errorList,function(){
		        		if($(this)[0].element.name == "FirstName"){
		        			$("input[name = 'FirstName']").parent().addClass("field-error");
	        				if($.find("a[name = 'invalid-firstname']").length !== 0){
		        				$("#hf_2_s_First_Name-text").text("Invalid First Name");
		        			}else{
		        				$("#hf_2_s_First_Name-text").text("Missing First Name");
		        			}
		        			$("#hf_2_s_First_Name-text").show();
		        		}
		        		if($(this)[0].element.name == "LastName"){
		        			$("input[name = 'LastName']").parent().addClass("field-error");
		        			if($.find("a[name = 'invalid-lastname']").length !== 0){
		        				$("#hf_3_s_Last_Name-text").text("Invalid Last Name");
		        			}else{
		        				$("#hf_3_s_Last_Name-text").text("Missing Last Name");
		        			}
		        			$("#hf_3_s_Last_Name-text").show();
		        		}
		        		if($(this)[0].element.name == "hf_4_s_Email_Address"){
		        			$("input[name = 'hf_4_s_Email_Address']").parent().addClass("field-error");
		        			if($.find("a[name = 'invalid-email']").length !== 0){
		        				$("#hf_4_s_Email_Address-text").text("Invalid Email");
		        			}else{
		        				$("#hf_4_s_Email_Address-text").text("Missing Email");
		        			}
		        			$("#hf_4_s_Email_Address-text").show();
		        		}
		        	})
		        }
		        var getHeaderHeight = jQuery("#header").outerHeight();
		        $('html, body').animate({
		            scrollTop: $('.fail').offset().top - getHeaderHeight
		        });
		        
		    },
		    submitHandler: function(form) {
	    	
	    	 var url = $("#subform").attr('action'),
                 type = $("#subform").attr('method'),
                 data = $("#subform").serialize();
		    	$.ajax({
		            url: url,
	                type: type,
	                data: data,
		            success: function() {
		                $('.success').show();
		                $("#subform").hide();
		                $('html, body').animate({
				            scrollTop: $('.fail').offset().top + 300
				        });
		            },
		            error: function(err) { 
		            	$('.success').show();
		                $("#subform").hide();
		                $('html, body').animate({
				            scrollTop: $('.fail').offset().top + 300
				        });
			            console.log(err);
			        }
		        });
		        return false;
		    }
		});

		//strict email validation method
		jQuery.validator.addMethod("strictemail", function(value, element) {
	        var valid = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
	        return valid;
        });

        jQuery.validator.addMethod("notNumber", function(value, element, param) {
           var reg = /[0-9]/;
           if(reg.test(value)){
                 return false;
           }else{
                   return true;
           }
        });

	});
	// $( document ).ready(function() {
	// 	setTimeout(function() {
	// 		$('.lang-fr').attr('href' , 'javascript: void(0)');
	// 		$('.lang-en').attr('href' , 'javascript: void(0)');

	// 		$('.lang-fr').on('click', function (e) {
	// 			window.location.replace("/economie-subscriber/index.html");
	// 		});
	// 		$('.lang-en').on('click', function (e) {
	// 			window.location.replace("/economics-subscriber/");
	// 		});
	// 	}, 500);
	// });