$(function(){

	$('#map').click(function(e){
		var xpos = e.pageX-5;
		var ypos = e.pageY-5;
		var marker = $('<div class="marker"><p class="note"></p></div>');
		marker.css({top:ypos,left:xpos});
		$('#container').append(marker);
		var notePopup = $('<div class="popup">'+
						'<textarea class="note-text" autofocus></textarea>'+
						'<input type="submit" class="submit" value="Save note">'+
						'</div>');
		marker.after(notePopup);
		notePopup.css({top:ypos,left:xpos});
	});

	$(document).on('click','.marker',function(){
		this.remove();
	});

	$(document).on('mouseenter','.marker',function(){
		$(this).find('.note').show();
	});
	$(document).on('mouseleave','.marker',function(){
		$(this).find('.note').hide();
	});

	$(document).on('click','.submit', function(e){
		e.preventDefault();
		$(this).parent().prev().find('.note').text($(this).prev().val());
		$(this).parent().remove();
	});
	



});