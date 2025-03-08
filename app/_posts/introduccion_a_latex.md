---
slug: 'introduccion_a_latex'
id: 'latex-001'
date: "2024-08-04"
order: 2
title: "Introducción al mundo del LaTeX"
shortTitle: "Introducción"
author: "Eric Lucero"
coverImage: https://res.cloudinary.com/dcvnw6hvt/image/upload/v1741389125/elCronopio/cover_test-2_dnehhh.jpg
coverImageAlt: 'Imagen de cover del con el logo de latex y unas paginas'
excerpt: 'LaTeX es una herramienta poderosa para crear documentos de alta calidad, especialmente en el ámbito académico y técnico. Aprende a crear tu primer documento y descubre las ventajas de usar LaTeX para el control preciso del formato, las fórmulas'
doctype: ["latex","curso"]
---

LaTeX es un sistema de preparación de documentos de alta calidad, utilizado frecuentemente en la escritura de documentos científicos y técnicos debido a su capacidad para *manejar ecuaciones matemáticas* complejas, tablas y *referencias bibliográficas*.

![Logo de LaTeX {120x50}{priority}{caption: The LaTeX wordmark, typeset with LaTeX's \\(\LaTeX\\) macro}](https://res.cloudinary.com/dcvnw6hvt/image/upload/v1739810044/elCronopio/LaTeX_logo_dark_yorr5e.png)

> A diferencia de los editores de texto tradicionales, LaTeX utiliza un enfoque basado en etiquetas para formatear el contenido, lo que permite un control más preciso sobre el diseño del documento.

## Primer Documento LaTeX

El siguiente ejemplo es el clásico "Hello, World!" en LaTeX, que muestra cómo escribir un documento básico:

```latex
\documentclass{article}

\begin{document}

Hello, World! Este es un ejemplo simple de un documento en LaTeX.

\end{document}
```

- Rápido
- Básico 
- Fundamental 
- Como puedes ver

Como puedes ver este es un *gran inicio*. Puedes correr tus **propios proyectos** en [Overleaf](https://www.overleaf.com/) sin necesidad de descargar latex.


| Item              | In Stock | Price |
| :---------------- | :------: | ----: |
| Python Hat        |   True   | 23.99 |
| SQL Hat           |   True   | 23.99 |
| Codecademy Tee    |  False   | 19.99 |
| Codecademy Hoodie |  False   | 42.99 |

Antes de todo, asegúrate de instalar Latex en tu computadora. Puedes verlo en [esta entrada del blog](/posts/latex-002)

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole][1], and that means comfort.
 Me puedes encontrar en Twitter como [EricLuceroG](https://x.com/EricLuceroG).

[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"

### Testing algunos Md syntax

> Dorothy followed her through many of the beautiful rooms in her castle.
#### The quarterly results look great!
### Algunos tipos de énfasis:
* Uso de `<Strong/>`: Con **Doble Asterisco** o __Doble guion bajo__
* Uso de `<Em/>`: Con *Un Asterisco* o _Un guion bajo_


 #### The quarterly results look great!

 - Revenue was off the chart.
 - Profits were higher than ever.
 
*Everything* is going according to **plan**.

## Last but not least

| Periodo (horas) | Beneficio (euros) |
|:---------------:|:-----------------:|
|       498       |      33556.25     |
|       150       |      32682.86     |
|       219       |      33423.45     |
|       194       |      33826.80     |
|       276       |      33394.54     |
|       114       |      30228.00     |
|       374       |      36227.27     |
|       577       |      35596.80     |
|       132       |      30893.56     |
|       345       |      34458.21     |

# Some tables 

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Here's a simple footnote,[^1] and here's a longer$^{your text}$ one.[^bignote]

[^1]: This is the first footnote. \(2x\) $$2x$$

Try $^{your text}$ for superscript - $_{more text}$ for subscript

Normal
${super}$
$_{sub}$

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.