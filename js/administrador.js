$(document).ready(function(){
	// Activate tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	// Select/Deselect checkboxes
	var checkbox = $('table tbody input[type="checkbox"]');
	$("#selectAll").click(function(){
		if(this.checked){
			checkbox.each(function(){
				this.checked = true;                        
			});
		} else{
			checkbox.each(function(){
				this.checked = false;                        
			});
		} 
	});
	checkbox.click(function(){
		if(!this.checked){
			$("#selectAll").prop("checked", false);
		}
	});
});

function mostrarpanel (panel){
	$("#panel_1").hide();
	$("#panel_2").hide();
	$("#panel_3").hide();
	$(".btn_admin").removeClass("btn_admin_active");

	$('#'+panel).slideToggle('slow');
	$('#boton_'+panel).addClass('btn_admin_active');
}

function abrirModal(){
	$("body").addClass("modal-open");
}

function cerrarModal(){
	$("body").removeClass("modal-open");
}