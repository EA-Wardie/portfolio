<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Contact | EA-Wardie</title>
</svelte:head>

<section class="text-center">
	<h1>Contact Me</h1>
</section>

<section class="w-full flex justify-center">
	<form class="w-full max-w-xl" method="POST" action="https://formsubmit.co/b008f795cef5a18f3e1b90389f53101f" use:enhance>
		<Card.Root>
			<Card.Header>
				<Card.Title>Want to get in touch?</Card.Title>
				<Card.Description>Feel fee to send me a message below!</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<Label class="flex flex-col gap-1">
					Full Name
					<Input required autofocus name="name" placeholder="Enter your name" />
				</Label>
				<Label class="flex flex-col gap-1">
					Email Address
					<Input required type="email" name="email" placeholder="Enter your email" />
				</Label>
				<Label class="flex flex-col gap-1">
					Message
					<Textarea required name="message" placeholder="Enter a message" rows={7} />
				</Label>
			</Card.Content>
			<Card.Footer class="justify-end">
				<Button type="submit">Submit</Button>
			</Card.Footer>
		</Card.Root>
	</form>
</section>