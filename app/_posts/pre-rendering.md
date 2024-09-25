---
title: 'Two Forms of Pre-rendering'
date: '2024-08-03'
id: 'asd'
author: 'Eric'
excerpt: 'bla bla bla'
slug: 'post-2'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

For example, you should understand code like this:

```js
const basics = 'Okay, that should not be too difficult actually';

function printBasics() {
  console.log(basics):
}

printBasics();
```

Learn more about it [here](https://academind.com).

```python
# Colocar las casas en el mapa:
for i in range(len(dataset)):
    if dataset['ocean_proximity'].iloc[i]=='INLAND':
        folium.Circle(location=(dataset['latitude'].iloc[i], dataset['longitude'].iloc[i]),
                  radius=dataset['population'].iloc[i]/2,
                  stroke=False,
                 fill_color='red',
                 fill_opacity=0.3,
                  ).add_to(map_California)
    if dataset['ocean_proximity'].iloc[i]=='NEAR BAY':
            folium.Circle(location=(dataset['latitude'].iloc[i], dataset['longitude'].iloc[i]),
                    radius=dataset['population'].iloc[i]/2,
                    stroke=False,
                    fill_color='blue',
                    fill_opacity=0.3,
                    ).add_to(map_California)
    if dataset['ocean_proximity'].iloc[i]=='NEAR OCEAN':
            folium.Circle(location=(dataset['latitude'].iloc[i], dataset['longitude'].iloc[i]),
                    radius=dataset['population'].iloc[i]/2,
                    stroke=False,
                    fill_color='purple',
                    fill_opacity=0.3,
                    ).add_to(map_California)
```