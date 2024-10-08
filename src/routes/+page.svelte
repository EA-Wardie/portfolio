<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import Loader from '$lib/icons/Loader.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Me | EA-Wardie</title>
</svelte:head>

<section class="flex flex-col max-sm:items-center">
	<h1 class="-translate-x-1"><span class="text-sky-500">E</span>dward van <span class="text-emerald-500">T</span>onder
	</h1>
	<p>Welcome to my developer profile!</p>
</section>

<section class="flex flex-col-reverse sm:flex-row max-sm:items-center gap-6">
	<div class="grow px-0.5 sm:px-0 max-sm:text-center">
		<p>
			I am a <span class="text-rose-400">passionate</span> front-end developer with a focus on building dynamic
			and responsive user interfaces.
		</p>
		<br>
		<p>
			With a strong command of modern frameworks,
			I specialize in creating seamless web experiences that are both
			<span class="text-emerald-400">functional</span> and <span class="text-sky-400">visually appealing</span>.
			I am committed to writing clean, maintainable code and staying
			updated with the latest trends in web development.
		</p>
	</div>
	<Card.Root class="w-fit p-4">
		<Avatar.Root class="w-64 h-64 rounded-none" delayMs={500}>
			<Avatar.Image src="{base}/profile_image.jpg" />
			<Avatar.Fallback class="rounded-none bg-transparent">
				<Loader class="w-20 h-20" />
			</Avatar.Fallback>
		</Avatar.Root>
	</Card.Root>
</section>

<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<Card.Root>
		<Card.Header>
			<Card.Title>Education</Card.Title>
			<Card.Description>The early days</Card.Description>
		</Card.Header>
		<Card.Content>
			<blockquote class="prose">
				I successfully completed my formal education, where I gained foundational knowledge and skills that have
				shaped my personal and
				professional development.
			</blockquote>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Higher Education</Card.Title>
			<Card.Description>My time at university</Card.Description>
		</Card.Header>
		<Card.Content>
			<blockquote>
				I completed my university education with a degree in Computer Science & Information Technology, where I
				gained in-depth
				knowledge of software development, algorithms, and data structures.
			</blockquote>
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Experience</Card.Title>
			<Card.Description>Just work experience</Card.Description>
		</Card.Header>
		<Card.Content>
			<blockquote>
				With 7 years of hands-on experience in web development, I’ve had the opportunity to work on a diverse
				range
				of projects,
				building and optimizing websites and web applications for various industries.
			</blockquote>
		</Card.Content>
	</Card.Root>
</section>

<section>
	<Card.Root class="md:col-span-3">
		<Card.Header>
			<Card.Title>Career Highlights</Card.Title>
			<Card.Description>University degree</Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col gap-8">
			<div>
				<div class="flex items-center gap-2">
					<h4>Freelance</h4>
					<Badge class="rounded-full">Ongoing</Badge>
				</div>
				<article>
					As a freelancer, I’ve gained valuable experience by working independently with diverse clients and
					projects. This has
					sharpened my ability to manage time effectively, meet tight deadlines, and adapt to different
					requirements.
				</article>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-green-400 hover:underline" href="https://xtrapolate.io/" target="_blank"><h4>
						Xtrapolate</h4></a>
					<Badge class="rounded-full">2018 - 2019</Badge>
				</div>
				<article>
					During my time at Xtrapolate, I gained valuable experience working primarily with Laravel and Vue on
					a variety of web
					development projects. This role allowed me to deepen my expertise in building efficient back-end
					systems with Laravel
					while creating dynamic, responsive front-end applications using Vue.
				</article>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-cyan-400 hover:underline" href="https://www.fitt.ai/" target="_blank">
						<h4>Fitt Talent</h4>
					</a>
					<Badge class="rounded-full">2019 - 2023</Badge>
				</div>
				<article>
					At Fitt Talent, I specialized in building dynamic, real-time KPI software using Laravel and Vue to
					manage employee
					rating and performance metrics. My work focused on developing systems that could process and
					display real-time data
					efficiently, ensuring accurate and responsive workplace performance evaluations.
				</article>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-pink-500 hover:underline" href="https://www.snappi-group.com/" target="_blank"><h4>
						Snappi Group of
						Companies</h4></a>
					<Badge class="rounded-full">2023 - Now</Badge>
				</div>
				<article>
					At Snappi Group of Companies, I focus on developing and maintaining e-commerce platforms, working
					primarily on web
					development projects that enhance online shopping experiences. I built and maintain scalable,
					user-friendly solutions,
					that streamline transactions, optimize product displays, and improved customer engagement.
				</article>
			</div>
		</Card.Content>
	</Card.Root>
</section>