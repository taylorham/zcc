'use strict'

function character(charName, skillArray, invArray) {
  this.charName = charName;
  this.skills = {
    skill1: skillArray[0],
    skill2: {
      option1: skillArray[1][0],
      option2: skillArray[1][1]
    },
    skill3: {
      option1: skillArray[2][0],
      option2: skillArray[2][1],
      option3: skillArray[2][2]
    }
  };
  this.inventory = {
    active1: invArray[0],
    active2: invArray[1] ? invArray[1] : '',
    reserve1: invArray[2] ? invArray[2] : '',
    reserve2: '',
    reserve3: ''
  };
  this.actions = 3;
  this.experience = 0;
  this.wounds = 0;
}

function inventoryList(character) {
  let inventory = character.inventory;
  let inventoryActive = [];
  let inventoryReserve = [];
  for (var key in inventory) {
    if (key.startsWith('active')) {
      if (inventory[key] !== '') {
        inventoryActive.push(inventory[key]);
      }
    } else {
      if (inventory[key] !== '') {
        inventoryReserve.push(inventory[key]);
      }
    }
  }
  let activeItems = '';
  let reserveItems = '';
  if (inventoryActive.length !== 0) {;
    activeItems = inventoryActive.join(', ');
  } else {
    activeItems = 'Empty';
  }
  if (inventoryReserve.length !== 0) {;
    reserveItems = inventoryReserve.join(', ');
  } else {
    reserveItems = 'Empty';
  }
  return 'Active: ' + activeItems + ', Reserve: ' + reserveItems
};

function skillList(character) {
  let skills = character.skills
  let skillItems = [];
  let skill2Array = [];
  let skill3Array = [];
  for (var key in skills) {
    if (key === 'skill2') {
      for (var key in skills.skill2) {
        skill2Array.push('"' + skills.skill2[key].name + '"');
      }
    }
    if (key === 'skill3') {
      for (var key in skills.skill3) {
        skill3Array.push('"' + skills.skill3[key].name + '"');
      }
    }
  }
  let skill2Items = skill2Array.join(' -or- ');
  let skill3Items = skill3Array.join(' -or- ');
  skillItems.push('Skill 1: "' + skills.skill1.name + '"', 'Skill 2: ' + skill2Items, 'Skill 3: ' + skill3Items);

  return skillItems.join('\n')
};
