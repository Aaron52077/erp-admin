<template>
    <div id="upload">
        <h3>表单编辑</h3>
        <el-form ref="form" :model="formData" label-width="120px" :style="widths">
            <el-form-item label="客户姓名">
                <el-input class="i-input" v-model="formData.input1" placeholder="客户姓名"></el-input>
            </el-form-item>
            <el-form-item label="客户级别">
                <el-select v-model="formData.input2" placeholder="客户级别">
                    <el-option label="中意向" value="1"></el-option>
                    <el-option label="高意向" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
                <el-date-picker type="datetime" class="i-input" placeholder="选择日期" v-model="formData.date"></el-date-picker>
            </el-form-item>
             <el-form-item label="客户来源">
                <el-checkbox-group v-model="formData.type">
                    <el-checkbox-button label="自主开发" name="type"></el-checkbox-button>
                    <el-checkbox-button label="自然到店" name="type"></el-checkbox-button>
                    <el-checkbox-button label="蜂巢网" name="type"></el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="房屋类型">
                <el-radio-group v-model="formData.resource1">
                    <el-radio label="期房"></el-radio>
                    <el-radio label="现房"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="客户是否见面">
                <el-radio-group v-model="formData.resource2">
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                </el-radio-group>
            </el-form-item>
            <!-- 文本编辑器 -->
            <el-form-item label="客户需求">
                <!-- 正文 -->
                <div class="content">
                    <quill-editor v-model.trim="formData.content" ref="myQuillEditor" :options="editorOption">
                        <!-- slot方式 -->
                        <div id="toolbar" slot="toolbar">
                            <div class="ql-formats">
                                <button class="ql-header" value="1" title="H1标题"></button>
                                <button class="ql-bold" title="加粗"></button>
                                <button class="ql-italic" title="斜体"></button>
                                <button class="ql-underline" title="下划线"></button>
                                <button class="ql-strike" title="删除线"></button>
                                <button class="ql-blockquote" title="引用"></button>
                                <button class="ql-list" value='ordered' title="有序列表"></button>
                                <button class="ql-list" value="bullet" title="无序列表"></button>
                            </div>
                            <div class="ql-formats">
                                <!-- 自定义上传图片按钮 -->
                                <el-button icon="el-icon-picture" title="插入图片" style="font-size: 16px;" @click.stop="uploadPictureVisible = true"></el-button>
                            </div>
                            <div class="ql-formats">
                                <button class="ql-clean" title="清除格式"></button>
                                <!-- 自定义撤销和重做 -->
                                <button class="undo" title="撤销" @click.stop="editor.history.undo()"><i class="el-icon-refresh"></i></button>
                                <button class="redo" title="重做" @click.stop="editor.history.redo()"><i class="el-icon-refresh"></i></button>
                            </div>                   
                        </div>
                    </quill-editor>
                    <!-- 自定义上传图片 -->
                    <upload-picture  v-if="uploadPictureVisible" @complete="inserPicture" @close="uploadPictureVisible = false"></upload-picture>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">保存</el-button>
                <el-button @click="resetForm('form')">重置</el-button>
                <el-button @click="$router.back(-1)">返回上一页</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
import cache from '@/utils/cache.js'
import uploadPicture from './uploadPicture'
Vue.use(VueQuillEditor)
export default {
    name: 'upload',
    components: { uploadPicture },
    data() {
        return {
            formData: {
                input1: null,
                input2: null,
                date: null,
                type: [],
                resource1: null,
                resource2: null,
                content: null                            // 正文
            },
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: '#toolbar',
                    history: {
                        delay: 2000,
                        maxStack: 500,
                        userOnly: true
                    }
                },
                placeholder: ''
            },
            isChange: false,                        // 内容是否发生改变
            uploadPictureVisible: false,             // 自定义图片上传dialog的toggle
            width: ''
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        },
        widths() {
            return {
                width: `${this.width}px`
            }
        }
    },
    watch: {
        ischange(val) {
            if (val) {
                window.addEventListener('beforeunload', this.listenFreshClose)
            }
        }
    },
    methods: {
        inserPicture(files) {
            this.editor.focus()
            files.forEach((item, index) => {
                if (item) {
                    this.editor.insertEmbed(this.editor.getSelection().index + index, 'image', item)
                }
            })
            // 设置光标为末尾
            this.editor.setSelection(this.editor.getSelection().index + 1)
        },
        // 监听刷新和关闭窗口
        listenFreshClose(e) {
            e.returnValue = '您将离开页面，可能会丢失正在编辑的内容'
        },
        // 表单提交
        submitForm(formName) {
            console.log(this.formData)
        },
        // 表单重置
        resetForm(formName) {
            this.$refs[formName].resetFields()
        }
    },
    beforeDestroy() {
        window.removeEventListener('beforeunload', this.listenFreshClose)
    },
    // 离开路由钩子
    beforeRouteLeave (to, from, next) {
        if (this.isChange && (this.title || this.formData.content)) {
            this.$confirm('要离开本页面吗？系统将可能不会保存你做的更改', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
            .then(() => {
                next()
                window.removeEventListener('beforeunload', this.listenFreshClose)
            })
            .catch(() => {
                next(false)
            })
        } else {
            next()
            window.removeEventListener('beforeunload', this.listenFreshClose)
        }
    },
    mounted() {
        this.width = this.$el.getBoundingClientRect().width - 120
    }
}
</script>
<style lang='less'>
#upload {
    position: relative;
    padding: 10px;
    background-color: #fff;
    .content {
        position: relative;
        border: 1px solid #e9e9e9;
        .quill-editor {
            .ql-toolbar.ql-snow {
                border: none;
                background: #eee;
            }
            .ql-toolbar {
                border-bottom: 1px solid #e9e9e9 !important;
                .undo, .redo {
                    color: #555;
                    &:hover{
                        color: #06c;
                    }
                    i{
                        color: inherit;
                    }
                }
            }
            .ql-container {
                height: 400px;
                font-size: 16px;
                border: none;
            }
            .ql-formats {
                padding-right: 20px;
                border-right: 1px solid #D8D8D8;
                button {
                    width: 30px;
                    height: 26px;
                    outline: none;
                    &:hover{
                        color: #06c;
                    }
                    i{
                        font-size: 17px;
                        color: #555;
                    }
                }
            }
            img {
                display: block;
                margin: 0 auto;
                margin-bottom: 1em;
            }
        }
    }
}
</style>