<template>
  <v-container fluid fill-height>
    <v-layout justify-center align-center>
      <v-flex text-xs-left style="margin-top: 60px; margin-bottom: 100px;">
        <h1>Quem somos</h1>
        <p>A Oito nasceu do desejo de conectar pessoas e oportunidades. Profissionais autônomos divulgam seus serviços e se conectam com clientes que procuram soluções. Tudo de forma clara, rápida, justa e proveitosas para os dois lados.</p>
        <p>Enxergamos a necessidade de milhões de brasileiros de encontrar oportunidades no mercado de trabalho, por isso criamos uma tecnologia que ranqueia e qualifica profissionais e oportunidades, agilizando e certificando o processo de contratação e divulgação.</p>
        <h1>Missão</h1>
        <p>Queremos catalisar o processo de contratação baseado em ranqueamento para pessoas, gerando conexões que sejam mutuamente proveitosas.</p>
        <h1>Visão</h1>
        <p>Ser protagonista no processo de inclusão social, por meio de conexões que sejam mutuamente proveitosas, transparentes e justas.</p>
        <h1>Valores</h1>
        <p>Transparência: baseado no ranqueamento, todas as relações geradas por meio da OiTO possuem um índice de qualidade livre para ser alterado mediante feedback.</p>
        <p>Agilidade: gerar oportunidades de forma rápida, prática e objetiva tanto para quem oferece quanto para quem procura, minimizando dificuldades e maximizando soluções.</p>
        <p>Responsabilidade social: contribuir para que o autônomo alcance liberdade e estabilidade financeira, por meio de divulgação de seus serviços.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
h1 {
  text-transform: uppercase;
  font-size: 42px;
  line-height: 46px;
  font-weight: 300;
  color: #FF974F;
  margin-bottom: 20px;
}
p {
  padding-left: 20px;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
  color: #303030;
}
</style>
