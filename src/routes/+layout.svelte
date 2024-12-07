<script>
    import { base } from "$app/paths";
</script>

<nav>
    <ul>
        <li><a href="{base}/">main</a></li>
        <li><a href="{base}/counter">Counter</a></li>
    </ul>
</nav>

<!-- header -->

<main class="container">
    <slot/>
</main>

<!-- footer -->