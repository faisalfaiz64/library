<template>
    <span class="alert alert-warning">
        // this will be replaced by the error messages
        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: ['errors'],
    }
</script>