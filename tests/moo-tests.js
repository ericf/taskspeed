window.tests = {
	
	"make" : function(){
		//	in a 250 iteration loop:
		//		create an unordered lists with the class "fromcode"
		//		append it to the body 
		//		add three li's with the words "one", "two", "three", respectively.
		//	return the result of the selector ul.fromcode
		for(var i = 0; i<250; i++){
			
			new Element('ul', {'class':'fromcode'})
				.inject(document.body)
				.adopt(
					new Element('li', { html:'one' }),
					new Element('li', { html:'two' }),
					new Element('li', { html:'three' })
				)
			;
		}
		return $$('ul.fromcode').length;
	},
	
	"indexof" : function(){
		// in a 20-iteration for loop:
		//		find the node with id="setid150"
		//		find all the ul's in the DOM
		//		locate the index of the found node in the list of nodes
		//	return that index
		var id,ul,index;
		for(var i = 0; i<20; i++){
			id = $('setid150');
			index = $$('ul').indexOf(id);
		}
		return index;
	},
	
	"bind" : function(){
		//	connect onclick to every first child li of ever ul (suggested: "ul > li")
		//
		//	return the length of the connected nodes
		return $$('ul > li').addEvent('click', $empty).length;
	},
	
	"attr" : function(){
		// find all ul elements in the page. 
		// generate an array of their id's
		// return the length of that array
		return $$('ul').map(function(el){
			return el.id ? el.id : null;
		}).length;
	},
	
	"bindattr" : function(){
		//	connect a mouseover event to every first child li of every 
		//	ul (suggested: "ul > li")
		//	set the rel="" attribute of those nodes to 'touched'
		//	disconnect the mouseover event
		//	return the length of the connected nodes
		return $$('ul > li').map(function(el){
			return el.addEvent('mouseover', $empty).set('rel','touched').removeEvent('mouseover', $empty);
		}).length;
	},

	"table": function(){
		// in a 40-iteration for loop:
		//		create a table with the class "madetable", and append it to the DOM
		//		add a row with one cell to the table. the cell content should be "first"
		//		add a new cell before the first cell in the row.
		//
		//	return the length of the query "tr td"
		for(var i = 0; i<40; i++){
			
			new Element('table',{ 'class':'madetable' })
				.inject(document.body)
				.grab(
					new Element('tr')
						.grab( new Element('td',{ html:'first' }) )
						.grab( new Element('td'), 'top')
				)
			;
		}
		return $$('tr td').length;
	},
	
	"addanchor" : function(){
		//	find all the first children li's of all nodes with class="fromcode" (created
		//	by previous test)
		//	append an anchor node with the text 'link' pointing to example.com
		//
		//	return length of found nodes (that which had anchors appended)
		//	appendText
		return $$('.fromcode > li').map(function(el){
			return el.grab(new Element('a',{ html:'link', href:'http://example.com' }));
		}).length;
	},

	"alt-add" : function(){
		//	same as addanchor, but providing an alternate method. duplicate if need be.
		//	
		//	return length of found nodes (that which had anchors appended)
	},
	
	"create" : function(){
		//	in a 500 iteration loop:
		//		locate the <body> element and append a new <div>
		//			- the attribute rel="foo" must exist
		//			- the inner content must be 'test'
		for (var i = 0; i<500; i++){
			$(document.body).grab(new Element('div', {rel: 'foo', html: 'test'}));
		}
		return $$("[rel^='foo']").length;
		//	return the length of the matches for the selectore "[rel^='foo']"		
	},
	
	"append" : function(){
		//	in a 500 iteration loop:
		//		create a new <div> with the same critera as 'create'
		//			- NOTE: rel needs to be == "foo2"
		//		then append to body element (no caching)
		for (var i = 0; i<500; i++){
			$(document.body).grab(new Element('div', {rel: 'foo2'}));
		}
		return $$('div[rel^="foo2"]').length;
		//	return then length of the matches from the selector "div[rel^='foo2']" 
	},
	
	"addclass-odd" : function(){
		// locate all div elements on the page
		//	add the class "added" to those divs
		//	add the class "odd" to the odd divs in the selection
		return $$('div').map(function(d, i){
			d.addClass('added');
			if (i % 2) return d.addClass('odd');
		}).length;
		// return the lenght of the odd found divs
	},
	
	"style": function(){
		//	find all nodes with the class "added"
		//	set those nodes' style properties:
		//		background-color: #ededed
		//		color: #fff
		return $$('.added').setStyles({'background-color': '#ededed', 'color': '#fff'}).length;
		//	return the length of the modified nodes.
	},
	
	"confirm-added" : function(){
		// return the length of the query "div.added"
		return $$('div.added').length;
	},
	
	"removeclass": function(){
		// find all nodes with the class "added"
		// remove the class "added"
		return $$('div.added').removeClass('added').length;
		// return the length of modified nodes 
	},
	
	"sethtml": function(){
		// replace the content of all div elements with "<p>new content</p>"
		return $$('div').set('html', "<p>new content</p>").length;
		// return the length of matched divs
	},
	
	"sethtml-alt" : function(){
		// find all nodes with the class "odd"
		// reduce that list with a modulo of 50
		//		(eg: Array.filter(function(n,i){ return i % 50 === 0 })))
		// set the content of the matches to "<p>alt content</p>"
		return $$('div.odd').filter(function(div,i){
			if (i % 50 === 0) div.set('html', "<p>alt content</p>");
		}).length;
		// retun the length of the reduced matches
	},
	
	"insertbefore" : function(){
		//	find all anchors in the class "fromcode" (.fromcode a)
		//		add a <p> element in the dom before the matched anchors
		//			- the content should equal "A Link"
		return $$('.fromcode a').map(function(a){
			new Element('p', {html: 'A Link'}).injectBefore(a);
		}).length;
		//	return the length of the found anchors.
	},
	
	"insertafter" : function(){
		//	find all anchors in the class "fromcode" (.fromcode a)
		//		add a <p> element in the dom after the matched anchors
		//			- the content should equial "After Link"
		return $$('.fromcode a').map(function(a){
			new Element('p', {html: 'A Link'}).injectAfter(a);
		}).length;
		//	return the results of a ".fromcode a + p" selector 
	},
	
	destroy: function(){ 
		// destroy all the nodes with the class "fromcode"
		// return the length of the destroyed nodes
		return $$('fromcode').dispose().length;
	},
	
	finale: function(){
		// empty the body element of all elements
		return $$('body *').dispose().length;
		// return the length of the query "body *"
	}
	
}