// let editor = document.getElementById("editor");
let lan = document.getElementById("language");

// function write(){
//   editor.innerHTML = "Write Programe in " + lan.value;  
// }

// lan.addEventListener('click', write);
var editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");

// let k ;
// function write(){
//   k  = lan.value;
//   // editor.session.setMode("ace/mode/"+k);
//   console.log(k);
//   ace.edit(editor, {
//     theme: "ace/theme/" + "cobalt",
//     mode: "ace/mode/" + k ,
//   });
// }
// write();
let k ;
function write(){
  k  = lan.value;
  editor.session.setMode("ace/mode/" + k);

  let m = editor.getValue();
  editor.setValue(m);

  console.log(m);
}
write();




lan.addEventListener('click', write);

  







// <select id="mode" size="1" class="code-type">
// 	<option class="home-text2" value="actionscript">ActionScript</option>
// 	<option class="home-text2" value="apache_conf">Apache Conf</option>
// 	<option class="home-text2" value="assembly_x86">Assembly x86</option>
// 	<option class="home-text2" value="c_cpp">C and C++</option>
// 	<option class="home-text2" value="clojure">Clojure</option>
// 	<option class="home-text2" value="coffee">CoffeeScript</option>
// 	<option class="home-text2" value="csharp">C#</option>
// 	<option class="home-text2" value="css">CSS</option>
// 	<option class="home-text2" value="dart">Dart</option>
// 	<option class="home-text2" value="diff">Diff</option>
// 	<option class="home-text2" value="dockerfile">Dockerfile</option>
// 	<option class="home-text2" value="erlang">Erlang</option>
// 	<option class="home-text2" value="ejs">EJS</option>
// 	<option class="home-text2" value="gitignore">Gitignore</option>
// 	<option class="home-text2" value="golang">Go</option>
// 	<option class="home-text2" value="groovy">Groovy</option>
// 	<option class="home-text2" value="haml">HAML</option>
// 	<option class="home-text2" value="handlebars">Handlebars</option>
// 	<option class="home-text2" value="haskell">Haskell</option>
// 	<option class="home-text2" value="html">HTML</option>
// 	<option class="home-text2" value="html_ruby">HTML (Ruby)</option>
// 	<option class="home-text2" value="ini">INI</option>
// 	<option class="home-text2" value="jade">Jade</option>
// 	<option class="home-text2" value="java">Java</option>
// 	<option class="home-text2" value="javascript">JavaScript</option>
// 	<option class="home-text2" value="json">JSON</option>
// 	<option class="home-text2" value="jsp">JSP</option>
// 	<option class="home-text2" value="latex">LaTeX</option>
// 	<option class="home-text2" value="less">LESS</option>
// 	<option class="home-text2" value="lisp">Lisp</option>
// 	<option class="home-text2" value="lua">Lua</option>
// 	<option class="home-text2" value="lucene">Lucene</option>
// 	<option class="home-text2" value="makefile">Makefile</option>
// 	<option class="home-text2" value="matlab">MATLAB</option>
// 	<option class="home-text2" value="markdown">Markdown</option>
// 	<option class="home-text2" value="mysql">MySQL</option>
// 	<option class="home-text2" value="objectivec">Objective-C</option>
// 	<option class="home-text2" value="perl">Perl</option>
// 	<option class="home-text2" value="pgsql">pgSQL</option>
// 	<option class="home-text2" value="php">PHP</option>
// 	<option class="home-text2" value="prolog">Prolog</option>
// 	<option class="home-text2" value="python">Python</option>
// 	<option class="home-text2" value="r">R</option>
// 	<option class="home-text2" value="rdoc">RDoc</option>
// 	<option class="home-text2" value="ruby">Ruby</option>
// 	<option class="home-text2" value="rust">Rust</option>
// 	<option class="home-text2" value="sass">SASS</option>
// 	<option class="home-text2" value="scheme">Scheme</option>
// 	<option class="home-text2" value="scss">SCSS</option>
// 	<option class="home-text2" value="sh">Shell</option>
// 	<option class="home-text2" value="sql">SQL</option>
// 	<option class="home-text2" value="text">Text</option>
// 	<option class="home-text2" value="vbscript">VBScript</option>
// 	<option class="home-text2" value="verilog">Verilog</option>
// 	<option class="home-text2" value="xml">XML</option>
// 	<option class="home-text2" value="yaml">YAML</option>
// </select>