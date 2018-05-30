<template>
    <div class="menuItem">
        <template v-for="(route,index) in json">
            <!-- 有子路由的 -->
            <el-submenu v-if="route.children" :index="route.name" :key="index">
                <template slot="title">
                    <i v-if="route.icon" :class="route.icon"></i>
                    <span slot="title">{{route.name}}</span>
                </template>
                <template v-for="(item,idx) in route.children">
                    <!-- 子路由里还有子路由的 -->
                    <i-menuitem v-if="item.children" :json="[item]" :key="idx"></i-menuitem>

                    <!-- 子路由里没有子路由的 -->
                    <router-link v-else :to="{name: item.name}" :key="idx">
                        <el-menu-item :index="item.name">
                            <i v-if="item.icon" :class="item.icon"></i>{{item.name}}
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>

            <!-- 没有子路由的 -->
            <router-link v-else :to="{name: route.name}"  :key="index">
                <el-menu-item :index="route.name">
                    <i v-if="route.icon" :class="route.icon"></i>
                    <span slot="title">{{route.name}}</span>
                </el-menu-item>
            </router-link>
        </template>
    </div>
</template>
<script>
export default {
    name: 'menuItem',
    props: {
        json: Array
    }
}
</script>
<style lang='less'>
.menuItem {
    a{
        display: block;
    }
}
</style>
