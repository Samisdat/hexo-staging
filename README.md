# hexo-staging

This plugin adds simple staging to [Hexo].

## Installation

``` bash
$ npm install hexo-staging
```

## Configuration

Extend your ```_config.yml``` with properties by staging.

```
stagings:
  production:
    url: https://example.com
  development:
    title: Samisdat Development
    url: http://example.local
```


## Tag

```
<% if (true === is_staging('development')){ %>
	<%- css('style.css') %>
<% } else { %>        
	<%- css('style.min.css') %>
<% } %>
  
```

## Compatibility

Tested with Hexo 3.1.1

I tested this plugin with just one installation and only with 3.1.1 ;) 
So i would recommend it not for production use.

Please drop my a line, if you used it:
bastian.pertz@gmail.com 

## License

MIT

[Hexo]: http://hexo.io/