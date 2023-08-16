<template>
    
    <div class="m-5">    
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                {{ timer }}
            </h5>
            <p class="mb-0 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                TIMER
            </p>
        </div>
    </div>
    
    <div class="m-5">
        <label for="countries" class="
        block mb-2 text-sm font-medium
        text-gray-900 dark:text-white
        p-5
        ">Time to work</label>

        <select v-model="selected_w"
        id="countries" 
        class="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option v-for="time_r in time_arr"
            v-bind:value=time_r
            > 
                {{ time_r }} min
            </option>    
        
        </select>
    </div>

    <div class="m-5">
        <label for="countries" class="
        block mb-2 text-sm font-medium
        text-gray-900 dark:text-white
        p-5
        ">Time to rest</label>

        <select v-model="selected_r"
        id="countries" 
        class="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
        dark:placeholder-gray-400 dark:text-white 
        dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option v-for="time_r in time_arr"
            v-bind:value=time_r
            > 
                {{ time_r }} min
            </option>    
        
        </select>
    </div>


    <div class="w-full m-auto flex flex-col justify-center items-center p-5">
        <div class="inline-flex rounded-md shadow-sm" 
        role="group">
            <button @click="start"
            type="button" 
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Start
            </button>
            <button @click="test"
            type="button" 
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                add
            </button>
            <button @click="test"
            type="button" 
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Messages
            </button>
        </div>
    </div>



</template>

<script>
import { useCurrentTime } from "../scripts/useCurrentTime";
export default {
    data: () => ({
        time_arr: [
            '10', '15', '20', '30', '40', '50', '60'
        ],
        selected_w: '',
        selected_r: '',
        timer: 1,
    }),
    created() {
    
    },
    setup() {
        const { currentTime } = useCurrentTime();
        console.log(currentTime.value);

        return { currentTime };
    },
    methods: {
        test(){
            console.log('selected_w - ' + this.selected_w + ' | selected-r - ' + this.selected_r);


            console.log(this.currentTime.toLocaleTimeString());
            console.log(this.currentTime);
        },
        start(){
            let time_end = this.currentTime;

            time_end.setMinutes(20);

            console.log('this.currentTime.toLocaleTimeString() - ' + this.currentTime.toLocaleTimeString())
            console.log('time_end - ' + time_end)
        },
    },
}
</script>

<style >
    /* *{
        background: #2f3d58;
    } */
</style>