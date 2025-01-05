function configureSinglePage() {
	$(`head`)
		.prepend($(`<script async src="https://www.googletagmanager.com/gtag/js?id=G-DL67DCGTZ7"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-DL67DCGTZ7');</script>`))
		.prepend($(`<link rel="stylesheet" type="text/css" href="style.css">`))
		.prepend($(`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">`))
		.prepend($(`<script src="https://kit.fontawesome.com/fe72761270.js" crossorigin="anonymous"></script>`))
		.prepend($(`<meta charset="UTF-8">`))
		.prepend($(`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">`))
		.prepend($(`<meta name="author" content='B Donahue ("Leo")'>`))
		.prepend($(`<meta name="description" content="UX, web design, & front-end development portfolio for Leo Donahue, UX Design Manager based in Tokyo, Japan">`))
		.prepend($(`<meta name="keywords" content="product,product design,manager,UX,UX design,UX designer,user experience,design,designer,UI,HTML,CSS,JavaScript,Illustrator,Adobe,Photoshop,freelance,contractor,developer,front-end,front end,portfolio,graphic design,graphics,web,web development,for hire,resume,jQuery,storyboarding,prototyping,research,user research,researcher,information architecture,taxonomy">`))
		.prepend($(`<meta name="format-detection" content="telephone=no">`));

	$(`.case-study`)
		.prepend($(`<nav class="mb-5"><a href="index.html"><img src="favicon.ico" />Portfolio</a></nav>`))
		.append(`<footer><p>Made by B Donahue ("Leo")</p><p><a href="https://linkedin.com/in/donahuebrian" target="_blank"><i class="fa-brands fa-linkedin fa-2x" aria-label="linkedin"></i></a> &bullet; <a href="mailto:hello@brownjuice.co"><i class="fa-solid fa-mailbox fa-2x" aria-label="email"></i></a> &bullet; <a href="sms:408-256-2334"><i class="fa-solid fa-sms fa-2x" aria-label="sms"></i></a></p></footer>`);

	// handle redirect hashes
	switch(location.hash) {
		case `#dynamicLoadFailed` :
			// handle case
			console.log(location.hash);
			break;
		case `#asyncError` :
			// handle case
			console.log(location.hash);
			break;
	}
	history.replaceState(null, document.title, window.location.pathname);
}
