<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	let worker: Worker | null = null;

	onMount(() => {
		if (browser) {
			try {
				// Instantiate the worker directly from MyWorker
				worker = new Worker('http://localhost:5173/api/proxy');

				worker.onmessage = (e: MessageEvent<string>) => {
					console.log('Message from worker:', e.data); // Should log "pong!" responses
				};

				worker.onerror = (e) => {
					console.error('Worker error:', e.message); // More specific error logging
				};
			} catch (error) {
				console.error('Failed to initialize worker:', error);
			}
		}
	});

	onDestroy(() => {
		worker?.terminate(); // Cleanup worker
		worker = null;
	});

	function sendMessage() {
		if (worker) {
			console.log("Sending 'ping!' to worker"); // Confirm message sent
			worker.postMessage('ping!');
		} else {
			console.error('Worker is not initialized');
		}
	}
</script>

<button on:click={sendMessage}>Send 'ping!'</button>
