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
    /* width: 265px; */
    width: 100%;
    /* margin: 0.26vw 0.3125vw; */
    height: 8.4375vw;
    background-image: url('/img/category-img.png');
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