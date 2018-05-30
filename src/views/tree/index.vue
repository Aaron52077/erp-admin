<template>
<div class="tree-demo">
    <el-tree
        :data="dataJson"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        check-strictly
        highlight-current
        :props="defaultProps">
    </el-tree>
    <el-button @click="getCheckedNodes">通过 node 获取</el-button>
    <el-button @click="getCheckedKeys">通过 key 获取</el-button>
    <el-button @click="setCheckedNodes">通过 node 设置</el-button>
    <el-button @click="setCheckedKeys">通过 key 设置</el-button>
    <el-button @click="resetChecked">清空</el-button>
</div>
</template>

<script>
  export default {
    methods: {
      getCheckedNodes() {
        console.log(JSON.stringify(this.$refs.tree.getHalfCheckedNodes()));
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        dataJson: [{
          id: 1,
          label: '一级 1',
          checked: false,
          children: [{
            id: 4,
            label: '二级 1-1',
            checked: false,
            children: [{
              id: 9,
              label: '三级 1-1-1',
              checked: false
            }, {
              id: 10,
              label: '三级 1-1-2',
              checked: false
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          checked: false,
          children: [{
            id: 5,
            label: '二级 2-1',
            checked: false
          }, {
            id: 6,
            label: '二级 2-2',
            checked: false
          }]
        }, {
          id: 3,
          label: '一级 3',
          checked: false,
          children: [{
            id: 7,
            label: '二级 3-1',
            checked: false
          }, {
            id: 8,
            label: '二级 3-2',  
            checked: false
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label',
          checked: false
        }
      };
    }
  };
</script>

<style lang="less">
.tree-demo {
    background-color: #fff;
}
</style>
