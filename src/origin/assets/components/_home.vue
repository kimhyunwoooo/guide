<template>
  <div id="pageHome" v-bind:class="[toggleView ? 'article-content list-view__mockup':'article-content']">
    <ul class="list-type">
      <li>
        <a href="#none" class="link-type" v-on:click="toggleView = false" v-bind:class="[toggleView ? '':'link-type__on']">
          <span class="icon-mockup"></span>
          Mock up
        </a>
      </li>
      <li>
        <a href="#none" class="link-type" v-on:click="toggleView = true" v-bind:class="[toggleView ? 'link-type__on':'']">
          <span class="icon-imagelist"></span>
          Image List
        </a>
      </li>
    </ul>
    <div class="box-search">
      <span class="icon-search"></span>
      <input type="text" id="searchInp" class="input-search" placeholder="Search Script">
    </div>
    <div class="view-item">
      <h3 class="title-sub">Framer Interactions</h3>
      <ul class="list-item">
        <li>
          <a href="#none" class="link-thumb">
            <span class="bg-phone">
              <span class="box-gif" style="background-image:url(https://kimhyunwoooo.github.io/guide/docs/assets/images/move.gif)"></span>
              <span class="box-photo" style="background-image:url(https://kimhyunwoooo.github.io/guide/docs/assets/images/photo.jpg)"></span>
            </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View ScreenView</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>


    <div class="view-item">
      <h3 class="title-sub">Framer Interactions</h3>
      <ul class="list-item">
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#none" class="link-thumb">
                  <span class="bg-phone">
                    <span class="box-gif" style="background-image:url(src/origin/assets/images/move.gif)"></span>
                    <span class="box-photo" style="background-image:url(src/origin/assets/images/photo.jpg)"></span>
                  </span>
            <span class="box-thumb"></span>
            <span class="box-detail">VIEW MORE</span>
          </a>
          <span class="text-cate">States</span>
          <strong class="title-item">View Screen</strong>
          <p class="text-desc">페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 페이지 스크롤시 </p>
          <p class="text-type">활용 영역 : 상세페이지/읽기페이지</p>
          <a href="#none" class="link-example" target="_blank">https://framer.cloud/vvVaY</a>
          <ul class="wrap-tag">
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
            <li>
              <a href="#none" class="link-tag">randomChoice</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <detail-modal></detail-modal>
  </div>
</template>

<script>

  import detailModal from './_detail-Modal'
  import itemList from '../data/itemList'
    export default {
      data : function(){
        return {
          toggleView:false,
          itemList : itemList.item
        }
      },
      components: {
        'detail-modal' : detailModal
      }
    }
</script>
