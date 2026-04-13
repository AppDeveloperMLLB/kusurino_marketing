<template>
  <div>
    <!-- ==================== HERO ==================== -->
    <section class="hero-section">
      <div class="hero-bg" />
      <v-container class="hero-container">
        <v-row align="center" justify="center" class="fill-height">
          <!-- Text -->
          <v-col cols="12" md="6" class="text-center text-md-start">
            <v-chip
              color="white"
              variant="tonal"
              class="mb-6 font-weight-medium"
              style="opacity: 0.9;"
              label
            >
              <v-icon start icon="mdi-shield-check" />
              iOS 対応
            </v-chip>
            <h1 class="hero-title mb-4">
              毎日の服薬を、<br />
              もっとかんたんに。
            </h1>
            <p class="hero-subtitle mb-8">
              薬剤登録からリマインダー通知・服薬記録まで、<br class="d-none d-sm-block"/>
              ひとつのアプリで完結。飲み忘れゼロを目指そう。
            </p>
            <div class="d-flex flex-wrap ga-3 justify-center justify-md-start" id="download">
              <a href="#" class="store-btn store-btn--ios d-flex align-center px-4 py-3 rounded-xl">
                <v-icon icon="mdi-apple" size="28" class="mr-3" style="color:white;" />
                <div>
                  <div class="store-btn__sub">Download on the</div>
                  <div class="store-btn__main">App Store</div>
                </div>
              </a>
            </div>
            <p class="mt-4 text-caption" style="color:rgba(255,255,255,0.65);">
              完全無料でご利用いただけます
            </p>
          </v-col>

          <!-- Phone Mockup -->
          <v-col cols="10" sm="7" md="5" class="d-flex justify-center">
            <div class="phone-wrap">
              <div class="phone-frame">
                <div class="phone-notch" />
                <div class="phone-screen">
                  <transition name="screenshot-fade" mode="out-in">
                    <img
                      :key="currentScreenshot"
                      :src="screenshots[currentScreenshot].src"
                      :alt="screenshots[currentScreenshot].label"
                      class="screenshot-img"
                    />
                  </transition>
                </div>
              </div>
              <!-- Dot indicators -->
              <div class="screenshot-dots">
                <button
                  v-for="(s, i) in screenshots"
                  :key="i"
                  :class="['dot', { 'dot--active': i === currentScreenshot }]"
                  :aria-label="s.label"
                  @click="goTo(i)"
                />
              </div>
              <!-- Glow effect -->
              <div class="phone-glow" />
            </div>
          </v-col>
        </v-row>
      </v-container>

      <!-- Wave divider -->
      <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8FAFB"/>
        </svg>
      </div>
    </section>

    <!-- ==================== STATS ==================== -->
    <section class="py-12" style="background: #F8FAFB;">
      <v-container>
        <v-row justify="center" class="ga-0">
          <v-col cols="12" sm="4" v-for="stat in stats" :key="stat.value" class="text-center px-6 py-4">
            <div class="text-h3 font-weight-black mb-1" style="color: #0277BD;">{{ stat.value }}</div>
            <div class="text-body-2 font-weight-medium" style="color:#546E7A;">{{ stat.label }}</div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ==================== PROBLEM ==================== -->
    <section class="py-16" style="background: #FFFFFF;">
      <v-container>
        <v-row justify="center" class="mb-10">
          <v-col cols="12" md="7" class="text-center">
            <v-chip color="primary" variant="tonal" class="mb-4" label>課題</v-chip>
            <h2 class="section-title mb-4">
              服薬管理の悩みは<br />あなただけではありません
            </h2>
            <p class="section-subtitle">
              多くの方が、薬の飲み忘れや管理の煩雑さに悩んでいます。<br />
              クスリノは、そのすべての悩みをシンプルに解決します。
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" class="ga-0">
          <v-col
            cols="12" sm="6" lg="4"
            v-for="problem in problems"
            :key="problem.title"
            class="pa-3"
          >
            <v-card rounded="xl" elevation="0" class="problem-card pa-6 fill-height" border>
              <div class="problem-icon mb-4">{{ problem.emoji }}</div>
              <h3 class="text-h6 font-weight-bold mb-2">{{ problem.title }}</h3>
              <p class="text-body-2" style="color:#546E7A; line-height:1.8;">{{ problem.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ==================== FEATURES ==================== -->
    <section id="features" class="py-16" style="background: #F0F7FF;">
      <v-container>
        <v-row justify="center" class="mb-10">
          <v-col cols="12" md="7" class="text-center">
            <v-chip color="primary" variant="tonal" class="mb-4" label>機能</v-chip>
            <h2 class="section-title mb-4">
              服薬管理に必要なすべてが<br />ひとつのアプリに
            </h2>
            <p class="section-subtitle">
              シンプルで使いやすい設計で、誰でもすぐに始められます。
            </p>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12" sm="6" lg="4"
            v-for="feature in features"
            :key="feature.title"
            class="pa-3"
          >
            <v-card rounded="xl" elevation="0" class="feature-card pa-6 fill-height" style="background:white;">
              <div
                class="feature-icon-wrap d-flex align-center justify-center rounded-xl mb-5"
                :style="{ background: feature.bg }"
              >
                <v-icon :icon="feature.icon" :color="feature.color" size="28" />
              </div>
              <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
              <p class="text-body-2" style="color:#546E7A; line-height:1.8;">{{ feature.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ==================== TARGET USERS ==================== -->
    <section class="py-16" style="background: #FFFFFF;">
      <v-container>
        <v-row justify="center" class="mb-10">
          <v-col cols="12" md="7" class="text-center">
            <v-chip color="secondary" variant="tonal" class="mb-4" label>こんな方に</v-chip>
            <h2 class="section-title mb-4">クスリノが<br />おすすめの方</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <v-list rounded="xl" elevation="0" style="background:transparent;">
              <v-list-item
                v-for="user in targetUsers"
                :key="user"
                :prepend-icon="'mdi-check-circle'"
                color="secondary"
                class="mb-3 rounded-xl"
                style="background: #F1F8E9; font-size: 0.95rem;"
                :title="user"
              />
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ==================== CTA ==================== -->
    <section class="cta-section py-20">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="7" class="text-center">
            <v-icon icon="mdi-shield-plus" color="white" size="52" class="mb-4" style="opacity:0.9;" />
            <h2 class="text-h4 text-md-h3 font-weight-black text-white mb-4" style="letter-spacing:-0.02em;">
              今すぐ無料で<br />はじめましょう
            </h2>
            <p class="text-body-1 mb-8" style="color:rgba(255,255,255,0.8); line-height:1.8;">
              薬の飲み忘れゼロへ。ダウンロードは完全無料です。
            </p>
            <div class="d-flex flex-wrap ga-3 justify-center">
              <a href="#" class="store-btn store-btn--ios d-flex align-center px-4 py-3 rounded-xl">
                <v-icon icon="mdi-apple" size="28" class="mr-3" style="color:white;" />
                <div>
                  <div class="store-btn__sub">Download on the</div>
                  <div class="store-btn__main">App Store</div>
                </div>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ---- スクリーンショット設定 ----
// public/screenshots/ に画像を追加した場合はここに追記してください
const screenshots = [
  { src: '/screenshots/screenshot-1.png', label: 'ホーム画面' },
  { src: '/screenshots/screenshot-2.png', label: 'カレンダー' },
  { src: '/screenshots/screenshot-3.png', label: '薬の登録' },
]

const currentScreenshot = ref(0)
let timer = null

function goTo(index) {
  currentScreenshot.value = index
  resetTimer()
}

function next() {
  currentScreenshot.value = (currentScreenshot.value + 1) % screenshots.length
}

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(next, 3000)
}

onMounted(() => resetTimer())
onUnmounted(() => clearInterval(timer))

// ---- 静的データ ----
const stats = [
  { value: '70%+', label: 'の患者が飲み忘れを経験したことがある' },
  { value: '3回',  label: '1日の平均服用回数（複数種類の薬を服用の場合）' },
  { value: '無料',  label: '完全無料でご利用いただけます' },
]

const problems = [
  {
    emoji: '😵',
    title: '複数の薬の管理が大変',
    desc: '種類が多い薬を毎日管理するのは複雑で、どれを飲んだか混乱することがあります。',
  },
  {
    emoji: '⏰',
    title: '服薬タイミングを忘れがち',
    desc: '仕事や家事に追われていると、服薬時間を忘れてしまうことが多くなります。',
  },
  {
    emoji: '👨‍👩‍👧',
    title: '家族の服薬状況が把握できない',
    desc: '離れて暮らす家族や高齢の親が、きちんと薬を飲めているか確認する手段がありません。',
  },
]

const features = [
  {
    icon: 'mdi-pill',
    color: '#0277BD',
    bg: 'rgba(2,119,189,0.1)',
    title: '薬剤登録・管理',
    desc: '薬名・用法用量・服用期間・写真を登録。最大3種類まで無料で管理できます。',
  },
  {
    icon: 'mdi-calendar-clock',
    color: '#7B1FA2',
    bg: 'rgba(123,31,162,0.1)',
    title: '服薬スケジュール設定',
    desc: '1日複数回・曜日指定・期間設定に対応。スヌーズ機能で飲み忘れを徹底防止。',
  },
  {
    icon: 'mdi-bell-ring',
    color: '#E65100',
    bg: 'rgba(230,81,0,0.1)',
    title: 'プッシュ通知リマインダー',
    desc: '服薬時間に通知をお届け。飲み忘れた場合は再通知で確実にサポートします。',
  },
  {
    icon: 'mdi-hand-pointing-up',
    color: '#2E7D32',
    bg: 'rgba(46,125,50,0.1)',
    title: 'ワンタップ服薬記録',
    desc: '通知画面からタップひとつで服薬を記録。手間なく続けられます。',
  },
  {
    icon: 'mdi-calendar-month',
    color: '#00838F',
    bg: 'rgba(0,131,143,0.1)',
    title: '服薬カレンダー',
    desc: '月間の服薬状況をカレンダーで可視化。服薬率の統計も確認できます。',
  },
]

const targetUsers = [
  '複数の薬を日常的に服用している方（高血圧・糖尿病・慢性疾患など）',
  '家族の服薬を管理・見守りたい介護者の方',
  '薬の飲み忘れが多い方・自己管理が苦手な方',
  '服薬状況を医師や薬剤師に共有したい方',
]
</script>

<style scoped>
/* ---- Hero ---- */
.hero-section {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #0D47A1 0%, #0277BD 45%, #00838F 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
  pointer-events: none;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: 10%;
  left: -5%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(0,188,212,0.08);
  pointer-events: none;
}

.hero-container {
  position: relative;
  z-index: 1;
  padding-top: 40px;
  padding-bottom: 80px;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: white;
  line-height: 1.25;
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.85);
  line-height: 1.8;
}

.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.hero-wave svg {
  display: block;
  width: 100%;
  height: 80px;
}

/* ---- Store Buttons ---- */
.store-btn {
  text-decoration: none;
  background: rgba(255,255,255,0.15);
  border: 1.5px solid rgba(255,255,255,0.35);
  backdrop-filter: blur(8px);
  transition: background 0.2s, transform 0.2s;
  min-width: 155px;
}
.store-btn:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-2px);
}
.store-btn__sub {
  font-size: 10px;
  color: rgba(255,255,255,0.75);
  line-height: 1.2;
}
.store-btn__main {
  font-size: 16px;
  font-weight: 700;
  color: white;
  line-height: 1.3;
}

