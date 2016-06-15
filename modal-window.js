	jQuery(function($){
		var fx = {
			'initModal': function(){
				if($(".modal-window").length == 0){
					$("<div>")
							.attr("id", "jquery-overlay")
							.css({
								"background":"#000 repeat-x",
								"opacity": "0.7",
								"position":"fixed",
								"height":"100%", 
                                "width":"100%",
                                "left" : 0,
                                "top":0
							})
							.fadeIn("slow")
							.appendTo("body");						
					return $("<div>")
							.addClass("modal-window")
							.fadeIn("slow")
							.appendTo("body");							
				}else{
					return $(".modal-window");
				}
			}
		}
	
		$(".mainblocktext a")
		.live("click", function(event){
			event.preventDefault();
			var data = $(this).attr("href").replace("<?=Kohana::$base_url?>", "");
			var modal = fx.initModal();
			$("<a>").attr("href", "#")
					.addClass("modal-close-btn")
					.html("&times;")
					.click(function(event){
						event.preventDefault();
						$(".modal-window").fadeOut("slow", 
							function(){$(this).remove();});
						$("#jquery-overlay").fadeOut("slow", 
							function(){$(this).remove();});
					})
					.appendTo(modal);
			$.ajax({
				type: "POST",
				url: "<?=Kohana::$base_url?>tovars/tovarsajax",
				data: "id=" + data,
				success: function(data){
					modal.append(data);
				},
				error: function(msg){
					modal.append(msg);
				}
			});
		});
	}
	)
