<template>
    <div>
        <video
            ref="videoPlayer"
            class="video-js vjs-default-skin vjs-big-play-centered"
        ></video>
        <br/>
        <el-button type='primary' size="large" @click="addMarkers">打点</el-button>
    </div>
</template>

<script setup>
import "videojs-markers/dist/videojs.markers.min.css";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-markers";

import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()

const _this = instance.appContext.config.globalProperties
let player = ref('')
let videoPlayer = ref('')
let options = ref({
        autoplay: true, //自动播放
        height: 300,
        width: 400,
        controls: true, //用户可以与之交互的控件
        loop: true, //视频一结束就重新开始
        muted: false, //默认情况下将使所有音频静音
        playsinline: true,
        webkitPlaysinline: true,
        // aspectRatio:"16:9",//显示比率
        playbackRates: [0.5, 1, 1.5, 2],
        fullscreen: {
          options: { navigationUI: "hide" }
        },
        sources: [
          {
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            type: "video/mp4",
          },
    ],
        //音量条更改为竖直
    controlBar: {
        timeDivider: true,
        remainingTimeDisplay: false,
                        volumePanel: {
                            inline: false,
                            CurrentTimeDisplay: true
                        }
                    }

})

onMounted(() => { 
    player.value = videojs(
      videoPlayer.value,
      options.value,
      function onPlayerReady() {
        console.log(player.value)
      }
    );
    player.value.markers({
        markerTip: {
        display: true,
      },
      markerStyle: {
          width: "7px",
          height:'7px',
        "background-color": "red",
          "border-radius": "50%",
          position: 'absolute',
        bottom:'-2px'
        },
        markers: [
            // {
            //     time: 0.694313,
            //     class: "custom-marker-class",
            //     text: '标记1',
            // },
            // {
            //     time: 5.694313,
            //     class: "custom-marker-class",
            //     text: '标记2',
            // },
            // {
            //     time: 10.694313,
            //     class: "custom-marker-class",
            //     text: '标记3',
            // },
        ]
    })
})

function addMarkers() {
    console.log(player.value.currentTime())
    player.value.markers.add([{
        time:player.value.currentTime()
    }])
}
</script>

<style scoped>
.video-js{
    /* width:600px;
    height:400px; */
}
</style>