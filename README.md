# hexo-staging

This plugin adds simple staging to [Hexo].

## Installation

``` bash
npm install hexo-staging --save
```

## Configuration

Extend your ```_config.yml``` with ```stagings```; e.g.

```
stagings:
  production:
    url: https://example.com
  development:
    url: http://example.local
```

This example switch url depending on staging

``` bash
hexo config url --staging production
-> https://example.com

hexo config url --staging development
-> http://example.local
```

You can overwirte every config attribute widthin a staging

## Cli

You can use it with hexo's commands

```bash
hexo config --staging development
hexo deploy --staging development
hexo generate --staging development
hexo server --staging development
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

I tested this plugin exactly with one hexo instance and only with 3.1.1 ;) 

So i would recommend it *not for production use*.

Please drop my a line, if you used it:
bastian.pertz@gmail.com 

## License

MIT

[Hexo]: http://hexo.io/
