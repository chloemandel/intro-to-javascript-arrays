describe('arrays', () => {

  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter `array`', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an `element` to the beginning of an `array`', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters `array`', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter `array`', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an `element` to the end of an `array`', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters `array`', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in `array` at the given `index`', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the `array`', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
  })

  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the `array`', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
  })
})