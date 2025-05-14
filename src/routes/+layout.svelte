<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';
	import Github from '$lib/icons/Github.svelte';
	import Reddit from '$lib/icons/Reddit.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LightDark from '$lib/icons/LightDark.svelte';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<ModeWatcher />

<div class="flex h-full min-h-dvh flex-col">
	<header
		class="sticky top-0 z-10 flex h-10 shrink-0 grow-0 items-center justify-between border-y bg-[hsl(var(--card))]/80 backdrop-blur dark:bg-neutral-900/80"
	>
		<nav class="flex grow">
			<Button variant={page.route.id === '/' ? 'default' : 'ghost'} href="/">Me</Button>
			<Separator orientation="vertical" />
			<Button variant={page.route.id === '/skills' ? 'default' : 'ghost'} href="/skills"
				>Skills</Button
			>
			<Separator orientation="vertical" />
			<Button variant={page.route.id === '/contact' ? 'default' : 'ghost'} href="/contact"
				>Contact</Button
			>
			<Separator orientation="vertical" />
		</nav>
		<nav class="flex h-full shrink items-center">
			<Separator orientation="vertical" />
			<Button variant="ghost" onclick={toggleMode}>
				<LightDark class="h-6 w-6" />
			</Button>
			<Separator orientation="vertical" />
			<div class="hidden sm:flex">
				<Button variant="ghost" href="https://github.com/EA-Wardie/" target="_blank">
					<Github class="h-6 w-6" />
				</Button>
				<Separator orientation="vertical" />
				<Button
					variant="ghost"
					href="https://www.reddit.com/user/eawardie/"
					target="_blank"
				>
					<Reddit class="h-6 w-6" />
				</Button>
				<Separator orientation="vertical" />
				<Button
					variant="ghost"
					href="https://discordapp.com/users/214383922052595712/"
					target="_blank"
				>
					<Discord class="h-6 w-6" />
				</Button>
			</div>
		</nav>
	</header>
	<main class="mx-auto flex w-full max-w-7xl grow flex-col gap-12 p-4 md:p-12">
		{@render children()}
	</main>
	<footer
		class="sticky bottom-0 z-10 flex h-10 shrink-0 grow-0 items-center justify-between border-y bg-[hsl(var(--card))]/80 backdrop-blur dark:bg-neutral-900/80"
	>
		<p class="px-4">{new Date().getFullYear()}</p>
		<Separator orientation="vertical" />
		<div class="grow"></div>
		<Separator orientation="vertical" />
		<nav class="flex sm:hidden">
			<Button variant="ghost" href="https://github.com/EA-Wardie/" target="_blank">
				<Github class="h-6 w-6" />
			</Button>
			<Separator orientation="vertical" />
			<Button variant="ghost" href="https://www.reddit.com/user/eawardie/" target="_blank">
				<Reddit class="h-6 w-6" />
			</Button>
			<Separator orientation="vertical" />
			<Button
				variant="ghost"
				href="https://discordapp.com/users/214383922052595712/"
				target="_blank"
			>
				<Discord class="h-6 w-6" />
			</Button>
		</nav>
		<Button
			variant="ghost"
			href="https://kit.svelte.dev/"
			target="_blank"
			class="gap-1 max-sm:hidden"
		>
			<p>Made with</p>
			<p class="text-orange-500">SvelteKit</p>
		</Button>
	</footer>
</div>
