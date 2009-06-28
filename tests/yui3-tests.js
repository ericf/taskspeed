
window.tests = {
	
	"make" : function(){	
		var ul, i;
		
		for (i = 0; i < 250; i++){
			ul = Y.Node.create('<ul class="fromcode"></ui>');
			ul.set('id', 'setid'+i).append('<li>one</li><li>two</li><li>three</li>');
			Y.get('body').appendChild(ul);
		}
		return Y.all('ul.fromcode').size();
	},
	
	"indexof" : function(){
		var uls, index, i;
		
		for (i = 0; i < 20; i++){
			index = Y.all('ul').indexOf(Y.get('#setid150'));
		}
		return index;
	},
	
	"bind" : function(){
		var subscriber = function(){},
			lis = Y.all('ul > li');
			
		lis.on('click', subscriber);
		return lis.size();
	},
	
	"attr" : function(){
		return Y.all('ul').get('id').length;
	},
	
	"bindattr" : function(){
		var nodes = Y.all('ul > li'),
			subscriber = function(){};
		
		nodes.on('mouseover', subscriber);
		nodes.set('rel', 'touched');
		nodes.detach('mouseover', subscriber);
		return nodes.size();
	},

	"table": function(){
		var body = Y.get('body'),
			table, i;
		
		for (i = 0; i < 40; i++) {
			table = Y.Node.create('<table class="madetable"></table>');
			body.appendChild(table);
			table.append('<tr><td>first</td></tr>').query('tr').prepend('<td></td>');
		}
		return Y.all('tr td').size();
	},
	
	"addanchor" : function(){
		return Y.all('.fromcode > li').append('<a href="http://example.com">link</a>').size();
	},

	"append" : function(){
		for ( var i = 0; i < 500; i++ ) {
			Y.get('body').appendChild(Y.Node.create('<div rel="foo2"></div>'));
		}
		return Y.all("div[rel^='foo2']").size();
	},
	
	"addclass-odd" : function(){
		return Y.all('div').addClass('added').odd().addClass('odd').size();
	},
	
	"style": function(){
		return Y.all('.added').setStyles({ 'background-color':'#ededed', 'color':'#fff' }).size();
	},
	
	"removeclass": function(){
		return Y.all('.added').removeClass('added').size();
	},
	
	"sethtml": function(){
		return Y.all('div').set('innerHTML', '<p>new content</p>').size();
	},
	
	"insertbefore" : function(){
		var nodes = Y.all('.fromcode a');
		
		nodes.each(function(){
			this.insert(Y.Node.create('<p>A Link</p>'), this);
		});
		return nodes.size();
	},
	
	"insertafter" : function(){
		var nodes = Y.all('.fromcode a');
		
		nodes.each(function(){
			this.insert(Y.Node.create('<p>After Link</p>'), this.next());
		});
		return nodes.size();
	},
	
	"destroy": function(){ 
		return Y.all('.fromcode').remove().size();
	},
	
	"finale": function(){
		Y.all('body *').remove();
		return Y.all('body *').size();
	}
	
};
