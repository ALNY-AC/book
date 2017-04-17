var gui = require('nw.gui');
//require('nw.gui').Window.get().maximize()
var menubar = new gui.Menu({
	type: 'menubar'
});

var sub1 = new gui.Menu();
var sub2 = new gui.Menu();
var sub3 = new gui.Menu();

sub1.append(new gui.MenuItem({

	label: '更新程序',

	click: function() {
		location.reload(true);
		localStorage.url = window.location.href;
		window.location.href = "index.html";
	}

}));
sub1.append(new gui.MenuItem({

	label: '关于起源手册',

	click: function() {
		window.open("about.html");
	}

}));

sub2.append(new gui.MenuItem({

	label: '刷新',

	click: function() {
		location.reload(true);

	}

}));

sub3.append(new gui.MenuItem({

	label: '手册列表',

	click: function() {
		window.open("list.html");
	}

}));
sub3.append(new gui.MenuItem({

	label: '手册管理器',

	click: function() {
		window.open("tool.html");
	}

}));

menubar.append(new gui.MenuItem({
	label: '起源手册',
	submenu: sub1,
}));
menubar.append(new gui.MenuItem({
	label: '工具',
	submenu: sub2,
}));

menubar.append(new gui.MenuItem({
	label: '列表',
	submenu: sub3,
}));

var win = gui.Window.get();

win.menu = menubar;