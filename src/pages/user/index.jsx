import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default class User extends Component {
  config = {
    navigationBarTitleText: 'User'
  }

  toOrder() {
    Taro.navigateTo({ url: '/order' })
  }

  render () {
    return (
      <View onClick={this.toOrder}>点我前往订单页</View>
    )
  }
}
