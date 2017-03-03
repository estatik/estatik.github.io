---
---
var disqus_config = function () {
this.page.url = {{ disqus_page_url }};
this.page.identifier = {{ disqus_page_url }};
};
(function() {
var d = document, s = d.createElement('script');
s.src = 'https://estatic.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();