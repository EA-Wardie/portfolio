<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import Html from '$lib/icons/Html.svelte';
	import JavaScript from '$lib/icons/JavaScript.svelte';
	import TypeScript from '$lib/icons/TypeScript.svelte';
	import Css from '$lib/icons/Css.svelte';
	import Php from '$lib/icons/Php.svelte';
	import MySql from '$lib/icons/MySql.svelte';
	import Flutter from '$lib/icons/Flutter.svelte';
	import Laravel from '$lib/icons/Laravel.svelte';
	import Vue from '$lib/icons/Vue.svelte';
	import Nuxt from '$lib/icons/Nuxt.svelte';
	import Ionic from '$lib/icons/Ionic.svelte';
	import Svelte from '$lib/icons/Svelte.svelte';
	import Astro from '$lib/icons/Astro.svelte';
	import Shadcn from '$lib/icons/Shadcn.svelte';
	import Vite from '$lib/icons/Vite.svelte';
	import Capacitor from '$lib/icons/Capacitor.svelte';
	import Tailwind from '$lib/icons/Tailwind.svelte';
	import PrimeVue from '$lib/icons/PrimeVue.svelte';
	import Vuetify from '$lib/icons/Vuetify.svelte';
	import Sentry from '$lib/icons/Sentry.svelte';
	import Firebase from '$lib/icons/Firebase.svelte';
	import Apple from '$lib/icons/Apple.svelte';
	import Android from '$lib/icons/Android.svelte';
	import AppGallery from '$lib/icons/AppGallery.svelte';
	import Three from '$lib/icons/Three.svelte';
	import Daisy from '$lib/icons/Daisy.svelte';
	import Tauri from '$lib/icons/Tauri.svelte';
	import Framework7 from '$lib/icons/Framework7.svelte';
	import Naive from '$lib/icons/Naive.svelte';
</script>

<svelte:head>
	<title>Skills | EA-Wardie</title>
</svelte:head>

<section>
	<h1>Skills</h1>
	<p>All the important things</p>
</section>

<section class="flex flex-col gap-4">
	<h3>Languages</h3>
	<div class="flex flex-wrap gap-4">
		<Button variant="outline" class="gap-2 text-orange-500" href="https://developer.mozilla.org/en-US/docs/Web/HTML"
				target="_blank">
			<Html class="w-5 h-5" />
			HTML
		</Button>
		<Button variant="outline" class="gap-2 text-yellow-500"
				href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
				target="_blank">
			<JavaScript class="w-5 h-5" />
			JavaScript
		</Button>
		<Button variant="outline" class="gap-2 text-sky-500" href="https://www.typescriptlang.org/" target="_blank">
			<TypeScript class="w-5 h-5" />
			TypeScript
		</Button>
		<Button variant="outline" class="gap-2 text-blue-500" href="https://developer.mozilla.org/en-US/docs/Web/CSS"
				target="_blank">
			<Css class="w-5 h-5" />
			CSS
		</Button>
		<Button variant="outline" class="gap-2 text-indigo-500" href="https://www.php.net/" target="_blank">
			<Php class="w-5 h-5" />
			PHP
		</Button>
		<Button variant="outline" class="gap-2" href="https://www.mysql.com/" target="_blank">
			<MySql class="w-5 h-5" />
			MySQL
		</Button>
		<Button variant="outline" class="gap-2 text-blue-400" href="https://dart.dev/" target="_blank">
			<Flutter class="w-5 h-5" />
			Dart
		</Button>
	</div>
</section>

<section class="flex flex-col gap-4">
	<h3>Frameworks</h3>
	<div class="flex flex-wrap gap-4">
		<Button variant="outline" class="gap-2 text-orange-700" href="https://laravel.com/" target="_blank">
			<Laravel class="w-5 h-5" />
			Laravel
		</Button>
		<Button variant="outline" class="gap-2 text-green-500" target="_blank">
			<Vue class="w-5 h-5" />
			Vue
		</Button>
		<Button variant="outline" class="gap-2 text-green-500" href="https://vuejs.org/" target="_blank">
			<Nuxt class="w-5 h-5" />
			Nuxt
		</Button>
		<Button variant="outline" class="gap-2 text-orange-500" href="https://kit.svelte.dev/" target="_blank">
			<Svelte class="w-5 h-5" />
			SvelteKit
		</Button>
		<Button variant="outline" class="gap-2 text-blue-400" href="https://ionicframework.com/" target="_blank">
			<Ionic class="w-5 h-5" />
			Ionic
		</Button>
		<Button variant="outline" class="gap-2 text-indigo-500" href="https://astro.build/" target="_blank">
			<Astro class="w-5 h-5" />
			Astro
		</Button>
		<Button variant="outline" class="gap-2 text-orange-500" href="https://framework7.io/" target="_blank">
			<Framework7 class="w-5 h-5" />
			Framework7
		</Button>
		<Button variant="outline" class="gap-2" href="https://www.babylonjs.com/" target="_blank">
			<Three class="w-5 h-5" />
			BabylonJS
		</Button>
		<Button variant="outline" class="gap-2 text-blue-400" href="https://flutter.dev/" target="_blank">
			<Flutter class="w-5 h-5" />
			Flutter
		</Button>
	</div>