/* ---- Phone Mockup ---- */
.phone-wrap {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.phone-frame {
  width: 260px;
  height: 530px;
  background: #1a1a1a;
  border-radius: 44px;
  padding: 12px;
  box-shadow:
    0 0 0 2px #333,
    0 30px 80px rgba(0,0,0,0.45),
    inset 0 0 0 1px rgba(255,255,255,0.08);
  position: relative;
}

.phone-notch {
  position: absolute;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 22px;
  background: #1a1a1a;
  border-radius: 0 0 18px 18px;
  z-index: 10;
}

.phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 34px;
  background: #111;
  overflow: hidden;
  position: relative;
}

/* Screenshot image */
.screenshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  border-radius: 34px;
}

/* Slide transition */
.screenshot-fade-enter-active,
.screenshot-fade-leave-active {
  transition: opacity 0.5s ease;
}
.screenshot-fade-enter-from,
.screenshot-fade-leave-to {
  opacity: 0;
}

/* Dot indicators */
.screenshot-dots {
  display: flex;
  gap: 8px;
  margin-top: 16px;
  justify-content: center;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.25s, transform 0.25s;
}
.dot--active {
  background: white;
  transform: scale(1.3);
}

.phone-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(0,188,212,0.2) 0%, transparent 70%);
  pointer-events: none;
  z-index: -1;
}


/* ---- Problem cards ---- */
.problem-card {
  transition: box-shadow 0.2s, transform 0.2s;
}
.problem-card:hover {
  box-shadow: 0 8px 32px rgba(2,119,189,0.12) !important;
  transform: translateY(-3px);
}
.problem-icon { font-size: 2.5rem; }

/* ---- Feature cards ---- */
.feature-card {
  border: 1px solid #E8F4FD;
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature-card:hover {
  box-shadow: 0 8px 32px rgba(2,119,189,0.12) !important;
  transform: translateY(-3px);
}
.feature-icon-wrap {
  width: 52px;
  height: 52px;
}

/* ---- CTA ---- */
.cta-section {
  background: linear-gradient(135deg, #0D47A1 0%, #0277BD 50%, #00838F 100%);
}
</style>
