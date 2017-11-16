<div class="header">
    <div class="header-inner">
        <div class="header-flex">
            <h1 class="header-logo">
                <a href="/" title="mipgo logo">mipgo</a>
            </h1>

            <div class="header-nav">
                <ul class="header-nav-list">
                    {{each headerNav}}
                        {{if $value.text == page.title}}
                            <li><a class="current" href="{{ $value.url }}">{{ $value.text }}</a></li>
                        {{else}}
                            <li><a href="{{ $value.url }}">{{ $value.text }}</a></li>
                        {{/if}}
                    {{/each}}
                </ul>
            </div>

            <button class="header-mobile-nav-toggle" on="tap:right-sidebar.open" role="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</div>
