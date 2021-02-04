function getCurrentTabUrl(callback)
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
    {
        if(callback) callback(tabs.length ? tabs[0].url: null);
    });
}

getCurrentTabUrl(function (val) {
	try {
		new QRCode(document.getElementById("qrcode"), val);
	} catch (error) {
		console.log("error", error);
	}
});


