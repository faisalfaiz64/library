<template>
  <main>
	<transition name="fade" mode="out-in">
	  <child/>
	</transition>
  </main>
</template>

<script>
export default {
  name: 'MainLayout',

  components: {

  }
}
</script>
