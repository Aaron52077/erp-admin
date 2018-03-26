<template>
    <el-dialog class="uploadPicture" :visible.sync="visible">
        <el-tabs v-model="activeTab" @tab-click="handleClick">
            <!-- 上传图片 -->
            <el-tab-pane label="上传图片" name="upload" class="upload">
                <el-upload ref="upload" action="http://api.toutiaojk.com/e/extend/jkh/upload_file.php" list-type="picture-card" :multiple="true" :before-upload="uploadBefore" :on-success="onSuccess" :on-error="onError" :on-remove="onRemove" :on-preview="onPreview">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog class="picture_preview" :visible.sync="preViewVisible" :modal="false" append-to-body width="30%">
                    <img width="100%" :src="preViewURL">
                </el-dialog>
            </el-tab-pane>
        </el-tabs>
        <!-- footer -->
        <div slot="footer">
            <el-button class="cancle_btn" @click.stop="cancle">取 消</el-button>
            <el-button type="primary" @click="complete">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
import { getPicture } from '@/api/table'
export default {
    name: 'uploadPicture',
    data() {
        return {
            visible: true,              // 上传图片框toggle
            preViewVisible: false,      // 预览框toggle
            preViewURL: '',             // 预览图片的URL
            activeTab: 'upload',        // 当前选中的tab
            freePictureList: [],        // 免费图片数据
            uploadFileList: [],         // 上传的图片数组
            selectFileList: [],         // 选中的图片数组
            keyWord: '',                // 搜索关键字
            page: 1,                    // 请求免费图片页数
            loading: false,
            more_loading: false,
            lock: false                 // 底部请求是否上锁
        }
    },
    watch: {
        visible(val) {
            if (!val) {
                this.$emit('close', false)
            }
        }
    },
    methods: {
        // tabClick
        handleClick(val) {
            if (this.activeTab === 'select') {
                this.$nextTick(() => {
                    this.$el.querySelector('.imgWrapper').addEventListener('scroll', this.onScroll)
                })
            } else {
                this.$el.querySelector('.imgWrapper').removeEventListener('scroll', this.onScroll)
            }
        },
        // 上传图片前检查格式、大小
        uploadBefore(file) {
            const isImg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
            const isLt2M = file.size / 1024 / 1024 < 5
            if (!isImg) {
                this.$message.error('目前只支持 jpg / png / gif 的图片格式')
            } else if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 5MB')
            }
            return isImg && isLt2M
        },
        // 上传成功钩子
        onSuccess(response, file, fileList) {
            this.uploadFileList = fileList
        },
        // 上传失败钩子
        onError(err, file, fileList) {
            console.log('上传图片失败', err)
            this.$message.error('上传失败，请重新尝试!')
        },
        // 移除上传图片钩子
        onRemove(file, fileList) {
            this.uploadFileList = fileList
        },
        // 预览上传图片钩子
        onPreview(file) {
            this.preViewURL = file.url
            this.preViewVisible = true
        },
        // 上传完成或选择完成
        complete() {
            let uploadPicture = []
            let isUploadComplete = true
            if (this.activeTab === 'upload') {
                this.uploadFileList.forEach((item, index) => {
                    if (item.response) {
                        uploadPicture.push(item.response.data)
                    } else {
                        isUploadComplete = false
                    }
                })
            } else if (this.activeTab === 'select') {
                uploadPicture = this.selectFileList
            }
            if (!isUploadComplete) {
                this.$message.warning('部分图片没有上传成功，请重新尝试')
            }
            this.$emit('complete', uploadPicture)
            this.visible = false
        },
        // 清除上传的图片
        cancle() {
            this.visible = false
        },
        get_picture() {
            this.freePictureList = []
            this.selectFileList = []
            this.more_loading = false
            this.loading = true
            let params = {
                key: this.keyWord,
                page: 1
            }
            getPicture(params)
            .then(res => {
                if (res.data) {
                    this.freePictureList = res.data
                    this.page = 2
                } else {
                    this.freePictureList = []
                    this.loading = 'nothing'
                }
                this.loading = false
            })
            .catch(err => {
                console.log(err)
                this.itemJson = []
                this.loading = 'error'
            })
        },
        get_picture_more() {
            this.more_loading = true
            let params = {
                key: this.keyWord,
                page: this.page
            }
            getPicture(params)
            .then(res => {
                if (res.data) {
                    this.freePictureList.push(...res.data)
                    this.page++
                } else {
                    this.more_loading = 'nothing'
                }
                this.more_loading = false
                this.lock = false
            })
            .catch(err => {
                console.log(err)
                this.more_loading = 'error'
                this.lock = false
            })
        },
        onScroll() {
            let scrollEle = this.$el.querySelector('.imgWrapper')
            let wrapperEle = this.$el.querySelector('.img-list')
            let timeoutRef
            if (timeoutRef) {
                clearTimeout(timeoutRef)
            }
            timeoutRef = setTimeout(() => {
                let scrollEleScrollTop = scrollEle.scrollTop
                let scrollEleHeight = scrollEle.offsetHeight
                let wrapperEleHeight = wrapperEle.offsetHeight
                let isBottom = scrollEleScrollTop + scrollEleHeight >= wrapperEleHeight
                let isInit = this.freePictureList.length > 0 && !this.more_loading && this.page >= 2
                if (isBottom && isInit && !this.lock) {
                    this.get_picture_more()
                    this.lock = true
                }
            }, 150)
        }
    }
}
</script>
<style lang='less'>
@min_dialogHieght: 580px;
@max_dialogHieght: 580px;
@marginBottom: 80px;
@min_dialogBodyHeight: @min_dialogHieght - @marginBottom;
@max_dialogBodyHeight: @max_dialogHieght - @marginBottom;
@tabHeaderHeight: 56px;
@imgWrapperHeight: @min_dialogBodyHeight - @tabHeaderHeight - 80px;
.uploadPicture {
    .el-dialog{
        min-height: @min_dialogHieght;
        max-height: @max_dialogHieght;
        .el-dialog__header {
            padding: 0;
            .el-dialog__headerbtn {
                float: none;
                position: absolute;
                top: 20px;
                right: 20px;
                z-index: 1;
            }
        }
        .el-dialog__body {
            padding: 0;
            min-height: @min_dialogBodyHeight;
            max-height: @max_dialogBodyHeight;
            margin-bottom: @marginBottom;
            overflow-y: auto;
            .el-tabs {
                min-height: @min_dialogBodyHeight;
                max-height: @max_dialogBodyHeight;
                .el-tabs__header {
                    padding: 0 12px;
                    .el-tabs__item {
                        height: @tabHeaderHeight;
                        line-height: @tabHeaderHeight;
                        font-size: 16px;
                        font-weight: 400;
                    }
                }
                .el-tabs__content {
                    min-height: @min_dialogBodyHeight - @tabHeaderHeight;
                    max-height: @max_dialogBodyHeight - @tabHeaderHeight;
                    overflow: auto;
                }
            }
        }
        .el-dialog__footer{
            position: absolute;
            width: 100%;
            bottom: 10px;
            text-align: center;
        }
    }
    .upload {
        width: 100%;
        padding: 20px 15px 0;
        .el-upload-list__item-thumbnail {
            width: auto;
            height: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            max-width: 100%;
            max-height: 100%;
            margin: auto;
            user-select: none;
        }
    }
    .select {
        min-height: inherit;
        max-height: inherit;
        .imgInput {
            padding: 20px;
        }
        .imgWrapper {
            width: 100%;
            height: @imgWrapperHeight;
            padding: 0 15px;
            overflow: auto;
            .nothing{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                z-index: 1;
                text-align: center;
                p{
                    font-size: 14px;
                    color: #999;
                    margin-top: 5px;
                }
            }
            .tooltipImg{
                max-width: 800px;
                max-height: 500px;
            }
        }
    }
    .img-list{
        .img-item{
            width: 150px;
            height: 120px;
            position: relative;
            display: inline-block;
            border: 1px solid #e8e8e8;
            margin: 10px;
            cursor: pointer;
            label {
                width: 100%;
                height: 100%;
                &.is-active:before,
                &.is-checked:before{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background-color: rgba(0,0,0,.5);
                    background-position: 100% 0;
                    background-repeat: no-repeat;
                    text-align: center;
                    color: #fffacd;
                }
                &.is-active:after,&.is-checked:after{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -moz-transform: translate(-50%,-50%);
                    -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%,-50%);
                    z-index: 2;
                    font-size: 30px;
                    color: #fffacd;
                }
            }
            span{
                width: 100%;
                height: 100%;
                padding: 0;
                border: none;
                background-color: #fff;
            }
            img {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                max-width: 100%;
                max-height: 100%;
                margin: auto;
                user-select: none;
            }
        }
    }
}
</style>
