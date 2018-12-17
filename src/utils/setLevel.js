import {
  dropRight,
  shuffle
} from 'lodash'

import cards from '../config/cards.js'
import { saveSettings } from '../utils/gameState.js'

const getBoardSize = (level) => {
  switch (level) {
    case 'ease':
      return 5
    case 'medium':
      return 10
    case 'hard':
      return 15
    case 'very-hard':
      return 20

    default:
      return 5
  }
}

const getLevelCards = (level) => {
  const shuffledCards = shuffle(cards)
  const boardSize = getBoardSize(level)

  const elementsToDropAmount = shuffledCards.length - boardSize

  return dropRight(shuffledCards, elementsToDropAmount)
}

const setLevel = (level) => {
  saveSettings({
    level
  })
}

export {
  getLevelCards
}

export default setLevel
