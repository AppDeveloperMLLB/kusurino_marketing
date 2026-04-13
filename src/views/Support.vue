<template>
  <div>
    <div class="page-hero">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon icon="mdi-lifebuoy" size="48" color="white" class="mb-4" style="opacity:0.9;" />
            <h1 class="text-h4 text-md-h3 font-weight-black text-white mb-3" style="letter-spacing:-0.02em;">
              サポート
            </h1>
            <p style="color:rgba(255,255,255,0.8);">お困りのことがあればお気軽にご連絡ください</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="py-12">
      <v-row justify="center" class="ga-0">

        <!-- FAQ -->
        <v-col cols="12" md="8" class="mb-10">
          <div class="text-center mb-8">
            <v-chip color="primary" variant="tonal" class="mb-3" label>よくある質問</v-chip>
            <h2 class="text-h5 font-weight-bold" style="letter-spacing:-0.01em;">FAQ</h2>
          </div>

          <v-expansion-panels variant="accordion" rounded="xl">
            <v-expansion-panel
              v-for="faq in faqs"
              :key="faq.q"
              rounded="lg"
              class="mb-2"
            >
              <v-expansion-panel-title class="font-weight-medium py-5">
                <template #default>
                  <div class="d-flex align-start ga-3">
                    <span class="faq-q-badge">Q</span>
                    <span>{{ faq.q }}</span>
                  </div>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="d-flex align-start ga-3 py-2">
                  <span class="faq-a-badge">A</span>
                  <p class="text-body-2" style="color:#37474F; line-height:1.9;">{{ faq.a }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>

        <!-- Contact -->
        <v-col cols="12" md="8">
          <v-card rounded="xl" elevation="0" border class="pa-8">
            <div class="text-center mb-8">
              <v-chip color="secondary" variant="tonal" class="mb-3" label>お問い合わせ</v-chip>
              <h2 class="text-h5 font-weight-bold mb-2" style="letter-spacing:-0.01em;">
                解決しない場合はご連絡ください
              </h2>
              <p class="text-body-2" style="color:#546E7A;">通常3営業日以内にご返信します</p>
            </div>

            <v-form ref="formRef" @submit.prevent="submitForm">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.name"
                    label="お名前"
                    variant="outlined"
                    rounded="lg"
                    :rules="[v => !!v || 'お名前を入力してください']"
                    required
                    prepend-inner-icon="mdi-account-outline"
                  />
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="form.email"
                    label="メールアドレス"
                    type="email"
                    variant="outlined"
                    rounded="lg"
                    :rules="[
                      v => !!v || 'メールアドレスを入力してください',
                      v => /.+@.+\..+/.test(v) || '正しいメールアドレスを入力してください',
                    ]"
                    required
                    prepend-inner-icon="mdi-email-outline"
                  />
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="form.category"
                    label="お問い合わせ種別"
                    :items="categories"
                    variant="outlined"
                    rounded="lg"
                    prepend-inner-icon="mdi-tag-outline"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    model-value="iOS"
                    label="ご利用のOS"
                    variant="outlined"
                    rounded="lg"
                    prepend-inner-icon="mdi-apple"
                    readonly
                  />
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.message"
                    label="お問い合わせ内容"
                    variant="outlined"
                    rounded="lg"
                    rows="5"
                    :rules="[v => !!v || 'お問い合わせ内容を入力してください']"
                    required
                    prepend-inner-icon="mdi-message-text-outline"
                    placeholder="アプリのバージョン・端末情報・症状の詳細をご記入いただくとスムーズに対応できます。"
                  />
                </v-col>
              </v-row>

              <v-alert
                v-if="submitted"
                type="success"
                variant="tonal"
                rounded="lg"
                class="mb-4"
                icon="mdi-check-circle-outline"
              >
                お問い合わせを受け付けました。3営業日以内にご返信いたします。
              </v-alert>

              <div class="text-center">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  rounded="pill"
                  class="px-10 font-weight-bold"
                  :loading="loading"
                  :disabled="submitted"
                >
                  <v-icon start icon="mdi-send-outline" />
                  送信する
                </v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref(null)
const loading = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  category: '',
  os: '',
  message: '',
})

const categories = [
  'アプリの不具合・バグ報告',
  '通知が届かない',
  '服薬記録が保存されない',
  'アカウント・データに関する問題',
  '機能の使い方・ご質問',
  'その他',
]

async function submitForm() {
  const { valid } = await formRef.value.validate()
  if (!valid) return
  loading.value = true
  // Simulate form submission
  await new Promise(r => setTimeout(r, 1200))
  loading.value = false
  submitted.value = true
}

const faqs = [
  {
    q: '通知が届かないのですが、どうすればいいですか？',
    a: 'デバイスの設定でクスリノの通知が許可されているかご確認ください。設定 → 通知 → クスリノ から通知をオンにしてください。また「おやすみモード」や「集中モード」がオンになっていないかもご確認ください。',
  },
  {
    q: '薬は何種類まで登録できますか？',
    a: '無料プランでは最大3種類の薬を登録できます。',
  },
  {
    q: 'データのバックアップはできますか？',
    a: '現バージョンではデバイス内にデータが保存されます。機種変更の際はアプリ内のエクスポート機能をご利用ください。',
  },
  {
    q: 'アプリを削除したらデータはどうなりますか？',
    a: 'アプリを削除するとデバイス内のデータはすべて削除されます。削除前にエクスポートしてバックアップすることをおすすめします。',
  },
  {
    q: '家族の薬も一緒に管理できますか？',
    a: '現バージョンでは1アカウントで管理できます。家族の分は別のデバイスにアプリをインストールしてご利用ください。',
  },
  {
    q: 'アプリは無料で使えますか？',
    a: '基本機能は完全無料でお使いいただけます。薬の登録・リマインダー通知・服薬記録・カレンダー表示など主要機能はすべて無料です。',
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #0D47A1, #0277BD, #00838F);
  padding: 100px 0 60px;
}

.faq-q-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #0277BD;
  color: white;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
}

.faq-a-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #2E7D32;
  color: white;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 1px;
}
</style>
