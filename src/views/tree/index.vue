<template>
<ul class="tree" :class="pid== -1?'main_tree':'sub_tree'">
    <li v-for="(item, index) in treeData" v-if="item.department_pid==pid" class="galp" :key="index">
        <div class="depart" @click="choose(item.department_id)" :class="shareData.current==item.department_id?'current':''">
            <div class="term" :style="deep()">
                <span class="triangle" v-if="checked_child(item.department_id)"><i @click.native="toggle(item.department_id, $event)"></i></span>
                <span class="title">{{item.department_name}}</span>
            </div>  
        </div>
        <tree-dept :treeData="treeData" :level="level+1" :pid="item.department_id" v-if="item.sub"></tree-dept>
    </li>
</ul>
</template>
<script>
/* eslint-disable */
import shareData from '@/components/tree/tree_data.js';
import _find from 'lodash/find';
export default {
    name:'treeDept',
    data() {
        return {
            data: this.treeData,
            shareData: shareData,
        }
    },
    props: {
        treeData: {
            type: Object,
        },
        pid: {
            type: [String, Number],
            default: -1,
        },
        level: {
            type: [String, Number],
            default: 0,
        },
    },
    methods: {
        choose(pid){
            shareData.current = pid;
        },
        toggle(pid, event){
            event.stopPropagation()
            if(this.data[pid].sub==undefined){
                this.$set(this.data[pid],'sub','');
            }
            if(!!this.data[pid].sub){
                this.data[pid].sub = false; 
            }else{
                this.data[pid].sub = true;
            }
        },
        checked_child(pid) {
            return _find(this.data,{department_pid: pid})
        },
        deep() {
            let value = this.level*20+'px'
            return {
                paddingLeft: value
            }
        }        
    }
}
</script>
<style scoped>
.current{ color:#00cd66; background-color: #d8e1e5;}
.main_tree{
  width: 100%;
  margin: 0;
  background-color: #e9eef1;
}
.term{
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(100% - 45px)
} 
.triangle{
  width: 14px;
  display: inline-block;
  text-align: center;
}
.depart{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 40px;
}
.title{
  position: relative;
  left: 4px;
}
.active{
  transform: rotateZ(90deg);
}
</style>
