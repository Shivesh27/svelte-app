<script>
    let count = 0
</script>

<h1>counter: {count}</h1>
<button on:click={() => count += 1}> inc </button>
<button on:click={() => count -= 1}> dec </button>