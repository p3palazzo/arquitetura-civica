---
title: "Cronologia"
author: "Pedro Palazzo"
author_profile: false
excerpt: >-
  Por uma nova cronologia da construção vernacular, ou
  por que a nossa arquitetura tradicional é mais recente do que parece.
layout: "layouts/base.njk"
classes: "wide"
permalink: /cronologia/
templateEngineOverride: njk,md
css: [ "/assets/timelinejs/css/timeline.css" ]
---

---
nocite: "@palazzo:2023cronologia"
---

{% set timelineData %}
{
  "title": {
    "text": {
      "headline": "Linha do tempo aproximada das casas"
    }
  },
  "events": [
  {% for post in collections.civico %}
    {
      "media": {
        "url": "{{ post.data.header.teaser }}",
        "link": "{{ post.url }}"
      },
    {% for event in post.data.coverage.temporal.events %}
      {% if event.type == "creation" %}
          "start_date": {
            "year": "{{ event.start_date.year }}"
          },
          {% if event.display_date %}
          "display_date": "{{ event.display_date }}",
          {% endif %}
          "text": {
            "headline": "{{ post.data.title }} ({{ post.data.coverage.spatial.location.city }})",
            "text": "{{ post.data.excerpt }}"
          }
      {% endif %}
    {% endfor %}
    }{% if not loop.last %},{% endif %}
  {% endfor %}
  ]
}
{% endset %}
<div class="w-100">
{% include "partials/timeline.njk" %}
</div>
