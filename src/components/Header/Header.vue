<template>
  <header>
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="logo">
            <router-link :to="{name: 'home'}"><img src="images/logo.png" alt=""/></router-link>
            <p>Câmara do Comércio de Moçambique</p>
          </div>
          <q-business-details/>

        </div>
      </div>
    </div>
    <div class="mainmenu-area" id="sohag">
      <div class="container">
        <div class="row">
          <router-link :to="{name: 'home'}"><img src="images/logo-two-menu.png" alt=""/></router-link>
          <q-navigation-menu/>
          <div class="mainmenu-right">
            <div class="search-box">
              <i class="fa fa-search first_click" aria-hidden="true"></i>
              <i class="fa fa-times second_click" aria-hidden="true"></i>
            </div>
          </div>
          <div class="search-box-text">
            <form action="search">
              <input type="text" name="search" id="all-search" placeholder="Search Here"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import QNavigationMenu from "./NavigationMenu";
import QBusinessDetails from "./BusinessDetails";

export default {
  name: "QHeader",
  components: { QBusinessDetails, QNavigationMenu }
}
</script>

<style scoped>

</style>
