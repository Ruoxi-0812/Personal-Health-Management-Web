<template>
    <div>
        <div style="line-height: 70px;padding: 0 50px;">
            <el-row>
                <el-col :span="6">
                    <Logo sysName="Healthy Living" />
                </el-col>
                <el-col :span="18">
                    <span style="float: right;display: flex; align-items: center; flex-wrap: wrap;">
                        <img style="width: 30px;height: 30px;border-radius: 15px;" :src="userInfo.userAvatar" />
                        <span style="margin-left: 8px;">{{ userInfo.userName }}</span>
                    </span>
                </el-col>
            </el-row>
        </div>
        <div style="height: 20px;background-color: rgb(248, 248, 248);"></div>
        <div style="padding: 10px 50px;">
            <div>
                <p style="font-size: 16px;padding: 10px 0;">
                    Message Center
                    <span @click="clearMessage" class="clear-message">
                        <i class="el-icon-s-open"></i>
                    </span>
                </p>
            </div>
            <div>
                <span @click="messageTypeSelected(messageType.type)" class="message-type"
                    v-for="(messageType, index) in messageTypes" :key="index">
                    {{ messageType.detail }}
                </span>
            </div>
            <div style="padding: 30px 0;">
                <div v-if="messageList.length === 0">
                    <el-empty description="No messages available"></el-empty>
                </div>
                <div>
                    <div style="margin-bottom: 5px;padding: 5px;border-radius: 5px;"
                        :style="{ backgroundColor: !message.isRead ? 'rgb(248,248,248)' : '' }"
                        v-for="(message, index) in messageList" :key="index">
                        <el-row style="padding: 15px 0">
                            <el-col :span="1">
                                <span class="bell-icon">
                                    <span v-if="message.messageType === 1 || message.messageType === 2">
                                        <img style="width: 30px;height: 30px;border-radius: 20px;"
                                            :src="message.senderAvatar" alt="" srcset="">
                                    </span>
                                    <i v-if="message.messageType === 3" class="el-icon-data-analysis"></i>
                                </span>
                            </el-col>
                            <el-col :span="23">
                                <div>
                                    <div v-if="message.messageType === 1 || message.messageType === 2">
                                        <div>
                                            {{ message.senderName }}
                                        </div>
                                    </div>
                                    <div>
                                        <span class="message-content" v-if="message.messageType === 1"
                                            style="font-size: 14px;">{{ commentDeal(message.content)[2] }}</span>
                                        <span class="message-content" v-else style="font-size: 14px;">{{ message.content
                                            }}</span>
                                    </div>
                                </div>
                                <div>
                                    <span class="message-time">{{ message.createTime }}</span>
                                    <span @click="replyUser(message)"  v-if="message.messageType === 1"
                                        style="font-size: 10px;margin-left: 10px;cursor: pointer;">Reply</span>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Logo from '@/components/Logo';
import Swal from 'sweetalert2';
export default {
    components: { Logo },
    data() {
        return {
            userInfo: {},
            messageQueryDto: {},
            messageList: [],
            messageTypes: [],
            dialogEvaluationsOperation: false,
            message: {},
        };
    },
    created() {
        // 1. Retrieve current user information
        this.getUserInfo();
        // 2. Load all user messages
        this.loadAllUsersMessage();
        // 3. Load all message types
        this.loadAllMessageType();
    },
    methods: {
        commentDeal(content) {
            return content.split(';');
        },
        // Reply to user
        replyUser(message) {
            Swal.fire({
                title: `Reply to 【${message.senderName}】`,
                input: 'text',
                inputPlaceholder: 'Enter your reply',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                cancelButtonText: 'Cancel',
                inputValidator: (value) => {
                    if (!value) {
                        return 'Content cannot be empty';
                    } else {
                        this.saveCommentData(message.senderId, value, this.commentDeal(message.content));
                    }
                }
            }).then((result) => {
                console.log("...");
            });
        },
        // Save reply data
        saveCommentData(senderId, content, ary) {
            const comment = {
                content,
                parentId: ary[0],
                contentType: 'NEWS',
                contentId: ary[1],
                replierId: senderId
            }
            this.$axios.post('/evaluations/insert', comment).then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.$notify({
                        title: 'Comment Reply',
                        message: 'Reply successful',
                        type: 'success'
                    });
                }
            }).catch(error => {
                console.log("Reply error:", error);
            })
        },
        // Mark all messages as read
        async clearMessage() {
            const confirmed = await this.$swalConfirm({
                title: 'Clear Messages',
                text: `Do you want to mark all messages as read?`,
                icon: 'warning',
            });
            if (confirmed) {
                this.$axios.put('/message/clearMessage').then(response => {
                    const { data } = response;
                    if (data.code === 200) {
                        this.loadAllUsersMessage();
                    }
                })
            }
        },
        evaluationsPut() {
            this.$axios.put('/message/clearMessage').then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.loadAllUsersMessage();
                }
            })
        },
        // Handle reply
        replyEvalustions(message) {
            this.message = message;
            this.dialogEvaluationsOperation = true;
        },
        // Select message type
        messageTypeSelected(messageType) {
            this.messageQueryDto.messageType = messageType;
            // If the message is a comment, additional processing is required
            this.loadAllUsersMessage();
        },
        getUserInfo() {
            const userInfo = sessionStorage.getItem('userInfo');
            this.userInfo = JSON.parse(userInfo);
        },
        // Load all message types
        loadAllMessageType() {
            this.$axios.get('/message/types').then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.messageTypes = data.data;
                    const messageType = { type: null, detail: 'All Messages' };
                    this.messageTypes.unshift(messageType);
                    this.messageTypes.map(entity => entity.isCheck = false);
                }
            })
        },
        loadAllUsersMessage() {
            const userInfo = sessionStorage.getItem('userInfo');
            const entity = JSON.parse(userInfo);
            this.messageQueryDto.userId = entity.id;
            this.$axios.post('/message/query', this.messageQueryDto).then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.messageList = data.data;
                }
            })
        },
    },
};
</script>
<style scoped lang="scss">
.bell-icon {
    display: inline-block;
    height: 30px;
    width: 30px;
    border-radius: 20px;
    background-color: rgb(82, 152, 237);
    border: 3px solid rgb(212, 227, 230);

    i {
        line-height: 30px;
        width: 30px;
        text-align: center;
        font-size: 25px;
        color: #f1f1f1;
    }
}

.message-time {
    font-size: 12px;
    color: rgb(131, 104, 102);
}

.clear-message {
    display: inline-block;
    margin-left: 10px;
    padding: 6px 12px;
    border-radius: 5px;
}

.clear-message:hover {
    background-color: #f1f1f1;
}

.news-tags {
    display: inline-block;
    padding: 2px 5px;
    background-color: rgb(222, 243, 251);
    color: #1d3cc4;
    font-size: 14px;
    border-radius: 3px;
}

.message-type {
    display: inline-block;
    font-size: 18px;
    margin-right: 25px;
    cursor: pointer;
}

.message-content {
    display: inline-block;
    margin: 5px 0;
    font-size: 22px;
}
</style>
