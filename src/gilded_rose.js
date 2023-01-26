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
          item.sellIn -= 1
          if (item.quality < 50) {
            item.sellIn < 0 ? item.quality += 2 : item.quality += 1
          }
          break
        case 'Backstage passes to a TAFKAL80ETC concert':
          item.sellIn -= 1
          if (item.quality < 50 && item.sellIn >= 0) {
            item.quality += this.calculateBackstage(item.sellIn)
          } else if (item.sellIn < 0) {
            item.quality = 0
          }
          break
        case 'Sulfuras, Hand of Ragnaros':
          break
        default:
          item.sellIn -= 1
          if (item.quality > 0 ) {
            item.sellIn >=0 ? item.quality -= 1 : item.quality -= 2
          }
      }
    })

    return this.items;
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
}

module.exports = {
  Item,
  Shop
}
