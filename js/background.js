
chrome.contextMenus.create({
    title: '生成二维码：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function(val){
        chrome.tabs.create({url: "html/index.html?selectionText=" + val.selectionText });
    }
});




