import { getStore, setStore } from '../../utils/storage.js'
import EN from '../../utils/lang/en.js'
import CN from '../../utils/lang/cn.js'

const currentLang = getStore('lang') || 'cn'; //默认为中文

currentLang == 'cn' ? 
  document.getElementsByTagName("title")[0].innerText = '用户中心-CAS' :
  document.getElementsByTagName("title")[0].innerText = 'Center-CAS';

const app = {
  state: {
    sidebar: {
      opened: true,
    },
    language: currentLang,  //语言类型
    lang: currentLang === 'cn' ? CN : EN  //对应object对象
  },

  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened;
    },
    CHANGE_LANGUAGE: (state, language) => {
      if(language === 'cn'){
        state.lang = CN;
      }else{
        state.lang = EN;
      }
      state.language = language;
      setStore('lang',language);
    }
  },

  actions: {
    toggleSidebar: ({commit}) => {
      commit('TOGGLE_SIDEBAR');
    },
    changeLanguage: ({commit}, language) => {
      commit('CHANGE_LANGUAGE', language)
    }
  }
}

export default app;