/**
 * @file 数据对象关系映射
 */

import validation from '@~lisfan/validation'

// 私有方法
const _actions = {}

/**
 * @classdesc 数据对象关系映射类
 *
 * @class
 */
class ORM {
  /**
   * 数据字段名称的映射对应关系
   *
   * @since 1.0.0
   *
   * @static
   * @readonly
   * @memberOf ORM
   *
   * @type {object}
   * @property {string} name='orm' - 日志器命名空间，默认为'orm'
   * @property {boolean} debug=true - 调试模式是否开启，默认开启
   */
  static options = {
    xxx: 'adfsdfdsf',
    'xxxx.adfsafd.qerwer': 'adfsdf'
  }

  /**
   * 默认配置选项
   *
   * @since 1.0.0
   *
   * @static
   * @readonly
   * @memberOf ORM
   *
   * @type {object}
   * @property {string} name='orm' - 日志器命名空间，默认为'orm'
   * @property {boolean} debug=true - 调试模式是否开启，默认开启
   */
  static options = {
    name: 'orm',
    debug: true,
  }

  /**
   * 更新默认配置选项
   *
   * @since 1.0.0
   *
   * @see ORM.options
   *
   * @param {object} options - 配置选项见{@link ORM.options}
   *
   * @returns {ORM}
   */
  static config(options) {
    const ctr = self
    // 以内置配置为优先
    ctr.options = {
      ...ctr.options,
      ...options
    }

    return this
  }

  /**
   * 构造函数
   *
   * @see ORM.options
   *
   * @param {object} options - 配置选项见{@link ORM.options}，若参数为`string`类型，则表示设定为`options.name`的值
   */
  constructor(data) {
    const ctr = this.constructor
    this.transform(data)
    // this.$options = validation.isString(options)
    //   ? {
    //     ...ctr.options,
    //     name: options
    //   }
    //   : {
    //     ...ctr.options,
    //     ...options
    //   }
  }

  /**
   * 实例初始配置项
   *
   * @since 1.0.0
   *
   * @readonly
   *
   * @type {object}
   */
  $options = undefined

  transform(data) {
    // 转换思路
    // 1. 转换为字符串
    const stringify = JSON.stringify(data)
    const ctr = this.constructor
    Object.entries(ctr.options).forEach(([oriKey, mapKey]) => {

    })
  }
}

export default ORM

const ddd = {
  id: 10,
  name: 'msl',
  other: {
    hegiht: 170,
    weight: 77,
    other: {
      age: 30,
      job: 'it'
    }
  }
}

console.log(JSON.stringify(ddd))