<template>
    <div>
        <h2>{{ fullName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import {
    computed,
    inject,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
} from 'vue';

    export default {
        props: ['firstName', 'lastName'],
        // setup(props, context){
        setup(props){
            const fullName = computed(function(){
                return props.firstName + ' ' + props.lastName;
            });

            // context.emit('save-data', 1);

            const age = inject('age');

            onBeforeMount(function(){
                console.log('before mount');
            });

            onMounted(function(){
                console.log('mounted');
            });

            onBeforeUpdate(function(){
                console.log('before update');
            });

            onUpdated(function(){
                console.log('updated');
            });

            onBeforeUnmount(function(){
                console.log('before unmount');
            });

            onUnmounted(function(){
                console.log('unmounted');
            });

            return{
                fullName,
                age,
            };
        },
    }
</script>