<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
</script>

<section>
	<h1>Edward van Tonder</h1>
	<p>Welcome to my developer profile!</p>
</section>

<section class="w-full max-w-2xl text-justify px-1">
	<h3 class="text-teal-500">Who am I?</h3>
	<p>
		I am a <span class="text-rose-500">passionate</span> front-end developer with a focus on building dynamic and
		responsive user interfaces.
	</p>
	<br>
	<p>
		With a strong command of modern frameworks like
		<a class="text-green-500 hover:underline" href="https://vuejs.org/" target="_blank">Vue</a>,
		<a class="text-blue-400 hover:underline" href="https://ionicframework.com/" target="_blank">Ionic</a>,
		<a class="text-violet-500 hover:underline" href="https://astro.build/" target="_blank">Astro</a>and
		<a class="text-orange-400 hover:underline" href="https://svelte.dev/" target="_blank">Svelte</a>
		I specialize in creating seamless web experiences that are both functional and visually appealing.
		I am committed to writing clean, maintainable code and staying
		updated with the <span class="text-amber-400">latest trends</span> in web development.
	</p>
	<br>
	<p>
		My expertise in <a class="text-sky-400 hover:underline" href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>
		allows me to design sleek and scalable UIs with ease, while my interest in Laravel enables me to integrate
		powerful backend functionalities into my projects.
	</p>
</section>

<section class="grid grid-cols-1 md:grid-cols-3 gap-4">
	<Card.Root>
		<Card.Header>
			<Card.Title>Education</Card.Title>
			<Card.Description>The early days</Card.Description>
		</Card.Header>
		<Card.Content>
			I successfully completed my formal education, where I gained foundational knowledge and skills that have
			shaped my personal and
			professional development.
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Higher Education</Card.Title>
			<Card.Description>My time at university</Card.Description>
		</Card.Header>
		<Card.Content>
			I completed my university education with a degree in Computer Science & Information Technology, where I
			gained in-depth
			knowledge of software development, algorithms, and data structures.
		</Card.Content>
	</Card.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Experience</Card.Title>
			<Card.Description>Just work experience</Card.Description>
		</Card.Header>
		<Card.Content>
			With 7 years of hands-on experience in web development, I’ve had the opportunity to work on a diverse range
			of projects,
			building and optimizing websites and web applications for various industries.
		</Card.Content>
	</Card.Root>
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
				<p>As a freelancer, I’ve gained valuable experience by working independently with diverse clients and
					projects. This has
					sharpened my ability to manage time effectively, meet tight deadlines, and adapt to different
					requirements.</p>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-green-400 hover:underline" href="https://xtrapolate.io/"><h4>Xtrapolate</h4></a>
					<Badge class="rounded-full">2018 - 2019</Badge>
				</div>
				<p>During my time at Xtrapolate, I gained valuable experience working primarily with Laravel and Vue on
					a variety of web
					development projects. This role allowed me to deepen my expertise in building efficient back-end
					systems with Laravel
					while creating dynamic, responsive front-end applications using Vue.</p>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-cyan-400 hover:underline" href="https://www.fitt.ai/"><h4>Fitt Talent</h4></a>
					<Badge class="rounded-full">2019 - 2023</Badge>
				</div>
				<p>At Fitt Talent, I specialized in building dynamic, real-time KPI software using Laravel and Vue to
					manage employee
					ranking and performance metrics. My work focused on developing systems that could process and
					display real-time data
					efficiently, ensuring accurate and responsive workplace performance evaluations.</p>
			</div>
			<Separator class="w-full lg:max-w-xs" />
			<div>
				<div class="flex items-center gap-2">
					<a class="text-pink-500 hover:underline" href="https://www.snappi-group.com/"><h4>Snappi Group of
						Companies</h4></a>
					<Badge class="rounded-full">2023 - Now</Badge>
				</div>
				<p>At Snappi Group of Companies, I focus on developing and maintaining e-commerce platforms, working
					primarily on web
					development projects that enhance online shopping experiences. I built and maintain scalable,
					user-friendly solutions,
					that streamline transactions, optimize product displays, and improved customer engagement.</p>
			</div>
		</Card.Content>
	</Card.Root>
</section>