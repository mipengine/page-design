<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <title>{{ page.title || 'Hello World' }}</title>
    <link rel="stylesheet" href="https://mipcache.bdstatic.com/static/v1/mip.css">
    <link rel="canonical" href="{{ page.canonical || 'https://www.mipengine.org/' }}">
    {{if style}}
        <style mip-custom>
            {{@ style }}
        </style>
    {{/if}}
    <noscript>
        <style mip-officialrelease>
            body {
                -webkit-animation: none;
                   -moz-animation: none;
                    -ms-animation: none;
                        animation: none;
            }
        </style>
    </noscript>
</head>
