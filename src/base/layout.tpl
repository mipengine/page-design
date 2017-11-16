<!DOCTYPE html>
<html lang="{{ page.lang || 'zh-cn' }}" mip>
{{block 'head'}}{{include './inc/head.tpl'}}{{/block}}
<body>
    {{block 'header'}}{{/block}}
    {{block 'content'}}{{/block}}
    {{block 'footer'}}{{/block}}
    {{block 'scripts'}}{{include './inc/scripts.tpl'}}{{/block}}
</body>
</html>
