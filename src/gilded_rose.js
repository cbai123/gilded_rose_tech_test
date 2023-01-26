class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(item => {
      switch (item.name) {
        case 'Aged Brie':
          this.agedBrie(item)
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.backstagePasses(item)
          break
        case 'Sulfuras, Hand of Ragnaros':
          break
        case 'Conjured':
          item.sellIn -= 1
          this.normalItem(item)
          this.normalItem(item)
          break
        default:
          item.sellIn -= 1
          this.normalItem(item)
      }

      if (item.quality < 0) {
        item.quality = 0
      } else if (item.quality > 50) {
        item.quality = 50
      }
    })

    return this.items;
  }

  agedBrie(item) {
    item.sellIn -= 1
    if (item.quality < 50) {
      item.sellIn < 0 ? item.quality += 2 : item.quality += 1
    }
  }
  
  backstagePasses(item) {
    item.sellIn -= 1
    if (item.quality < 50 && item.sellIn >= 0) {
      item.quality += this.calculateBackstage(item.sellIn)
    } else if (item.sellIn < 0) {
      item.quality = 0
    }
  }

  calculateBackstage(sellIn) {
    if (sellIn > 10) {
      return 1
    } else if (sellIn > 5) {
      return 2
    } else {
      return 3
    }
  }

  normalItem(item) {
    if (item.quality > 0 ) {
      item.sellIn >=0 ? item.quality -= 1 : item.quality -= 2
    }
  }
}

module.exports = {
  Item,
  Shop
}
