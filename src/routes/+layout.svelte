<script lang="ts">
	import '../app.css';
	import Github from '$lib/components/social/Github.svelte';
	import Reddit from '$lib/components/social/Reddit.svelte';
	import Discord from '$lib/components/social/Discord.svelte';
	import { Button } from '$lib/components/ui/button';
	import LinkedIn from '$lib/components/social/LinkedIn.svelte';

	let { children } = $props();
</script>

<div class="flex h-full min-h-dvh flex-col">
	<main class="mx-auto flex w-full max-w-7xl grow flex-col gap-12 p-4 md:px-12 md:py-24">
		{@render children()}
	</main>
	<footer
		class="sticky bottom-0 z-10 flex h-10 shrink-0 grow-0 items-center justify-between border-y bg-[hsl(var(--card))]/80 backdrop-blur dark:bg-neutral-900/80"
	>
		<nav class="flex">
			<Button variant="ghost" class="h-10" href="https://github.com/EA-Wardie" target="_blank">
				<Github />
			</Button>
			<div class="h-10 border-r"></div>
			<Button variant="ghost" class="h-10" href="https://za.linkedin.com/in/edward-adriaan-van-tonder-474607180"
					target="_blank">
				<LinkedIn />
			</Button>
			<div class="h-10 border-r"></div>
			<Button variant="ghost" class="h-10" href="https://www.reddit.com/user/eawardie" target="_blank">
				<Reddit />
			</Button>
			<div class="h-10 border-r"></div>
			<Button variant="ghost" class="h-10" href="https://discordapp.com/users/214383922052595712"
					target="_blank">
				<Discord />
			</Button>
			<div class="h-10 border-r"></div>
		</nav>
		<div class="flex">
			<div class="h-10 border-r"></div>
			<Button
				class="h-10"
				variant="ghost"
				href="https://kit.svelte.dev/"
				target="_blank"
			>
				<p>Made with</p>
				<p class="text-orange-500">SvelteKit</p>
			</Button>
		</div>
	</footer>
</div>
