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
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
			<script>
				{
					__sveltekit_dev = {
						base: new URL(".", location).pathname.slice(0, -1),
						env: {}
					};
					const element = document.currentScript.parentElement;
					const data = [null,{"type":"data","data":{articles:[{id:1,title:"Article 1"},{id:2,title:"Article 2"}]},"uses":{}}];
					Promise.all([
						import("/node_modules/@sveltejs/kit/src/runtime/client/start.js"),
						import("/@fs/Users/sondt/Works/Learning/Svelte/testHooks/.svelte-kit/generated/client/app.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data,
							form: null,
							error: null
						});
					});
				}
			</script>
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
    return await resolve(event);
}