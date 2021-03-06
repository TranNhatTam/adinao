
window.Vue = require('vue');
// require('./plugins/vue-particles');



// const HelloComponent = () => import('./components/HelloComponent.vue');
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import HelloComponent from './components/HelloComponent.vue'
import BannerComponent from './components/Home/BannerComponent.vue'
import CategoryComponent from './components/Home/CategoryComponent.vue'
import CategoryItemComponent from './components/Home/CategoryItemComponent.vue'
import CollectionComponent from './components/Home/CollectionComponent.vue'
import CollectionItemComponent from './components/Home/CollectionItemComponent.vue'
import FooterComponent from './components/Home/FooterComponent.vue'

const app = new Vue({
    el: '#app',
    components:{
        HelloComponent,
        BannerComponent,
        CategoryItemComponent,
        CategoryComponent,
        CollectionComponent,
        CollectionItemComponent,
        FooterComponent
    }
});
