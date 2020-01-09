function loadpyjs(jsname, onload){
var d = document, js=d.createElement('scr'+'ipt');
js.type = 'text/javascript';
js.async = false;
if(arguments.length > 1){
    js.onload=onload;
}
js.setAttribute('src', 'https://cdn.jsdelivr.net/gh/cadmuxe/pinyinjs@2d2791dc3158b624a4dafdf887e4ca4633708df5/' + jsname);
d.head.appendChild(js);
}
function loadpyjss(cssurl){
  var d= document, css=d.createElement('link');
  css.rel  = 'stylesheet';
    css.type = 'text/css';
    css.href = cssurl;
    css.media='all';
    d.head.appendChild(css);
}

loadpyjss('https://cdn.jsdelivr.net/gh/cadmuxe/pinyinjs/simple-input-method/simple-input-method.css')
loadpyjs('dict/pinyin_dict_notone.js');
loadpyjs('pinyinUtil.js');
loadpyjs('simple-input-method/simple-input-method.js',function(){
    console.log("Script loaded");
    SimpleInputMethod.init('.edit_area');
});
