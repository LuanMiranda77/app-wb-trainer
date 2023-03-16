export default function useImageFind() {
  function findImageByName(name) {
    switch (name) {
      case 'agachamento_livre':
        return require('../../assets/grupo_muscular/ex-pernas/agachamento_livre.gif');

      case 'peitoral-m':
        return require('../../assets/grupo_muscular/peitoral-m.jpg');
      case 'dorsal-m':
        return require('../../assets/grupo_muscular/dorsal-m.jpg');
      case 'cardio-m':
        return require('../../assets/grupo_muscular/cardio-m.jpg');
      case 'braco-m':
        return require('../../assets/grupo_muscular/braco-m.jpg');
      case 'gluteos-m':
        return require('../../assets/grupo_muscular/gluteos-m.jpg');
      case 'ombros-m':
        return require('../../assets/grupo_muscular/ombros-m.jpg');
      case 'pernas-m':
        return require('../../assets/grupo_muscular/cardio-m.jpg');
      case 'abdomen-m':
        return require('../../assets/grupo_muscular/pernas-m.jpg');

      case 'peitoral-f':
        return require('../../assets/grupo_muscular/peitoral-f.jpg');
      case 'dorsal-f':
        return require('../../assets/grupo_muscular/dorsal-f.jpg');
      case 'braco-f':
        return require('../../assets/grupo_muscular/braco-f.jpg');
      case 'cardio-f':
        return require('../../assets/grupo_muscular/cardio-f.jpg');
      case 'gluteos-f':
        return require('../../assets/grupo_muscular/gluteos-f.jpg');
      case 'ombros-f':
        return require('../../assets/grupo_muscular/ombros-f.jpg');
      case 'pernas-f':
        return require('../../assets/grupo_muscular/pernas-f.jpg');
      case 'abdomen-f':
        return require('../../assets/grupo_muscular/abdomen-f.jpg');
      default:
        return require('../../assets/grupo_muscular/dorsal-m.jpg');
    }
  }
  return {
    findImageByName,
  };
}
