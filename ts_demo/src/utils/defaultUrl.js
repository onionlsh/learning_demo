/**
 * 其他系统的默认地址
 */

const isProd = process.env.NODE_ENV === 'production';

const DEFAULT_URL = {
  NET: {
    url: isProd ? '' :'http://test.net.heygears.com:23456',
    icon: require('@/assets/menu/net.png'),
    name: 'UTLAR_NET',
  },
  HUB: {
    url: isProd ? 'https://hub.heygears.com:12306' :'http://test.hub.heygears.com:23456',
    icon: require('@/assets/menu/hub.png'),
    name: 'UTLAR-HUB'
  },
  DESIGN: {
    url: isProd ? '' :'',
    icon: require('@/assets/menu/design.png'),
    name: 'UTLAR-DESIGN'
  },
  PRE_HANDLE: {
    url: isProd ? '' :'',
    icon: require('@/assets/menu/3d_deal.png'),
    name: '前处理'
  },
}


export default {
  DEFAULT_URL
}