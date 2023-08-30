const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (nameAnswer) => {
  console.log(`Hello, ${nameAnswer}!`);
  
  rl.question(`What's an activity you like doing? `, (activityAnswer) => {
    console.log(`Wow! We love ${activityAnswer} too :)`);

    rl.question(`What do you listen to while doing that? `, (musicAnswer) => {
      console.log(`Good choice 🎵 ${musicAnswer} is awesome!`);

      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (mealAnswer) => {
        console.log(`No way! Our favourite meal is ${mealAnswer} too!`);

        rl.question(`What's your favourite thing to eat for that meal? `, (foodAnswer) => {
          console.log(`Delicious! Thinking of ${foodAnswer} is making me salivate right now ;)`);
          
          rl.question(`Which sport is your absolute favourite?
           `, (sportAnswer) => {
            console.log(`Nice 😎 ${sportAnswer} is so exciting to watch!`);
            
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpowerAnswer) => {
              console.log(`Terrific choice!`);

              console.log(`Your personlized bio:`);
              console.log(`👋 Hello there, I'm ${nameAnswer}! 🌟 A dedicated ${activityAnswer} enthusiast with a soundtrack of ${musicAnswer} keeping me company along the way. Each day, I eagerly await ${mealAnswer} to savor the flavors of ${foodAnswer} – a true connoisseur at heart. When I'm not immersed in my passion, you'll find me cheering for my favorite ${sportAnswer} team. Ever envisioned a world where ${superpowerAnswer} is more than just a fantasy? Let's connect and explore the possibilities! ✨🚀 #NetworkingNinja #PassionPioneer
              `);
        
              rl.close();

            });
          });
        });
      });
    });
  });
});