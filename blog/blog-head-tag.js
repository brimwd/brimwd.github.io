class blogHead extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
      <meta name="description" content="UX, web design, & front-end development portfolio for Leo Donahue, Product Designer based in Silicon Valley, California">
      <meta name="keywords" content="product,product design,manager,UX,UX design,UX designer,user experience,design,designer,UI,HTML,CSS,JavaScript,Illustrator,Adobe,Photoshop,freelance,contractor,developer,front-end,front end,portfolio,graphic design,graphics,web,web development,for hire,resume,jQuery,storyboarding,prototyping,research,user research,researcher,information architecture,taxonomy">
      <meta name="author" content="Leo Donahue">
      <meta name="format-detection" content="telephone=no">
      <!-- <meta property='og:image' content='/images/.png'/> -->

      <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
      <base href="../">

      <!-- Google tag (gtag.js) -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DL67DCGTZ7"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-DL67DCGTZ7');
      </script>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
      <link rel="stylesheet" href="fontawesome/css/all.css" media="all">
      <link rel="stylesheet" type="text/css" href="blog.css">
      <script type="text/javascript" src="js/jquery.min.js"></script>
      <script type="text/javascript" src="js/toggle.js"></script>
    `;
  }
}

customElements.define('blog-head', blogHead);
