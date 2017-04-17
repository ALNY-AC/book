function b(box, listBox) {

	var h_Json = {
		em: {},
		length: 0
	};

	$(box).find('*').each(function() {
		var em = $(this);

		for(var j = 1; j <= 6; j++) {

			if(em[0].localName == 'h' + j) {
				h_Json.em[h_Json.length] = em;
				h_Json.length++;
			}

		}

	})
	console.log(h_Json);

	for(var i = 0; i < h_Json.length; i++) {

		var id = 'sq' + i;

		h_Json.em[i].attr('id', id);
		var a = $('<a></a>');
		a.attr('href', '#' + id);
		a.attr('id', id);
		a.addClass('hUrl');
		a.text(h_Json.em[i].text());

		switch(h_Json.em[i][0].localName) {
			case 'h1':

				var ul1 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);
				ul1.append(li);

				$(listBox).append(ul1);

				break;
			case 'h2':

				var ul1 = $('<ul></ul>');
				var ul2 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);;
				ul2.append(li);
				ul1.append(ul2);

				$(listBox).append(ul1);

				break;
			case 'h3':
				var ul1 = $('<ul></ul>');
				var ul2 = $('<ul></ul>');
				var ul3 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);;
				ul3.append(li);
				ul2.append(ul3);
				ul1.append(ul2);

				$(listBox).append(ul1);
				break;
			case 'h4':

				var ul1 = $('<ul></ul>');
				var ul2 = $('<ul></ul>');
				var ul3 = $('<ul></ul>');
				var ul4 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);;
				ul4.append(li);
				ul3.append(ul4);
				ul2.append(ul3);
				ul1.append(ul2);

				$(listBox).append(ul1);
				break;
			case 'h5':
				var ul1 = $('<ul></ul>');
				var ul2 = $('<ul></ul>');
				var ul3 = $('<ul></ul>');
				var ul4 = $('<ul></ul>');
				var ul5 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);;
				ul5.append(li);
				ul4.append(ul5);
				ul3.append(ul4);
				ul2.append(ul3);
				ul1.append(ul2);
				$(listBox).append(ul1);
				break;
			case 'h6':
				var ul1 = $('<ul></ul>');
				var ul2 = $('<ul></ul>');
				var ul3 = $('<ul></ul>');
				var ul4 = $('<ul></ul>');
				var ul5 = $('<ul></ul>');
				var ul6 = $('<ul></ul>');

				var li = $('<li></li>');
				li.html(a);;
				ul6.append(li);
				ul5.append(ul6);
				ul4.append(ul5);
				ul3.append(ul4);
				ul2.append(ul3);
				ul1.append(ul2);
				$(listBox).append(ul1);

				break;
			default:
				break;
		}

	}

}