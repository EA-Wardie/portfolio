<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
	import { Input } from '$lib/components/ui/input/index';
	import { Textarea } from '$lib/components/ui/textarea/index';
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Contact | EA-Wardie</title>
</svelte:head>

<section class="text-center">
	<h1>Contact Me</h1>
</section>

<section class="flex w-full justify-center">
	<form
		class="w-full max-w-xl"
		method="POST"
		action="https://formsubmit.co/b008f795cef5a18f3e1b90389f53101f"
		use:enhance
	>
		<Card.Root>
			<Card.Header>
				<Card.Title>Want to get in touch?</Card.Title>
				<Card.Description>Feel fee to send me a message below!</Card.Description>
			</Card.Header>
			<Card.Content class="flex flex-col gap-6">
				<label class="flex flex-col gap-1">
					<span>Full Name</span>
					<Input required autofocus name="name" placeholder="Enter your full name" />
				</label>
				<label class="flex flex-col gap-1">
					<span>Email Address</span>
					<Input
						required
						type="email"
						name="email"
						placeholder="Enter your email address"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span>Message</span>
					<Textarea required name="message" placeholder="Enter a message" rows={7} />
				</label>
			</Card.Content>
			<Card.Footer class="justify-end">
				<Button type="submit">Submit</Button>
			</Card.Footer>
		</Card.Root>
	</form>
</section>
