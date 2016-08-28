$(function(){
	
	$('.btn a').click(function(){
	var find = $(this).attr('href');
	$('.pic img').attr('src',find);
	return false;
});

	// $('.pic li:gt(0)').css('display','none')
	// $('.btn li:eq(0)').click(function(){
	// $('.pic li:eq(0)').css('display', 'block').siblings().css('display', 'none');
	// });
	// $('.btn li:eq(1)').click(function(){
	
	// $('.pic li:eq(1)').css('display', 'block').siblings().css('display', 'none');
	// });
	// $('.btn li:eq(2)').click(function(){

	// $('.pic li:eq(2)').css('display', 'block').siblings().css('display', 'none');
	// });
	// $('.btn li:eq(3)').click(function(){
	
	// $('.pic li:eq(3)').css('display', 'block').siblings().css('display', 'none');
	// });
	// $('.btn li:eq(4)').click(function(){
	
	// $('.pic li:eq(4)').css('display', 'block').siblings().css('display', 'none');
	// });
})