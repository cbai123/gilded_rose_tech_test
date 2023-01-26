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

    it('should not increase quality past 50', () => {
      const gildedRose = new Shop([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
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
});
