{{extend './_inc/layout.tpl'}}

{{block 'content'}}
<div class="components">
    <h1>组件列表</h1>

    <div class="components-list">
        <dl>
            {{each componentsList}}
                <dt><h2>#{{ $index + 1 }} {{ $value.title }}</h2></dt>
                <dd>
                    {{each $value.components val}}
                        <ul>
                            <li><mip-iframe height="{{ val.iframe.height }}" width="100" src="/html/{{ val.iframe.url }}" layout="fixed-height"></mip-iframe></li>
                            {{ set code = $imports.getComponentsCode(val.iframe.url) }}
                            {{if code}}
                            <li>代码：</li>
                            <li>
                                {{@ code }}
                            </li>
                            {{/if}}
                        </ul>
                    {{/each}}
                </dd>
            {{/each}}
        </dl>
    </div>
</div>
{{/block}}
