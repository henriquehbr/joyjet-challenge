<script lang="typescript" context="module">
	import { writable } from 'svelte/store'

	export const store = writable({
		menuOpened: false
	})
</script>
