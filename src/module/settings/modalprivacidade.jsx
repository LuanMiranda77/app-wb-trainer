import { Divider, ScrollView, Text, View } from 'native-base';
import React from 'react';
import ModalSimple from '../../components/modal/modalSimple';

// import { Container } from './styles';

function ModalPrivacidade({ showModal, onCloseModal }) {
  return (
    <ModalSimple title="Termo e privacidade" showModal={showModal} onCloseModal={onCloseModal}>
      {/* <Text ml="4" fontSize="2xl">
        Termo e privacidade
      </Text> */}
      <View p="4">
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ marginBottom: "30%" }}>
          <Text mb="5">
            {' '}
            1-Coleta de informações pessoais: Ao usar nosso aplicativo de treino, podemos coletar
            informações pessoais, como nome, endereço de e-mail, idade, sexo e outras informações
            relevantes para o treino. Essas informações serão coletadas com seu consentimento e
            serão usadas apenas para fins relacionados ao treino.
          </Text>
          <Text mb="5">
            2-Uso de informações: As informações coletadas serão usadas para melhorar nosso
            aplicativo de treino e personalizar a experiência do usuário. Além disso, podemos usar
            essas informações para enviar comunicações relacionadas ao treino, como notificações de
            treino ou atualizações de recursos.
          </Text>
          <Text mb="5">
            {' '}
            3-Compartilhamento de informações: Não compartilharemos suas informações pessoais com
            terceiros sem seu consentimento expresso, exceto conforme exigido por lei.
          </Text>
          <Text mb="5">
            4-Segurança de informações: Tomaremos medidas razoáveis para garantir que suas
            informações pessoais sejam armazenadas e protegidas com segurança. No entanto, não
            podemos garantir a segurança absoluta das informações transmitidas pela Internet ou
            armazenadas em nossos servidores.
          </Text>
          <Text mb="5">
            {' '}
            5-Cookies e outras tecnologias: Podemos usar cookies e outras tecnologias de
            rastreamento para melhorar a funcionalidade do aplicativo e personalizar a experiência
            do usuário. Essas tecnologias não coletam informações pessoais identificáveis.
          </Text>
          <Text mb="5">
            6-Cancelamento de registro: Você pode cancelar seu registro no nosso aplicativo de
            treino a qualquer momento, excluindo sua conta ou entrando em contato conosco
            diretamente. Alterações nos termos de privacidade: Podemos atualizar os termos de
            privacidade do nosso aplicativo de tempos em tempos.
          </Text>
          <Text mb="5">
            7-Quando isso acontecer, notificaremos você sobre as mudanças e pediremos que você
            concorde com os novos termos antes de continuar usando o aplicativo.
          </Text>
        </ScrollView>
      </View>
    </ModalSimple>
  );
}

export default ModalPrivacidade;
