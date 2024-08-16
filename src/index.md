---
title: "Arquitetura cívica tradicional"
excerpt: >-
  Documentário de arquitetura cívica publicada na bibliografia de referência.
layout: "layouts/base.njk"
locale: "pt-BR"
header:
  overlay_image: "/assets/media/an-overlay.jpg"
  overlay_filter: 0.7
  caption: "Antiga sede do Arquivo Nacional à praça da República, 1905"
triptych: especiais
pagination:
  data: collections.civico
  reverse: true
  size: 6
  alias: posts
templateEngineOverride: njk,md
---

# Coleções especiais # {.wide}

```{=html}
{% include "partials/triptych.njk" %}
```

# {{ schemata.ui_text[locale].recent_posts }} # {.mb-4 .wide}

```{=html}
<div class="row row-cols-md-2 row-cols-xl-3 g-3 mx-5">
{% for post in pagination.items %}
  {% include "partials/album.njk" %}
{% endfor %}
  <a type="button" href="/civico/" class="mx-auto my-5 btn btn-outline-primary btn-lg">
    {{ schemata.ui_text[locale].load_all }}
  </a>
</div>
```
