<template>
  <div>
    <div class="page-hero">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon icon="mdi-shield-lock-outline" size="48" color="white" class="mb-4" style="opacity:0.9;" />
            <h1 class="text-h4 text-md-h3 font-weight-black text-white mb-3" style="letter-spacing:-0.02em;">
              プライバシーポリシー
            </h1>
            <p style="color:rgba(255,255,255,0.8);">最終更新日：2025年4月1日</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card rounded="xl" elevation="0" border class="pa-8 pa-md-12">

            <p class="text-body-1 mb-8" style="line-height:1.9; color:#37474F;">
              MLLB（以下「当社」）は、クスリノ（以下「本アプリ」）において、ユーザーの皆様から取得した個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section v-for="section in sections" :key="section.title" class="mb-10">
              <h2 class="text-h6 font-weight-bold mb-4 pb-2" style="border-bottom: 2px solid #E3F2FD; color:#0277BD;">
                {{ section.title }}
              </h2>
              <div v-html="section.content" class="policy-content" />
            </section>

            <v-divider class="my-8" />
            <div class="text-center">
              <p class="text-body-2 mb-4" style="color:#546E7A;">
                プライバシーポリシーに関するお問い合わせは下記よりご連絡ください。
              </p>
              <v-btn
                color="primary"
                variant="tonal"
                rounded="pill"
                to="/support"
              >
                <v-icon start icon="mdi-email-outline" />
                お問い合わせ
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
const sections = [
  {
    title: '第1条（収集する情報）',
    content: `
      <p>本アプリは、以下の情報を収集することがあります。</p>
      <ul>
        <li>氏名・メールアドレス等のアカウント情報（任意登録の場合）</li>
        <li>服薬記録・薬剤情報（ユーザーが入力した情報）</li>
        <li>デバイス情報（OS種別、デバイスID、アプリバージョン）</li>
        <li>利用状況に関する統計情報（クラッシュレポート、操作ログ等）</li>
        <li>プッシュ通知トークン</li>
      </ul>
    `,
  },
  {
    title: '第2条（情報の利用目的）',
    content: `
      <p>収集した情報は、以下の目的で利用します。</p>
      <ul>
        <li>本アプリの機能提供・サービスの改善</li>
        <li>プッシュ通知リマインダーの送信</li>
        <li>ユーザーサポートへの対応</li>
        <li>不正利用・セキュリティインシデントの検知・防止</li>
        <li>統計情報の作成（個人を特定しない形式）</li>
      </ul>
    `,
  },
  {
    title: '第3条（第三者への提供）',
    content: `
      <p>当社は、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。</p>
      <ul>
        <li>ユーザーの同意がある場合</li>
        <li>法令に基づく場合</li>
        <li>人の生命・身体・財産の保護のために必要な場合</li>
        <li>本アプリの運営に必要な業務委託先（守秘義務契約締結済み）</li>
      </ul>
      <p>本アプリでは、アプリの改善・分析のためにFirebase（Google LLC）等のサードパーティサービスを利用することがあります。各サービスのプライバシーポリシーをご確認ください。</p>
    `,
  },
  {
    title: '第4条（データの保存と保護）',
    content: `
      <p>ユーザーが入力した服薬データは、原則としてデバイス内にローカル保存されます。クラウド同期機能を利用する場合は、適切な暗号化（通信はTLS、保存データは適切なアクセス制御）を施した上で保存します。</p>
      <p>当社は、不正アクセス・漏洩・改ざん等を防ぐための合理的なセキュリティ対策を講じます。</p>
    `,
  },
  {
    title: '第5条（健康情報の取り扱い）',
    content: `
      <p>服薬情報・薬剤情報は健康に関するセンシティブな情報です。当社はこれらの情報を医療目的以外に利用せず、ユーザーの同意なく第三者に開示しません。本アプリは医療行為を提供するものではなく、薬の服用に関する最終的な判断はユーザー自身または医療従事者が行うものとします。</p>
    `,
  },
  {
    title: '第6条（ユーザーの権利）',
    content: `
      <p>ユーザーは以下の権利を有します。</p>
      <ul>
        <li>自身の個人情報の開示・訂正・削除の請求</li>
        <li>個人情報の利用停止の請求</li>
        <li>アカウント削除（デバイス内データの消去）</li>
      </ul>
      <p>請求はサポートページよりお問い合わせください。</p>
    `,
  },
  {
    title: '第7条（未成年者の利用）',
    content: `
      <p>16歳未満の方が本アプリを利用する場合は、保護者の同意のもとでご利用ください。</p>
    `,
  },
  {
    title: '第8条（ポリシーの変更）',
    content: `
      <p>当社は、必要に応じて本プライバシーポリシーを変更することがあります。重要な変更がある場合は、アプリ内またはウェブサイトにて通知します。変更後も本アプリを継続して利用した場合、変更後のポリシーに同意したものとみなします。</p>
    `,
  },
  {
    title: '第9条（お問い合わせ）',
    content: `
      <p>本プライバシーポリシーに関するお問い合わせは、サポートページよりご連絡ください。</p>
      <p><strong>事業者名：</strong> MLLB<br />
      <strong>バンドルID：</strong> com.mllb.mediguard</p>
    `,
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #0D47A1, #0277BD, #00838F);
  padding: 100px 0 60px;
}

.policy-content {
  color: #37474F;
  line-height: 1.9;
  font-size: 0.95rem;
}

.policy-content ul {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}
.policy-content li {
  margin-bottom: 0.4rem;
}
.policy-content p {
  margin-bottom: 0.75rem;
}
</style>
