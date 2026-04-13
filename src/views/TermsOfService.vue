<template>
  <div>
    <div class="page-hero">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <v-icon icon="mdi-file-document-outline" size="48" color="white" class="mb-4" style="opacity:0.9;" />
            <h1 class="text-h4 text-md-h3 font-weight-black text-white mb-3" style="letter-spacing:-0.02em;">
              利用規約
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
              この利用規約（以下「本規約」）は、MLLB（以下「当社」）が提供するクスリノ（以下「本アプリ」）の利用条件を定めるものです。本アプリをご利用いただく前に、本規約をよくお読みください。本アプリのご利用をもって、本規約に同意したものとみなします。
            </p>

            <section v-for="section in sections" :key="section.title" class="mb-10">
              <h2 class="text-h6 font-weight-bold mb-4 pb-2" style="border-bottom: 2px solid #E3F2FD; color:#0277BD;">
                {{ section.title }}
              </h2>
              <div v-html="section.content" class="terms-content" />
            </section>

            <v-divider class="my-8" />
            <div class="text-center">
              <p class="text-body-2 mb-4" style="color:#546E7A;">
                利用規約に関するお問い合わせは下記よりご連絡ください。
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
    title: '第1条（サービスの内容）',
    content: `
      <p>本アプリは、ユーザーが薬の服薬スケジュールを管理・記録し、リマインダー通知を受け取るための個人用ツールです。本アプリは医療行為・医療アドバイスを提供するものではありません。薬の用量・用法については、必ず医師・薬剤師の指示に従ってください。</p>
    `,
  },
  {
    title: '第2条（利用資格）',
    content: `
      <p>本アプリはiOS端末でご利用いただけます。16歳未満の方が利用する場合は、保護者の同意が必要です。本アプリの利用には、対応デバイスおよびインターネット接続が必要な場合があります。</p>
    `,
  },
  {
    title: '第3条（アカウント）',
    content: `
      <p>本アプリはアカウント登録なしでもご利用いただける機能を提供しています。アカウント登録を行う場合、ユーザーは正確な情報を提供し、アカウントの安全管理（パスワード管理等）に責任を持つものとします。</p>
    `,
  },
  {
    title: '第4条（禁止事項）',
    content: `
      <p>ユーザーは以下の行為を行ってはなりません。</p>
      <ul>
        <li>本アプリの逆アセンブル・リバースエンジニアリング・改ざん</li>
        <li>本アプリを商業目的で無断転用・再配布すること</li>
        <li>虚偽の情報を登録すること</li>
        <li>本アプリのサーバーやネットワークに過度な負荷をかける行為</li>
        <li>他のユーザーや第三者の権利を侵害する行為</li>
        <li>法令・公序良俗に反する行為</li>
      </ul>
    `,
  },
  {
    title: '第5条（知的財産権）',
    content: `
      <p>本アプリに含まれるすべてのコンテンツ（テキスト・デザイン・ロゴ等）の著作権・知的財産権は当社または正当な権利者に帰属します。ユーザーは、個人的・非商業的目的での使用に限りこれを利用できます。</p>
    `,
  },
  {
    title: '第6条（免責事項）',
    content: `
      <p>当社は以下の事項について責任を負いません。</p>
      <ul>
        <li>本アプリの利用または利用不能から生じた損害</li>
        <li>通知の遅延・未達による服薬忘れ</li>
        <li>ユーザーが入力した薬剤情報の正確性</li>
        <li>本アプリに起因する医療上の判断・結果</li>
        <li>第三者サービス（OSプラットフォーム等）の障害による影響</li>
      </ul>
      <p>本アプリはユーザーの服薬管理を補助するツールであり、医療専門家の指示に代わるものではありません。</p>
    `,
  },
  {
    title: '第7条（サービスの変更・停止）',
    content: `
      <p>当社は、以下の場合に予告なく本サービスを変更・停止することがあります。</p>
      <ul>
        <li>システムのメンテナンスが必要な場合</li>
        <li>天災・停電・その他不可抗力による場合</li>
        <li>事業上の理由による場合</li>
      </ul>
    `,
  },
  {
    title: '第8条（規約の変更）',
    content: `
      <p>当社は必要に応じて本規約を変更します。重要な変更はアプリ内または本サイトにてお知らせします。変更後も本アプリを継続利用した場合、変更後の規約に同意したものとみなします。</p>
    `,
  },
  {
    title: '第9条（準拠法・管轄）',
    content: `
      <p>本規約は日本法に準拠します。本サービスに関して紛争が生じた場合は、当社所在地を管轄する裁判所を第一審の合意管轄裁判所とします。</p>
    `,
  },
  {
    title: '第10条（お問い合わせ）',
    content: `
      <p>本規約に関するお問い合わせは、サポートページよりご連絡ください。</p>
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

.terms-content {
  color: #37474F;
  line-height: 1.9;
  font-size: 0.95rem;
}
.terms-content ul {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}
.terms-content li {
  margin-bottom: 0.4rem;
}
.terms-content p {
  margin-bottom: 0.75rem;
}
</style>
