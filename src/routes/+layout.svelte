<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';
	import githubLogo from '$lib/assets/github.svg';
	import redditLogo from '$lib/assets/reddit.svg';
	import discordLogo from '$lib/assets/discord.svg';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Portfolio | EA-Wardie</title>
</svelte:head>

<ModeWatcher />

<header class="h-14 grow-0 shrink-0 flex items-center justify-between border-b px-4">
	<div class="h-full flex items-center gap-4">
		<a href="{base}/"><h3>EA</h3></a>
		<Separator orientation="vertical" />
	</div>
	<nav class="h-full flex items-center gap-4">
		<Separator orientation="vertical" />
		<a href="https://github.com/EA-Wardie" target="_blank">
			<img class="h-5 aspect-auto" alt="github" src={githubLogo}>
		</a>
		<a href="https://www.reddit.com/user/eawardie" target="_blank">
			<img class="h-5 aspect-auto" alt="reddit" src={redditLogo}>
		</a>
		<a href="https://discordapp.com/users/214383922052595712" target="_blank">
			<img class="h-5 aspect-auto" alt="discord" src={discordLogo}>
		</a>
	</nav>
</header>
<main class="w-full max-w-7xl mx-auto grow flex flex-col gap-12 p-4 md:p-12">
	{@render children()}
</main>
<footer class="h-14 grow-0 shrink-0 flex items-center justify-between border-t px-4">
	<div class="h-full flex items-center gap-4">
		<div class="flex gap-1.5">
			<p>{new Date().getFullYear()}</p>
			<Separator class="min-h-5" orientation="vertical" />
			<p>Made with <a class="hover:underline" href="https://kit.svelte.dev/" target="_blank">SvelteKit</a></p>
		</div>
		<Separator orientation="vertical" />
	</div>
	<nav class="h-full flex items-center gap-4">
		<Separator orientation="vertical" />
		<a class="hover:underline" href="{base}/contact">Contact Me</a>
	</nav>
</footer>
