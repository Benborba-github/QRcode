
chrome.contextMenus.create({
    title: '生成二维码', // %s表示选中的文字
    contexts: ['selection',"link","editable"], // 只有当选中文字时才会出现此右键菜单
    onclick: function(val){
        if (val.linkUrl) {
            chrome.tabs.create({url: "html/index.html?selectionText=" + val.linkUrl });
        }else if (val.selectionText) {
            chrome.tabs.create({url: "html/index.html?selectionText=" + val.selectionText });
        }
    }
});




