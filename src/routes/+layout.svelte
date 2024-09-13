<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
	import Github from '$lib/icons/Github.svelte';
	import Reddit from '$lib/icons/Reddit.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LightDark from '$lib/icons/LightDark.svelte';
	import { Button } from '$lib/components/ui/button';

	let { children } = $props();
</script>

<svelte:head>
	<title>Portfolio | EA-Wardie</title>
</svelte:head>

<ModeWatcher />

<header class="h-9 grow-0 shrink-0 flex items-center justify-between border-y">
	<!--	<div class="shrink h-full flex items-center gap-4">-->
	<!--		<a href="{base}/">EA-Wardie</a>-->
	<!--		<Separator orientation="vertical" />-->
	<!--	</div>-->
	<nav class="grow flex">
		<Button variant="link" href="{base}/">Me</Button>
		<Separator orientation="vertical" />
		<Button variant="link" href="{base}/skills">Skills</Button>
		<Separator orientation="vertical" />
		<Button variant="link" href="{base}/contact">Contact</Button>
		<Separator orientation="vertical" />
	</nav>
	<nav class="shrink h-full flex items-center">
		<Separator orientation="vertical" />
		<Button variant="ghost" onclick={toggleMode}>
			<LightDark class="w-6 h-6" />
		</Button>
		<Separator orientation="vertical" />
		<Button variant="ghost" href="https://github.com/EA-Wardie/" target="_blank">
			<Github class="w-6 h-6" />
		</Button>
		<Separator orientation="vertical" />
		<Button variant="ghost" href="https://www.reddit.com/user/eawardie/" target="_blank">
			<Reddit class="w-6 h-6" />
		</Button>
		<Separator orientation="vertical" />
		<Button variant="ghost" href="https://discordapp.com/users/214383922052595712/" target="_blank">
			<Discord class="w-6 h-6" />
		</Button>
	</nav>
</header>
<main class="w-full max-w-7xl mx-auto grow flex flex-col gap-12 p-4 md:p-12">
	{@render children()}
</main>
<footer class="h-14 grow-0 shrink-0 flex items-center justify-between border-y px-4">
	<div class="h-full flex items-center gap-4">
		<p>{new Date().getFullYear()}</p>
		<Separator orientation="vertical" />
		<p>Made with <a class="text-orange-500 hover:underline" href="https://kit.svelte.dev/" target="_blank">
			SvelteKit
		</a></p>
		<Separator orientation="vertical" />
	</div>
	<nav class="h-full flex items-center gap-4">
		<Separator orientation="vertical" />
		<a class="hover:underline" href="{base}/contact">Contact Me</a>
	</nav>
</footer>
