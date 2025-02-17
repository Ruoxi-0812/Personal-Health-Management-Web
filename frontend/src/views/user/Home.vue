<template>
    <div>
        <el-row>
            <el-col :span="6">
                <Banner :data="newsTopList" @on-click="onBannerClick" />
            </el-col>
            <el-col :span="18">
                <el-col @click.native="newsItemClick(news)" :span="6" :key="index" v-for="(news, index) in newsTopList">
                    <div style="padding: 0 15px;">
                        <img :src="news.cover" :alt="news.name" style="width: 100%;min-height: 128px;max-height: 158px;border-radius: 10px;">
                        <h2 class="news-title">{{ news.name }}</h2>
                        <div style="font-size: 12px;">
                            <span class="news-tags">Category: {{ news.tagName }}</span>
                            <span style="margin-left: 10px;">{{ parseTime(news.createTime) }}</span>
                        </div>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        <el-row>
            <TagLine :dataList="tagsList" @on-click="tagOnClick" />
        </el-row>
        <el-row>
            <el-row v-if="newsList.length === 0">
                <el-empty description="No news available"></el-empty>
            </el-row>
            <el-row>
                <el-col class="new-item" @click.native="newsItemClick(news)" :span="4" :key="index"
                    v-for="(news, index) in newsList">
                    <img :src="news.cover" :alt="news.name"  style="width: 100%;min-height: 108px;max-height: 188px;border-radius: 10px;">
                    <h3 class="news-title">{{ news.name }}</h3>
                    <div style="font-size: 12px;">
                        <span class="news-tags">{{ news.tagName }}</span>
                        <span style="margin-left: 10px;">{{ parseTime(news.createTime) }}</span>
                    </div>
                </el-col>
            </el-row>
        </el-row>
    </div>
</template>

<script>
import TagLine from "@/components/TagLine"
import Banner from "@/components/Banner"
import { timeAgo } from "@/utils/data"

export default {
    components: { TagLine, Banner },
    data() {
        return {
            tagsList: [], // Tag list
            newsList: [], // Health news list
            newsTopList: [], // Recommended health news list
            newQueryDto: { tagId: null },
        }
    },
    created() {
        this.loadAllTags();
        this.loadAllNews();
        this.loadAllTopNews();
    },
    methods: {
        // Callback for clicking the banner
        onBannerClick(banner) {
            sessionStorage.setItem('newsInfo', JSON.stringify(banner));
            this.$router.push('/news-detail');
        },
        // Callback for clicking a news item in the list
        newsItemClick(news) {
            sessionStorage.setItem('newsInfo', JSON.stringify(news));
            this.$router.push('/news-detail');
        },
        // Convert timestamp to readable time
        parseTime(time) {
            return timeAgo(time);
        },
        // Callback for clicking a tag
        tagOnClick(tags) {
            this.newQueryDto.tagId = tags.id;
            this.loadAllNews();
        },
        // Fetch all tag records
        loadAllTags() {
            this.$axios.post('/tags/query', {}).then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.tagsList = data.data;
                    this.tagsList.unshift({ name: 'All', id: null });
                }
            })
        },
        // Fetch top recommended news
        loadAllTopNews() {
            const newQueryDto = { isTop: true };
            this.$axios.post('/news/query', newQueryDto).then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.newsTopList = data.data;
                }
            })
        },
        // Fetch news based on selected tag
        loadAllNews() {
            this.$axios.post('/news/query', this.newQueryDto).then(response => {
                const { data } = response;
                if (data.code === 200) {
                    this.newsList = data.data;
                }
            })
        }
    }
};
</script>


<style scoped lang="scss">
.news-tags {
    display: inline-block;
    padding: 2px 5px;
    background-color: rgba(29, 124, 225,0.6);
    color: rgb(255,255,255);
    border-radius: 3px;
}

.new-item {
    margin-bottom: 10px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 10px;

    img {
        width: 100%;
        height: 118px;
        border-radius: 3px;
    }
}

.new-item:hover {
    box-shadow: 0 4px 6px rgba(36, 36, 36, 0.1), 0 1px 3px rgba(40, 40, 40, 0.06);
}

.news-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>