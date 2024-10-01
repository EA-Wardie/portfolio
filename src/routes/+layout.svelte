<script lang="ts">
	import '../app.css';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Separator } from '$lib/components/ui/separator';
	import { base } from '$app/paths';
	import Github from '$lib/icons/Github.svelte';
	import Reddit from '$lib/icons/Reddit.svelte';
	import Discord from '$lib/icons/Discord.svelte';
	import LightDark from '$lib/icons/LightDark.svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Social from '$lib/icons/Social.svelte';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';

	let { children } = $props();
</script>

<ModeWatcher />

<header
	class="sticky top-0 h-9 grow-0 shrink-0 bg-[hsl(var(--card))]/80 dark:bg-neutral-900/80 backdrop-blur flex items-center justify-between border-y">
	<nav class="grow flex">
		<Button variant="ghost" href="{base}/">Me</Button>
		<Separator orientation="vertical" />
		<Button variant="ghost" href="{base}/skills">Skills</Button>
		<Separator orientation="vertical" />
		<Button variant="ghost" href="{base}/contact">Contact</Button>
		<Separator orientation="vertical" />
	</nav>
	<nav class="shrink h-full flex items-center">
		<Separator orientation="vertical" />
		<Button variant="ghost" onclick={toggleMode}>
			<LightDark class="w-6 h-6" />
		</Button>
		<Separator orientation="vertical" />
		<div class="hidden sm:flex">
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
		</div>
		<AlertDialog.Root>
			<AlertDialog.Trigger class="block sm:hidden {buttonVariants({variant: 'ghost'})}">
				<Social class="w-6 h-6" />
			</AlertDialog.Trigger>
			<AlertDialog.Content>
				<AlertDialog.Header>
					<AlertDialog.Title>Get in touch</AlertDialog.Title>
					<AlertDialog.Description>
						<div class="flex justify-center gap-4 py-4">
							<Button variant="outline" href="https://github.com/EA-Wardie/" target="_blank">
								<Github class="w-8 h-8" />
							</Button>
							<Button variant="outline" href="https://www.reddit.com/user/eawardie/" target="_blank">
								<Reddit class="w-8 h-8" />
							</Button>
							<Button variant="outline" href="https://discordapp.com/users/214383922052595712/"
									target="_blank">
								<Discord class="w-8 h-8" />
							</Button>
						</div>
					</AlertDialog.Description>
				</AlertDialog.Header>
				<AlertDialog.Footer>
					<AlertDialog.Cancel class={buttonVariants({variant: 'default'})}>Close</AlertDialog.Cancel>
				</AlertDialog.Footer>
			</AlertDialog.Content>
		</AlertDialog.Root>
	</nav>
</header>
<main class="w-full max-w-7xl mx-auto grow flex flex-col gap-12 p-4 md:p-12">
	{@render children()}
</main>
<footer
	class="sticky bottom-0 h-9 grow-0 shrink-0 bg-[hsl(var(--card))]/80 dark:bg-neutral-900/80 backdrop-blur flex items-center justify-between border-y px-4">
	<p>{new Date().getFullYear()}</p>
	<Separator orientation="vertical" class="ml-4" />
	<div class="grow"></div>
	<Separator orientation="vertical" />
	<Button variant="ghost" href="https://kit.svelte.dev/" class="gap-1"><p>Made with</p><p class="text-orange-500">SvelteKit</p></Button>
</footer>
