import { createApp } from 'vue/dist/vue.esm-bundler'
import '../css/app.css';
import '../sass/main.sass';
import './main.js';

import Main from "./Modules/_Main/Main.vue";
import Home from "./Modules/Home/Home.vue";

const app = createApp({
    components: {
        'component-home': Home,
        'component-main': Main
    }
})

app
    .mount('#app')
