<template>
  <div class="nav-menu">
    <nav class="navbar navbar-default">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar-one bar-stick"></span>
          <span class="icon-bar-two bar-stick"></span>
          <span class="icon-bar-three bar-stick"></span>
        </button>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li :class="[menu.sub_menus.length ? 'dropdown' : '']" v-for="(menu, index) in menus" :key="index">
            <a href="#" @click.prevent class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
               aria-expanded="false"
               v-if="menu.sub_menus.length"
               :class="[
               menu.sub_menus && menu.sub_menus.length && menu.sub_menus.find(sub => sub.name === $route.name)
               ? 'active'
               : ''
           ]">
              <!--              <i class="fa fa-list-alt" aria-hidden="true"></i>-->
              <span> {{ $t(menu.name) }}</span>
            </a>
            <router-link :to="{name: menu.to}" v-else>
              <span> {{ $t(menu.name) }}</span>
            </router-link>
            <ul class="dropdown-menu" v-show="menu.sub_menus && menu.sub_menus.length">
              <li :class="[sub.sub_menus.length ? 'dropdown' : '']" v-for="(sub, index) in menu.sub_menus"
                  :key="'sub'+index">
                <a v-if="sub.sub_menus.length" href="#" @click.prevent class="dropdown-toggle" data-toggle="dropdown"
                   role="button"
                   aria-haspopup="true" aria-expanded="false">
                  <span> {{ $t(sub.name) }}</span>
                </a>
                <router-link v-else :to="{name: sub.to}">
                  {{ $t(sub.name) }}
                </router-link>
                <ul class="dropdown-menu" v-show="sub.sub_menus && sub.sub_menus.length">
                  <li v-for="(deep_sub, index) in sub.sub_menus" :key="'deepsub'+index">
                    <router-link :to="{name: deep_sub.to}">{{ deep_sub.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </div>
</template>

<script>
import menus from '@/data/menu.json'

export default {
  name: "QNavigationMenu",
  data() {
    return {
      menus: menus
    }
  }
}
</script>

<style scoped>

</style>
