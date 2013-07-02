(function($) {
	$(function() {

		function getFullBookName(bookcode) {
			var fullbookname;
			for ( var int2 = 0; int2 < legends.length; int2++) {
				if (bookcode == legends[int2]['Code']) {
					var fullformsplit = legends[int2]['Full Form'].split('-');
					if (fullformsplit[0] == 'Prem Ras Madira ') {
						return fullformsplit[0];
					} else {
						return legends[int2]['Full Form'];
					}
				}
			}
		}

		function getMadhuriName(bookcode) {
			var fullbookname;
			for ( var int2 = 0; int2 < legends.length; int2++) {
				if (bookcode == legends[int2]['Code']) {
					var fullformsplit = legends[int2]['Full Form'].split('-');
					if (fullformsplit[0] == 'Prem Ras Madira ') {
						return fullformsplit[1];
					} else {
						return null;
					}
				}
			}
		}

		function clear() {
			$("#englishtitle").html('');
			$("#book").html('');
			$("#madhuri").html('');
			$("#pagenumber").html('');
			$("#padnumber").html('');
			$("#sbook").html('');
			$("#spagenumber").html('');
			$("#spadnumber").html('');
		}

		function hideAll() {
			$("#kirtandetails").hide();
			
			$("#kirtandetailsmain").hide();
			$("#rowenglishtitle").hide();
			$("#rowbook").hide();
			$("#rowmadhuri").hide();
			$("#rowpagenumber").hide();
			$("#rowpadnumber").hide();
			$("#rowsbook").hide();
			$("#rowspagenumber").hide();
			$("#rowspadnumber").hide();
		}

		function myFunction(selection) {
			clear();
			hideAll();
			var title_parts = selection.split("_");
			
			if(title_parts[0]){
				$("#kirtandetails").show();
				$("#kirtandetailsmain").show();
				$("#englishtitle").html(title_parts[0]);
				$("#rowenglishtitle").show();
			}
			
			if(title_parts[1]){
			var bookcode;
			var i;
			if (title_parts[1] == 'pr1' || title_parts[1] == 'pr2') {
				i = 2;
			} else {
				i = 1;
			}
			bookcode = title_parts[i++];

			$("#book").html(getFullBookName(bookcode));
			$("#rowbook").show();
			}

			if (getMadhuriName(bookcode)) {
				$("#madhuri").html(getMadhuriName(bookcode));
				$("#rowmadhuri").show();
			}
			if((title_parts[i])){
				$("#pagenumber").html(title_parts[i++]);
				$("#rowpagenumber").show();
			}
			
			
			if (title_parts[i]) {
				$("#padnumber").html(title_parts[i++]);
				$("#rowpadnumber").show();
			}

			if (title_parts[i]) {
				$("#sbook").html(getFullBookName(title_parts[i++]));
				$("#rowsbook").show();
			}

			if (title_parts[i]) {
				$("#spagenumber").html(title_parts[i++]);
				$("#rowspagenumber").show();
			}
			if (title_parts[i]) {
				$("#spadnumber").html('');
				$("#rowspadnumber").show();
			}

		}
		
		hideAll();

		$('#myDropdown').empty(); // empty the drop down (if necessarry)
		$('#myDropdown').append('<option selected></option>');
		$(titles).each(function(iIndex, sElement) {
			$('#myDropdown').append('<option>' + sElement + '</option>');
		});
		$('select').selectToAutocomplete();
		$("#tags").autocomplete({
			source : titles,
			select : function(event, ui) {
				myFunction(ui.item.value);
			}
		});
		$('#myDropdown').change(function() {
			myFunction($("#myDropdown").val());
		});

		$("#myinput").hide();

		$("#chbox").change(function() {
			if ($(this).attr("checked")) {
				// call the function to be fired
				// when your box changes from
				// unchecked to checked
				$("#myinput").show();
				myFunction($("#tags").val());
				$("#myselect").hide();
				// $("#tags").val('');
			} else {
				// call the function to be fired
				// when your box changes from
				// checked to unchecked
				$("#myinput").hide();
				$("#myselect").show();
				myFunction($("#myDropdown").val());
				// $("#myDropdown").val('');
				// $('#myDropdown option:eq(0)').attr('selected','selected');

			}
		});

	});
})(jQuery);