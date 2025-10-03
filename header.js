const template = document.createElement('template')
template.innerHTML=
'<header><div class="wrapper"><div class="logo"><img src="assets/images/mrkilogo.png" style="width:192px;height:108px;"></div><nav><li><a href="index.html">Home</a><li><a href="download.html">Download</a></li><li><a href="socials.html">Socials</a></li></nav></div></header>'
document.body.appendChild(template.content);