<template>
    <div id="category-item">
      <div class="category-item">
        <div class="item-info">Order Food Online</div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
#category-item .category-item {
    width: 265px;
    height: 185px;
    background-image: url('https://www.itl.cat/pngfile/big/163-1633532_categories-pancakes-4k.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    position: relative;
    border: 1px solid #ddd;
}
.category-item .item-info {
    position: absolute;
    width: 100%;
    height: 35px;
    bottom: 0;
    left : 0;
    background: #fff;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4px 0;
}
</style>