var myGame = new WizardOrpheus('', `
You are stranded on 4546b. Survive and escape the planet. Hardcore mode, NO REVIVES
`)

myGame.variable('Risk_Lvl', 'Current score. Changes (positive and negatively) as the user does things. From 0 (No Risk) to 100 (Imminent Danger)', 0)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
  if (e.code == 'Enter') {
    let userInput = document.getElementById('input').value
    myGame.message(userInput)
    document.getElementById('conversation').innerHTML
      += '<p>' + userInput + '</p>'
    document.getElementById('input').value = ''
  }
})

myGame.variable('danger_Lvl', 'How dangerous the situation the user is, Variable changes quickly. From 0 (No Danger) to 100 (No Survival).', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {

document.body.style.backgroundColor = `rgba(255,0,0, ${data.currentVariables.danger_Lvl.value/150})`

  
  document.getElementById('conversation').innerHTML += '<p>' +     data.message + '</p>'
  
document.getElementById('Risk_Lvl').innerHTML = data.currentVariables.Risk_Lvl.value

})
