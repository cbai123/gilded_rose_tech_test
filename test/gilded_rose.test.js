const {Shop, Item} = require('../src/gilded_rose');

describe('Gilded Rose', function() {
  describe('a normal item', () => {
    it('should foo', function() {
      const gildedRose = new Shop([new Item('foo', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('foo');
    });

    it('should update the sell in', () => {
      const gildedRose = new Shop([new Item('foo', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9)
    })

    it('should update the quality', () => {
      const gildedRose = new Shop([new Item('foo', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(9)
    })

    it('quality should decrease by 2 after sell in < 0', () => {
      const gildedRose = new Shop([new Item('foo', 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(8)
    })

    it('quality should not decrease past 0', () => {
      const gildedRose = new Shop([new Item('foo', 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0)
    })
  })

  describe('Aged Brie', () => {
    it('should return Brie', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Aged Brie');
    })

    it('should decrease sellIn', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9)
    })

    it('should increase quality', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11)
    })

    it('should increase quality by 2 if sellIn is < 0', () => {
      const gildedRose = new Shop([new Item('Aged Brie', -1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12)
    })

    it('should not increase quality past 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50)
    })

    it('should not increase quality past 50 if starts at 49 and sellIn < 0', () => {
      const gildedRose = new Shop([new Item('Aged Brie', -3, 49)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(50)
    })
  })

  describe('Sulfuras, Hand of Ragnaros', () => {
    it('should return Sulfuras, Hand of Ragnaros', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros')
    })

    it('should not decrease sellIn', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10)
    })

    it('should not decrease quality', () => {
      const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(10)
    })
  })

  describe('Backstage passes to a TAFKAL80ETC concert', () => {
    it('should return Backstage passes to a TAFKAL80ETC concert', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert')
    })

    it('should decrease sellIn', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10)
    })

    it('should increase quality by 1 when sellIn > 10', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(11)
    })

    it('should increase quality by 2 when sellIn = 10', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12)
    })

    it('should increase quality by 2 when 5 < sellIn < 10', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 9, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(12)
    })

    it('should increase quality by 3 when sellIn = 5', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(13)
    })

    it('should increase quality by 3 when 0 < sellIn < 5', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(13)
    })

    it('should decrease quality to 0 when sellIn < 0', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0)
    })

    it('should not increase quality when 50', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50)
    })

    it('should not increase quality past 50 when starting near 50', () => {
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 49)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(50)
    })
  })

  describe('Conjured', () => {
    it('should retrieve the right name', () => {
      const gildedRose = new Shop([new Item('Conjured', 10, 10)])
      const items = gildedRose.updateQuality()
      expect(items[0].name).toBe('Conjured')
    })

    it('should decrease the sellIn by 1', () => {
      const gildedRose = new Shop([new Item('Conjured', 10, 10)])
      const items = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(9)
    })

    it('should decrease the quality by 2 when sellIn >= 0', () => {
      const gildedRose = new Shop([new Item('Conjured', 10, 10)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(8)
    })

    it('should decrease the quality by 4 when sellIn < 0', () => {
      const gildedRose = new Shop([new Item('Conjured', -1, 10)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(6)
    })

    it('should not decrease the quality below 0 when starting near 0', () => {
      const gildedRose = new Shop([new Item('Conjured', -1, 1)])
      const items = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
    })
  })

  describe('multiple Items added into Shop', () => {
    it('should retrieve the right names', () => {
      const array = [
        new Item('Aged Brie', 10, 10), 
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
        new Item('Sulfuras, Hand of Ragnaros', 10, 10),
        new Item('foo', 10, 10)
      ]
      const gildedRose = new Shop(array)
      const items = gildedRose.updateQuality()
      expect(items[0].name).toBe('Aged Brie')
      expect(items[1].name).toBe('Backstage passes to a TAFKAL80ETC concert')
      expect(items[2].name).toBe('Sulfuras, Hand of Ragnaros')
      expect(items[3].name).toBe('foo')
    })

    it('should update the sellIn unless Sulfuras', () => {
      const array = [
        new Item('Aged Brie', 10, 10), 
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 10),
        new Item('Sulfuras, Hand of Ragnaros', 10, 10),
        new Item('foo', 10, 10)
      ]
      const gildedRose = new Shop(array)
      const items = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(9)
      expect(items[1].sellIn).toBe(9)
      expect(items[2].sellIn).toBe(10)
      expect(items[3].sellIn).toBe(9)
    })

    it('should update the quality accordingly', () => {
        const array = [
          new Item('Aged Brie', 10, 10), 
          new Item('Backstage passes to a TAFKAL80ETC concert', 3, 10),
          new Item('Sulfuras, Hand of Ragnaros', 10, 10),
          new Item('foo', 10, 0)
        ]
        const gildedRose = new Shop(array)
        const items = gildedRose.updateQuality()
        expect(items[0].quality).toBe(11)
        expect(items[1].quality).toBe(13)
        expect(items[2].quality).toBe(10)
        expect(items[3].quality).toBe(0)
    })
  })
});