</section>

<section class="flex flex-col gap-4">
	<h3>JavaScript Libraries</h3>
	<div class="flex flex-wrap gap-4">
		<Button variant="outline" class="gap-2 text-orange-500" href="https://svelte.dev/" target="_blank">
			<Svelte class="w-5 h-5" />
			Svelte
		</Button>
		<Button variant="outline" class="gap-2 text-amber-400" href="https://vitejs.dev/" target="_blank">
			<Vite class="w-5 h-5" />
			Vite
		</Button>
		<Button variant="outline" class="gap-2 text-blue-400" href="https://capacitorjs.com/" target="_blank">
			<Capacitor class="w-5 h-5" />
			Capacitor
		</Button>
		<Button variant="outline" class="gap-2 text-yellow-600" href="https://tauri.app/" target="_blank">
			<Tauri class="w-5 h-5" />
			Tauri
		</Button>
	</div>
</section>

<section class="flex flex-col gap-4">
	<h3>UI Libraries</h3>
	<div class="flex flex-wrap gap-4">
		<Button variant="outline" class="gap-2 text-sky-500" href="https://tailwindcss.com/" target="_blank">
			<Tailwind class="w-5 h-5" />
			Tailwind
		</Button>
		<Button variant="outline" class="gap-2 text-green-500" href="https://www.shadcn-vue.com/" target="_blank">
			<Shadcn class="w-5 h-5 -rotate-45 translate-y-px" />
			Shadcn (Vue)
		</Button>
		<Button variant="outline" class="gap-2 text-orange-500" href="https://www.shadcn-svelte.com/" target="_blank">
			<Shadcn class="w-5 h-5 -rotate-45 translate-y-px" />
			Shadcn (Svelte)
		</Button>
		<Button variant="outline" class="gap-2 text-sky-400" href="https://vuetifyjs.com/en/" target="_blank">
			<Vuetify class="w-5 h-5" />
			Vuetify
		</Button>
		<Button variant="outline" class="gap-2" href="https://daisyui.com/" target="_blank">
			<Daisy class="w-5 h-5" />
			Daisy UI
		</Button>
		<Button variant="outline" class="gap-2 text-green-400" href="https://www.naiveui.com/en-US/os-theme"
				target="_blank">
			<Naive class="w-5 h-5" />
			Naive UI
		</Button>
		<Button variant="outline" class="gap-2 text-sky-600" href="https://primevue.org/" target="_blank">
			<PrimeVue class="w-5 h-5" />
			PrimeVue
		</Button>
	</div>
</section>

<section class="flex flex-col gap-4">
	<h3>Notable Mentions</h3>
	<div class="flex flex-wrap gap-4">
		<Button variant="outline" class="gap-2 text-rose-400" href="https://sentry.io/welcome/" target="_blank">
			<Sentry class="w-5 h-5" />
			Sentry
		</Button>
		<Button variant="outline" class="gap-2 text-emerald-500" href="https://forge.laravel.com/" target="_blank">
			<Laravel class="w-5 h-5" />
			Forge
		</Button>
		<Button variant="outline" class="gap-2 text-orange-300" href="https://firebase.google.com/" target="_blank">
			<Firebase class="w-5 h-5" />
			Firebase
		</Button>
		<Button variant="outline" class="gap-2 text-neutral-400" href="https://developer.apple.com/" target="_blank">
			<Apple class="w-5 h-5" />
			App Store Connect
		</Button>
		<Button variant="outline" class="gap-2 text-green-600" href="https://developer.android.com/" target="_blank">
			<Android class="w-5 h-5" />
			Play Store Console
		</Button>
		<Button variant="outline" class="gap-2 text-rose-500" href="https://developer.huawei.com/consumer/en/agconnect/"
				target="_blank">
			<AppGallery class="w-5 h-5" />
			App Gallery
		</Button>
	</div>
</section>