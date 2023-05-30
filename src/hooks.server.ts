const fakeData = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" href="./favicon.png" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body data-sveltekit-preload-data="hover">
		<div>
		<header><nav><ul><li><a href="/">Home</a></li> <li><a href="/about">About</a></li></ul></nav></header>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>			
		</div>
	</body>
</html>
`;

export async function handle({ event, resolve }) {
    console.log('pathname: ', event.url.pathname);    
    if (event.url.pathname === '/') {
        console.log('return fake data');
        
        return new Response(fakeData, {
            headers: {
                'content-type': 'text/html'
            }
        });

    }
   return resolve(event);
}