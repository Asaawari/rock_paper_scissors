let playerScore = 0
let computerScore = 0
let winner = ''

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) 
  {
    winner = 'tie'
  }
  if ((playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') || (playerSelection === 'PAPER' && computerSelection === 'ROCK') ) 
  {
    playerScore++
    winner = 'player'
  }
  if ((computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') || (computerSelection === 'PAPER' && playerSelection === 'ROCK')) 
  {
    computerScore++
    winner = 'computer'
  }
  updateScoreMessage(winner, playerSelection, computerSelection)
}

function randomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber == 0){
    return 'ROCK'
  }
  else if (randomNumber == 1){
    return 'PAPER'
  }
  else if (randomNumber == 2){
    return 'SCISSORS'
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection) {
  if (isGameOver()) {
    return
  }

  const computerSelection = randomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    setFinalMessage()
  }
}

function updateChoices(playerSelection, computerSelection) {

  if (playerSelection == 'ROCK')
  {
    playerSign.textContent = '✊'
  }
  else if (playerSelection == 'PAPER')
  {
    playerSign.textContent = '✋'
  }
  else if (playerSelection == 'SCISSORS')
  {
    playerSign.textContent = '✌'
  }

  if (computerSelection == 'ROCK')
  {
    computerSign.textContent = '✊'
  }
  else if (computerSelection == 'PAPER')
  {
    computerSign.textContent = '✋'
  }
  else if (computerSelection == 'SCISSORS')
  {
    computerSign.textContent = '✌'
  }

}

function updateScore() {
  if (winner === 'tie') {
    scoreInfo.textContent = "It's a tie!"
  } 
  else if (winner === 'player') {
    scoreInfo.textContent = 'You won!'
  } 
  else if (winner === 'computer') {
    scoreInfo.textContent = 'You lost!'
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerSelection, computerSelection) {
  if (winner === 'player') {
    scoreMessage.textContent = `${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`
    return
  }
  if (winner === 'computer') {
    scoreMessage.textContent = `${playerSelection.toLowerCase()} is beaten by ${computerSelection.toLowerCase()}`
    return
  }

  scoreMessage.textContent = `${playerSelection.toLowerCase()} ties with ${computerSelection.toLowerCase()}`
}

function setFinalMessage() {
  if (playerScore > computerScore)
  {
    scoreInfo.textContent = 'YOU WIN THE GAME!'
    scoreMessage.textContent = " "
  }
  else
  {
    scoreInfo.textContent = 'YOU LOST THE GAME...'
    scoreMessage.textContent = " "
  }
}