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
    this.ruleset = {
      'Aged': new AgedBrie(),
      'Backstage': new BackstagePass(),
      'Conjured': new Conjured(),
      'default': new NormalItem()
    }
  }
  
  updateQuality() {
    this.items.forEach(item => {
      const itemTag = item.name.split(' ')[0]
      if (itemTag !== 'Sulfuras,') {
        (this.ruleset[itemTag] || this.ruleset['default']).update(item)
      }
      
      item.quality < 0 ? item.quality = 0 :
      item.quality > 50 ? item.quality = 50 : item.quality
    })

    return this.items;
  }
}

class AgedBrie {
  update(item) {
    item.sellIn -= 1
    if (item.quality < 50) {
      item.sellIn < 0 ? item.quality += 2 : item.quality += 1
    }
  }
}

class BackstagePass {
  update(item) {
    item.sellIn -= 1
    if (item.quality < 50 && item.sellIn >= 0) {
      item.quality += this.calculateQuality(item.sellIn)
    } else if (item.sellIn < 0) {
      item.quality = 0
    }
  }

  calculateQuality(sellIn) {
    if (sellIn > 10) {
      return 1
    } else if (sellIn > 5) {
      return 2
    } else {
      return 3
    }
  }
}

class NormalItem {
  update(item) {
    item.sellIn -=1
    if (item.quality > 0 ) {
      item.sellIn >=0 ? item.quality -= 1 : item.quality -= 2
    }
  }
}

class Conjured {
  update(item) {
    for( let i = 0 ; i < 2 ; i ++ ) {
      new NormalItem().update(item)
    }
    item.sellIn += 1
  }
}

module.exports = {
  Item,
  Shop
}
