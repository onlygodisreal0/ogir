---
layout: default
title: Главная
---

<div class="posts">
  {% for post in paginator.posts %}
  <article class="post">
    <h1 class="post-title">
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>
    </h1>

    <time datetime="{{ post.date | date_to_xmlschema }}" class="post-date">
      {{ post.date | date_to_string }}
    </time>

    {{ post.excerpt }}

    <a href="{{ post.url | relative_url }}">Читать далее...</a>
  </article>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ paginator.next_page_path | relative_url }}">Раньше</a>
  {% else %}
    <span class="pagination-item older">Раньше</span>
  {% endif %}
  {% if paginator.previous_page %}
    <a class="pagination-item newer" href="{{ paginator.previous_page_path | relative_url }}">Позже</a>
  {% else %}
    <span class="pagination-item newer">Позже</span>
  {% endif %}
</div>