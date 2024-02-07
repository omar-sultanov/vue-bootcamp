<template>
    <div>
        <TodoList/>
        <ResultSection />
    </div>
</template>
<script>
import ResultSection from './ResultSection.vue';
import TodoList from './TodoList.vue';

export default{
    components:{TodoList, ResultSection},
    // props:['todoList']
}
</script>