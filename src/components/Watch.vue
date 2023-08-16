<template>
    <div class="m-5">    
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {{ currentTime.toLocaleTimeString() }}
            </h5>
            <p class="mb-0 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Current time
            </p>
        </div>
    </div>

</template>

<script>
import { useCurrentTime } from "../scripts/useCurrentTime";
export default {
    data: () => ({
        time: 0,
    }),
    created() {

    },
    setup() {
        const { currentTime } = useCurrentTime();
        console.log(currentTime.value);

        return { currentTime };
    },
    methods: {
        getTime(){

        },
    },
}
</script>
<style>
    
</style>