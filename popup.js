function openPopup(urlString) {
	var w = 640;
    var h = 480;
    var left = (screen.width/2)-(w/2);
    var top = (screen.height/2)-(h/2); 

    chrome.windows.create({'url': urlString, 'type': 'popup', 'width': w, 'height': h, 'left': left, 'top': top} , function(window) {
    });
}
$("#shortcuts").click(function(){
	$(".menu").fadeOut(300);
	setTimeout(function(){
		$(".subMenu").fadeIn(300);
	},320);
});
$("#chromeButton").click(function() {
	openPopup("chrome.html");
});
$("#ieButton").click(function() {
	openPopup("ie.html");
});
$("#backButton").click(function() {
	$(".subMenu").fadeOut(300);
	setTimeout(function() {
		$(".menu").fadeIn(300);
	},320);
});
$("#AC").click(function(){
	openPopup("autocorrect.html");
});
$("#QC").click(function(){
	openPopup("qualitycontrol.html");
});
$("#about").click(function(){
    openPopup("about.html");
});