'use strict'

var Skills = {
  extra: {
    action: {
      name: "+1 Action",
      desc: "The Survivor has an extra Action he may use as he pleases.",
      func: function() {
        this.actions += 1
      }
    },
    combat: {
      name: "+1 free Combat Action",
      desc: "The Survivor has one free extra Combat Action. This Action may only be used for Melee or Ranged Combat.",
      func: function() {
        if (!this.hasOwnProperty('free')) {
          this.free = []
        }
        this.free.push('combat')
      }
    },
    move: {
      name: "+1 free Move Action",
      desc: "The Survivor has one free extra Move Action. This Action may only be used as a Move Action.",
      func: function() {
        if (!this.hasOwnProperty('free')) {
          this.free = []
        }
        this.free.push('move')
      }
    },
    search: {
      name: "+1 free Search Action",
      desc: "The Survivor has one free extra Search Action. This Action may only be used to Search and the Survivor can still only Search once per turn.",
      func: function() {
        if (!this.hasOwnProperty('free')) {
          this.free = []
        }
        this.free.push('search')
      }
    },
    damage: {
      melee: {
        name: "+1 Melee Damage",
        desc: "The Survivor gets a +1 Damage bonus with Melee weapons.",
        func: function() {
          if (this.active1.cardType === 'melee') {
            this.active1.damage += 1
          }
        }
      },
      ranged: {
        name: "+1 Ranged Damage",
        desc: "The Survivor gets a +1 Damage bonus with Ranged weapons.",
        func: function() {
          if (this.active1.cardType === 'ranged') {
            this.active1.damage += 1
          }
        }
      }
    },
    diceRoll: {
      combat: {
        name: "+1 to dice roll: Combat",
        desc: "The Survivor adds 1 to the result of each die he rolls on a Combat Action (Melee or Ranged). The maximum result is always 6.",
        func: function() {

        }
      },
      melee: {
        name: "+1 to dice roll: Melee",
        desc: "The Survivor adds 1 to the result of each die he rolls in Melee Combat. The maximum result is always 6.",
        func: function() {

        }
        },
      ranged: {
        name: "+1 to dice roll: Ranged",
        desc: "The Survivor adds 1 to the result of each die he rolls in Ranged Combat. The maximum result is always 6.",
        func: function() {

        }
      }
    },
    die: {
      combat: {
        name: "+1 die: Combat",
        desc: "The Survivor's weapons roll an extra die in Combat (Melee or Ranged). Dual weapons gain a die each, for a total of +2 dice per Dual Combat Action.",
        func: function() {

        }
      },
      melee: {
        name: "+1 die: Melee",
        desc: "The Survivor's Melee weapons rolls an extra die in Combat. Dual melee weapons gain a die each, for a total of +2 dice per Dual Melee Combat Action.",
        func: function() {

        }
      },
      ranged: {
        name: "+1 die: Ranged",
        desc: "The Survivor's Ranged weapons roll an extra die in Combat. Dual ranged weapons gain a die each, for a total of +2 dice per Dual Ranged Combat Action.",
        func: function() {

        }
      }
    },
    range: {
      name: "+1 max Range",
      desc: "The Survivor's Ranged weapons' maximum Range is increased by 1.",
      func: function() {

      }
    },
    zone: {
      name: "+1 Zone per Move",
      desc: "The Survivor can move through one extra Zone each time he performs a Move Action. This Skill stacks with other effects benefitting Move Actions.",
      func: function() {

      }
    }
  },
  re_roll: {
    name: "1 re-roll per turn",
    desc: "Once per turn, you can re-roll all the dice related to the resolution of an Action made by the Survivor. The new result takes the place of the previous one. This Skill stacks with the effects of Equipment that allow re-rolls.",
    func: function() {

    }
  },
  twoCocktailsAreBetterThanOne: {
    name: "2 Cocktails are better than 1",
    desc: "The Survivor gets two Molotov cards instead of one when he creates a Molotov.",
    func: function() {

    }
  },
  ambidextrous: {
    name: "Ambidextrous",
    desc: "The Survivor treats all Melee and Ranged weapons as if they had the Dual symbol.",
    func: function() {
      if (this.active1.cardType === 'melee' || this.active1.cardType === 'ranged') {
        this.active1.isDual = true
      }
      if (this.active2.cardType === 'melee' || this.active1.cardType === 'ranged') {
        this.active2.isDual = true
      }
    }
  },
  bornLeader: {
    name: "Born Leader",
    desc: "During the Survivor's turn, he may give one free Action to another Survivor, to use as he pleases. This Action must be used during the recipient's next turn or it is lost.",
    func: function() {

    }
  },
  destiny: {
    name: "Destiny",
    desc: "The Survivor can use this Skill once per turn when he reveals an Equipment card he drew. Discard that card and draw another Equipment card.",
    func: function() {

    }
  },
  gunslinger: {
    name: "Gunslinger",
    desc: "The Survivor treats all Ranged weapons as if they had the Dual symbol.",
    func: function() {

    }
  },
  hoard: {
    name: "Hoard",
    desc: "The Survivor can carry one extra Equipment card in reserve.",
    func: function() {
      this.inventory.reserve4 = ''
    }
  },
  holdYourNose: {
    name: "Hold your nose",
    desc: "This Skill can be used once per turn. The Survivor gets a free Search Action in the Zone if he has eliminated a Zombie (even outside a building) the very same turn. This Action may only be used to Search and the Survivor can still only Search once per turn.",
    func: function() {

    }
  },
  isThatAllYouveGot: {
    name: "Is that all you've got?",
    desc: "You can use this Skill any time the Survivor is about to get Wounded cards. Discard one Equipment card in your Survivor's inventory for each Wound he's about to receive. Negate a Wounded card per discarded Equipment card.",
    func: function() {

    }
  },
  lockItDown: {
    name: "Lock it down",
    desc: "At the cost of one Action, the Survivor can close an open door. Opening it again later does not trigger a new Zombie Spawn.",
    func: function() {

    }
  },
  loud: {
    name: "Loud",
    desc: "Once per turn, the Survivor can make a huge amount of noise! Until this Survivor's next turn, the Zone he used this Skill in is considered to have the highest number of Noise tokens on the entire map. If different Survivors have this Skill, only the last one who used it applies the effects.",
    func: function() {

    }
  },
  lucky: {
    name: "Lucky",
    desc: "The Survivor can re-roll once all the dice of each Action he takes. The new result takes the place of the previous one. This Skill stacks with the effects of other Skills (“1 re-roll per turn”, for example) and Equipment that allows re-rolls.",
    func: function() {

    }
  },
  matchingSet: {
    name: "Matching set!",
    desc: "When a Survivor performs a Search Action and draws a weapon card with the Dual symbol, he can immediately take a second card of the same type from the Equipment deck. Shuffle the deck afterward.",
    func: function() {

    }
  },
  medic: {
    name: "Medic",
    desc: "Once per turn, the Survivor can freely remove one Wounded card from a Survivor in the same Zone. He may also heal himself.",
    func: function() {

    }
  },
  ninja: {
    name: "Ninja",
    desc: "The Survivor makes no Noise. At all. His miniature does not count as a Noise token, and his use of Equipment or weapons produces no Noise tokens either! The Survivor may choose not to use this Skill at any time, if he wishes to be noisy.",
    func: function() {

    }
  },
  slippery: {
    name: "Slippery",
    desc: "The Survivor does not spend extra Actions when he performs a Move Action through a Zone where there are Zombies.",
    func: function() {

    }
  },
  sniper: {
    name: "Sniper",
    desc: "The Survivor may freely choose the targets of all his Ranged Combat Actions.",
    func: function() {

    }
  },
  startsWithA: {
    name: "Starts with a [Equipment]",
    desc: "The Survivor begins the game with the indicated Equipment its card is automatically assigned to him before the beginning of the game.",
    func: function(card) {
        this.inventory.active1 = card
    }
  },
  swordmaster: {
    name: "Swordmaster",
    desc: "The Survivor treats all Melee weapons as if they had the Dual symbol .",
    func: function() {

    }
  },
  tough: {
    name: "Tough",
    desc: "The Survivor ignores the first Attack he receives from a single Zombie every Zombies' Phase.",
    func: function() {

    }
  },
  trickShot: {
    name: "Trick shot",
    desc: "When the Survivor is equipped with Dual Ranged weapons, he can aim at targets in different zones with each weapon in the same Action",
    func: function() {

    }
  }//,
  // fullList: [
  //   "+1 Action", "+1 Melee Damage", "+1 Ranged Damage", "+1 to dice roll: Combat", "+1 to dice roll: Melee",
  //   "+1 to dice roll: Ranged", "+1 die: Combat", "+1 die: Melee", "+1 die: Ranged", "+1 free Combat Action",
  //   "+1 free Move Action", "+1 free Search Action", "+1 max Range", "+1 Zone per Move", "1 re-roll per turn",
  //   "2 cocktails are better than 1", /* "2 Zones per Move Action", !! DUPLICATE of +1 Zone per Move !! */ "Ambidextrous", "Born leader", "Destiny",
  //   "Gunslinger", "Hoard", "Hold your nose", "Is that all you've got?", "Lock it down", "Loud", "Lucky",
  //   "Matching Set!", "Medic", "Ninja", "Slippery", "Sniper", "Starts with a [Equipment]", "Swordmaster", "Tough", "Trick shot"
  // ]
}
