<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import Laravel from '$lib/components/frameworks/Laravel.svelte';
	import Vue from '$lib/components/frameworks/Vue.svelte';
	import Svelte from '$lib/components/frameworks/Svelte.svelte';
	import Astro from '$lib/components/frameworks/Astro.svelte';
	import Supabase from '$lib/components/databases/Supabase.svelte';
	import Pocketbase from '$lib/components/databases/Pocketbase.svelte';
	import Cloudflare from '$lib/components/hosting/Cloudflare.svelte';
	import Vercel from '$lib/components/hosting/Vercel.svelte';
	import Git from '$lib/components/tools/Git.svelte';
	import Docker from '$lib/components/tools/Docker.svelte';
	import { Button } from '$lib/components/ui/button';
	import Typescript from '$lib/components/languages/Typescript.svelte';
	import PHP from '$lib/components/languages/PHP.svelte';
	import HTML from '$lib/components/languages/HTML.svelte';
	import CSS from '$lib/components/languages/CSS.svelte';
</script>

<svelte:head>
	<title>EA | Portfolio</title>
</svelte:head>

<section class="flex flex-col gap-1">
	<h1 class="-translate-x-1">
		<span class="text-sky-500">E</span>dward van <span class="text-emerald-500">T</span>onder
	</h1>
	<Button
		variant="link"
		target="_blank"
		class="h-fit w-fit cursor-pointer p-0"
		href="https://maps.app.goo.gl/NfqUuq54t71iF6gk8"
	>
		NW, South Africa
	</Button>
</section>

<section>
	<p class="max-w-lg text-lg">
		I am a <span class="text-rose-400">full-stack</span> developer with a focus on building dynamic
		and responsive user interfaces.
	</p>
	<br />
	<p class="max-w-3xl text-lg">
		Being familiar with modern frameworks, I specialize in creating web experiences that are
		both <span class="text-emerald-400">functional</span> and
		<span class="text-sky-400">visually appealing</span>. I am committed to writing clean,
		maintainable code and staying up to date with the latest trends in web development.
	</p>
</section>

<section class="grid gap-4">
	<h2>Education & Experience</h2>
	<div class="grid gap-6 md:grid-cols-2">
		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header>
				<Card.Title>BSc in Information Technology</Card.Title>
				<Card.Description>Education</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header>
				<Card.Title>8 years of work experience</Card.Title>
				<Card.Description>Experience</Card.Description>
			</Card.Header>
		</Card.Root>
	</div>
</section>

<section class="grid gap-4">
	<h2>Frameworks</h2>
	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-red-500/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Laravel />
				<div class="h-10 border-r"></div>
				<h3>Laravel</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-emerald-600/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Vue />
				<div class="h-10 border-r"></div>
				<h3>Vue/Nuxt</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-orange-600/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Svelte />
				<div class="h-10 border-r"></div>
				<h3>Svelte/Kit</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Astro />
				<div class="h-10 border-r"></div>
				<h3>Astro</h3>
			</Card.Header>
		</Card.Root>
	</div>
</section>

<section class="grid gap-4">
	<h2>Tooling</h2>
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-emerald-600/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Supabase />
				<div class="h-10 border-r"></div>
				<h3>Supabase</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Pocketbase />
				<div class="h-10 border-r"></div>
				<h3>Pocketbase</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-amber-600/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Cloudflare />
				<div class="h-10 border-r"></div>
				<h3>Cloudflare</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Vercel />
				<div class="h-10 border-r"></div>
				<h3>Vercel</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-orange-600/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Git />
				<div class="h-10 border-r"></div>
				<h3>Git</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-blue-500/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Docker />
				<div class="h-10 border-r"></div>
				<h3>Docker</h3>
			</Card.Header>
		</Card.Root>
	</div>
</section>

<section class="grid gap-4">
	<h2>Languages</h2>
	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-blue-400/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<Typescript />
				<div class="h-10 border-r"></div>
				<h3>Typescript</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-white/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<PHP />
				<div class="h-10 border-r"></div>
				<h3>PHP</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-orange-500/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<HTML />
				<div class="h-10 border-r"></div>
				<h3>HTML 5</h3>
			</Card.Header>
		</Card.Root>

		<Card.Root class="transition-shadow hover:shadow-lg hover:shadow-blue-700/30">
			<Card.Header class="flex items-center justify-center gap-4">
				<CSS />
				<div class="h-10 border-r"></div>
				<h3>CSS</h3>
			</Card.Header>
		</Card.Root>
	</div>
</section>

<section class="grid gap-4">
	<h2>Career Highlights</h2>
	<Card.Root>
		<Card.Content class="flex flex-col gap-4">
			<div>
				<div class="flex items-center gap-2">
					<h4>Freelance</h4>
					<Badge class="rounded-full">Ongoing</Badge>
				</div>
				<Card.Description>Personal and non-profit websites</Card.Description>
			</div>
			<div class="border-b"></div>
			<div>
				<div class="flex items-center gap-2">
					<a
						class="text-green-400 hover:underline"
						href="https://xtrapolate.io/"
						target="_blank"
					>
						<h4>Xtrapolate</h4>
					</a>
					<Badge class="rounded-full">2018 - 2019</Badge>
				</div>
				<Card.Description>ERP and gamified web apps</Card.Description>
			</div>
			<div class="border-b"></div>
			<div>
				<div class="flex items-center gap-2">
					<a
						class="text-cyan-400 hover:underline"
						href="https://www.fitt.ai/"
						target="_blank"
					>
						<h4>Fitt Talent</h4>
					</a>
					<Badge class="rounded-full">2019 - 2023</Badge>
				</div>
				<Card.Description
					>Real-time KPI software for employee performance metrics</Card.Description
				>
			</div>
			<div class="border-b"></div>
			<div>
				<div class="flex items-center gap-2">
					<a
						class="text-pink-500 hover:underline"
						href="https://www.snappi-group.com/"
						target="_blank"><h4>Snappi Group of Companies</h4></a
					>
					<Badge class="rounded-full">2023 - Now</Badge>
				</div>
				<Card.Description>ERP and e-commerce platforms on web and mobile</Card.Description>
			</div>
		</Card.Content>
	</Card.Root>
</section>
