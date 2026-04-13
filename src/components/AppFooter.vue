<template>
  <v-footer color="#0D1B2A" class="py-10">
    <v-container>
      <v-row>
        <!-- Brand -->
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-icon icon="mdi-shield-plus" color="primary" size="30" class="mr-2" />
            <span class="text-h6 font-weight-bold text-white">クスリノ</span>
          </div>
          <p class="text-body-2" style="color: #90A4AE; line-height: 1.8;">
            薬の飲み忘れを防ぐ服薬記録・リマインダーアプリ。<br />
            毎日の服薬を、もっとかんたんに。
          </p>
          <div class="d-flex ga-3 mt-4">
            <v-btn icon variant="text" color="#90A4AE" href="#">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon variant="text" color="#90A4AE" href="#">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Links -->
        <v-col cols="6" md="2" offset-md="2">
          <p class="text-caption font-weight-bold text-uppercase mb-4" style="color: #546E7A; letter-spacing: 0.1em;">サービス</p>
          <div class="d-flex flex-column ga-2">
            <router-link to="/" class="footer-link">ホーム</router-link>
            <a href="/#features" class="footer-link">機能</a>
            <a href="#download" class="footer-link">ダウンロード</a>
          </div>
        </v-col>

        <v-col cols="6" md="2">
          <p class="text-caption font-weight-bold text-uppercase mb-4" style="color: #546E7A; letter-spacing: 0.1em;">サポート</p>
          <div class="d-flex flex-column ga-2">
            <router-link to="/support" class="footer-link">サポート</router-link>
            <router-link to="/privacy-policy" class="footer-link">プライバシーポリシー</router-link>
            <router-link to="/terms-of-service" class="footer-link">利用規約</router-link>
          </div>
        </v-col>

        <!-- Download -->
        <v-col cols="12" md="2">
          <p class="text-caption font-weight-bold text-uppercase mb-4" style="color: #546E7A; letter-spacing: 0.1em;">ダウンロード</p>
          <div class="d-flex flex-column ga-3">
            <store-badge store="ios" />
          </div>
        </v-col>
      </v-row>

      <v-divider color="#1E3A4F" class="my-6" />

      <div class="d-flex flex-column flex-md-row align-center justify-space-between">
        <p class="text-caption" style="color: #546E7A;">
          © 2025 クスリノ. All rights reserved.
        </p>
        <p class="text-caption mt-2 mt-md-0" style="color: #546E7A;">
          Bundle ID: com.mllb.mediguard &nbsp;|&nbsp; iOS
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
// StoreBadge is defined inline for simplicity
const StoreBadge = {
  props: ['store'],
  template: `
    <a href="#" class="d-block" style="text-decoration: none;">
      <div class="store-badge-btn d-flex align-center px-3 py-2 rounded-lg" style="background:#1E3A4F; border:1px solid #2E4A5F;">
        <v-icon :icon="store === 'ios' ? 'mdi-apple' : 'mdi-google-play'" color="white" size="20" class="mr-2"/>
        <div>
          <div style="color:#90A4AE; font-size:9px; line-height: 1.2;">{{ store === 'ios' ? 'Download on the' : 'Get it on' }}</div>
          <div style="color:white; font-size:13px; font-weight:600; line-height:1.2;">{{ store === 'ios' ? 'App Store' : 'Google Play' }}</div>
        </div>
      </div>
    </a>
  `
}
</script>

<style scoped>
.footer-link {
  color: #90A4AE;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #fff;
}
</style>
