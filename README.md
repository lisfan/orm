# ORM

## API接口字段映射

[API documentation](https://lisfan.github.io/orm/)

## Feature 特性

- 前后端分离开发时，不再依赖后端接口定义的数据结构，只需要建立对象关系映射"

## Detail 详情

- [注] 内部逻辑处理时映射是实时进行的，如果前一个映射后的新字段，是下一个需要映射的老字段，则会继续被映射为一个更新的字段，所以请注意合理安排顺序。如`{id:'UID','UID':'NID'}`
- 支持任意级别的映射关系，不需要老字段和新字段的长度保持一致，即支持 `{'path':'path.to.new'}`

## Install 安装

```bash
npm install -S @~lisfan/orm
```

## Usage 起步

```js
import ORM from '@~lisfan/orm'

      const orm = new ORM({
        'id': 'uid',
        'name': 'othername',
        'othername': 'diffname',
        'book': 'fav.book',
        'sport': 'fav.sport',
        'fav.moive': 'fav.movie',
      })

      const data = {
        id: 10,
        name: 'msl',
        book: {
          love: 'love',
          lucky: 'lucky'
        },
        sport: {
          love: 'love',
          lucky: 'lucky'
        },
        fav: {
          moive: {
            love: 'love',
            lucky: 'lucky'
          }
        },
        other: {
          hegiht: 180,
          weight: 99,
          other: {
            id: 30
          }
        }
      }

      // mapped data
      // 
      //  {
      //    uid: 10,
      //    diffname: 'msl',
      //    fav: {
      //      book: {
      //        love: 'love',
      //        lucky: 'lucky'
      //      },
      //      movie: {
      //        love: 'love',
      //        lucky: 'lucky'
      //      },
      //      sport: {
      //        love: 'love',
      //        lucky: 'lucky'
      //      },
      //    },
      //    other: {
      //      hegiht: 180,
      //      weight: 99,
      //      other: {
      //        id: 30
      //      }
      //    }
      //  }
