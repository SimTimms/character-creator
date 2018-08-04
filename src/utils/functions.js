import React from 'react';
import RaceSelector from '../components/race-selector';
import ClassSelector from '../components/class-selector';

export function raceFunction(item, names) {
  let raceNames;
  switch (item) {
    case 'elf':
      raceNames = names.elfNames;
      break;

    case 'halfling':
      raceNames = names.halflingNames;
      break;

    case 'dwarf':
      raceNames = names.dwarfNames;
      break;

    default:
      raceNames = names.humanNames;
      break;
  }
  return raceNames;
}

export function classFunction(item, classList) {
  let classNames;
  switch (item) {
    case 'wizard':
      classNames = classList.wizard;
      break;

    case 'barbarian':
      classNames = classList.barbarian;
      break;

    case 'priest':
      classNames = classList.priest;
      break;

    default:
      classNames = classList.rogue;
      break;
  }
  return classNames;
}

export function raceSelectorFunction(
  print,
  src,
  classVar,
  raceClick,
  selectedRace,
  races,
  carouselRace,
) {
  if (print === true) {
    return (
      <img
        src={require(`../images/race/${src}.jpg`)}
        alt={src}
        className={classVar}
      />
    );
  } else {
    return (
      <RaceSelector
        id="race-selector"
        //handleClick={raceClick}
        selectedItem={selectedRace}
        races={races}
        className={carouselRace}
      />
    );
  }
}

export function classSelectorFunction(
  print,
  src,
  classVar,
  selectedClass,
  charclasses,
  carouselClass,
) {
  if (print === true) {
    return (
      <img
        src={require(`../images/class/${src}.jpg`)}
        alt={src}
        className={classVar}
      />
    );
  } else {
    return (
      <ClassSelector
        selectedItem={selectedClass}
        charClasses={charclasses}
        className={carouselClass}
      />
    );
  }
}

export function randomiser(startNbr, endNbr) {
  return Math.floor(Math.random() * (endNbr - startNbr)) + startNbr;
}

export function toUpperWord(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
