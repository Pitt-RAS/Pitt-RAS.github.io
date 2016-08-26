---
---

$(document).ready(function() {
    {% for album in site.data.gallery %}
        prepareFlickrAlbum("{{ album.albumID }}", "{{ album.htmlID }}", 999, undefined, 1);
    {% endfor %}
});

