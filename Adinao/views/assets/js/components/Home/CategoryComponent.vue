<template>
    <div id="category-list">
        <div class="category-list">
            <category-item-component class="item" v-for="i in 4" :key="i">

            </category-item-component>
        </div>
    </div>
</template>

<script>
import CategoryItemComponent from './CategoryItemComponent.vue'
export default {
    components:{
        CategoryItemComponent
    }
}
</script>

<style>
#category-list .category-list{
    display: flex;
}
#category-list .category-list .item {
    margin: 20px 5px;
}
</style>