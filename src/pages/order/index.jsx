import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class Order extends Component {
  config = {
    navigationBarTitleText: 'Order'
  }

  back() {
    Taro.switchTab({ url: '/pages/user/index' })
  }

  render () {
    return (
      <View className='order'>
        <View onClick={this.back}>点我返回个人中心</View>
      </View>
    )
  }
}
