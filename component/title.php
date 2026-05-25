<!Doctype html>
<html lang="en" x-data="app()" :class="{'dark':dark}" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="CardzLiera" />
    <title>Ricardo Liera Jr - Full Stack developer</title>
    <link rel="shortcut icon" href="./assets/img/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="./assets/css/style.css" />
    <script src="./assets/js/tailwind.js"></script>
    <script defer src="./assets/js/alpine.js"></script>
    <script>
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            fontFamily: {
              display: ["PT Sans", "sans-serif"],
              body: ["DM Sans", "sans-serif"],
            },
            colors: { accent: "#FF6B2B", "accent-light": "#FF8F5C" },
          },
        },
      };
    </script>
  </head>