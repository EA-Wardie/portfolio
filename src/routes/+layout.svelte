<script lang="ts">
	import '../app.css';
	import Github from '$lib/components/social/Github.svelte';
	import Reddit from '$lib/components/social/Reddit.svelte';
	import Discord from '$lib/components/social/Discord.svelte';
	import { Button } from '$lib/components/ui/button';
	import LinkedIn from '$lib/components/social/LinkedIn.svelte';
	import Triangle from '$lib/components/shapes/Triangle.svelte';
	import Square from '$lib/components/shapes/Square.svelte';
	import Circle from '$lib/components/shapes/Circle.svelte';
	import Organic from '$lib/components/shapes/Organic.svelte';

	let { children } = $props();
</script>

<div class="flex h-full min-h-dvh flex-col">
	<main class="mx-auto flex w-full max-w-7xl grow flex-col gap-12 p-4 md:px-12 md:py-24">
		{@render children()}

		<Triangle
			class="animate-duration-[50000ms] absolute top-10 right-10 -rotate-12 animate-spin opacity-5 max-md:hidden"
		/>
		<Organic
			class="animate-shake animate-duration-[12000ms] absolute top-30 right-30 opacity-5 max-md:hidden"
		/>
		<Circle
			class="animate-duration-[8000ms] absolute top-10 left-10 animate-bounce opacity-5 max-md:hidden"
		/>
		<Square
			class="animate-duration-[50000ms] absolute top-30 left-30 rotate-12 animate-spin opacity-5 max-md:hidden"
		/>
	</main>
	<footer
		class="sticky bottom-0 z-10 flex h-10 shrink-0 grow-0 items-center justify-between border-y bg-[hsl(var(--card))]/80 backdrop-blur dark:bg-neutral-900/80"
	>
		<nav class="flex">
			<Button
				variant="ghost"
				class="h-10"
				href="https://github.com/EA-Wardie"
				target="_blank"
			>
				<Github />
			</Button>
			<div class="h-10 border-r"></div>
			<Button
				variant="ghost"
				class="h-10"
				href="https://za.linkedin.com/in/edward-adriaan-van-tonder-474607180"
				target="_blank"
			>
				<LinkedIn />
			</Button>
			<div class="h-10 border-r"></div>
			<Button
				variant="ghost"
				class="h-10"
				href="https://www.reddit.com/user/eawardie"
				target="_blank"
			>
				<Reddit />
			</Button>
			<div class="h-10 border-r"></div>
			<Button
				variant="ghost"
				class="h-10"
				href="https://discordapp.com/users/214383922052595712"
				target="_blank"
			>
				<Discord />
			</Button>
			<div class="h-10 border-r"></div>
		</nav>
		<div class="flex">
			<div class="h-10 border-r"></div>
			<Button
				class="h-10 gap-1.5"
				variant="ghost"
				href="https://kit.svelte.dev/"
				target="_blank"
			>
				<span>Made with</span>
				<span class="text-orange-500">SvelteKit</span>
			</Button>
		</div>
	</footer>
</div>
