const base = require('./base');
const { EP, CO } = require('./util/cubePositions');
const { shift } = require('./util/helpers');

const lccp = function (register) {
  const scrambler = (function (scrambler) {
    const getLCCPScramble = function () {
      const cp = shift([4, 6, 5], 1);
      const cpa = [0, 1, 2, cp[0], cp[1], cp[2], 7, 3];

      return scrambler.getCustomScramble({
        ep: [EP.UF, EP.UB],
        cpa: cpa,
        co: [CO.FRU, CO.FRD]
      });
    }

    return {
      initialize: scrambler.initialize,
      setRandomSrc: scrambler.setRandomSrc,
      getRandomScramble: function () {
        return {
          scramble_string: getLCCPScramble()
        }
      },
      setScrambleLength: scrambler.setScrambleLength
    }
  })(base);

  register('lccp', scrambler);
}

module.exports = lccp;
