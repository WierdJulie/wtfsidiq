function generate(){
  outputheader = document.getElementById("outputheader")

  if (ideas.length == 0){
    outputheader.innerHTML = "You burned through all my ideas. I'm going to start repeating them now. Or come back later, I'll add more here and there.";
    getideas();
    return;
  }

  // Modify the output div's contents to show a random idea
  i = Math.floor(Math.random()*ideas.length)
  idea = ideas[i];
  outputheader.innerHTML = idea

  // Remove the selected idea from the list
  ideas.splice(i, 1)
}

function getideas(){
  ideas = ["Do some yoga I guess?",
  "Read one of those fuckin books you got lying around.",
  "Go to your neighbor's yard and try to pick one leaf off of each plant, bush, tree, etc. Don't get caught.",
  "Wash your filthy fucking hands.",
  "Seriously I'm not kidding wash those gross hands what the shit is wrong with you",
  "Work on your household budget because shit's about to get WEIRD financially amirite",
  "Make a puppet theater out of stuff in your house. Whether or not you have kids is irrelevant.",
  "Two words: Flashlight. Tag.",
  "Work on a tight five minute standup comedy routine, throw it on YouTube.",
  "Build a better mousetrap.",
  "Get weirdly into Pogs. Bully your weaker friends into buying a bunch and then immediately lose interest.",
  "Perfect that sweet fuckin beatbox technique you've been workshopping.",
  "HACK THE PLANET",
  "Get shitfaced and start a sockpuppet account on Nextdoor.",
  "Get real real good at throwing playing cards. If anyone asks about it, allude vaguely to some sordid past and change the subject.",
  "Practice some bitchin close-up magic tricks for when we all get out of this mess.",
  "Replay <strike>every</strike> a single Final Fantasy game.",
  "Idk learn fucking carpentry?",
  "Binge watch that show you promised your friend you'd 'look up' but never once thought about since.",
  "Blanket fort. <em>Really</em> high-effort blanket fort.",
  "Start a podcast. I mean it'll probably be shitty but sure knock yourself out.",
  "Go absolutely Batman on some toilet paper hoarders.",
  "LaCroix Challenge.",
  "Make a papier-mâché effigy of someone you're mad at right now and beat the dogshit out of it with something when it dries.",
  "Clean your cat's litter box it's been too goddamn long and we both know it.",
  "Call your congressperson. Ask them if their refrigerator is running.",
  "Call up your local GameStop. Weren't they talking about doing delivery or some garbage in response to all this? Either way ask for Battletoads.",
  "Play one of those games you picked up on a sale and never touched you fucking wastrel.",
  "Try real hard to memorize the lyrics to Rocky Road to Dublin. Good fuckin luck.",
  "Smash out thirty squats real quick. Work those buns and thighs y'all.",
  "OOOOH YEEEEAH BROTHER LET ME SEE SOME CRUNCHES",
  "Clean the nasty goopy hair mess that's certainly accumulated in your shower drain.",
  "Call someone in your family you haven't talked to in a while. Pick a fight.",
  "Pull up some random unsecured webcam on the internet. Google how if you don't know. Spend a while watching some random highway cam in Belgrade.",
  "Did I mention washing your hands yet? I can't keep track. Wash your goddamn hands though.",
  "Train a bunch of neighborhood cats to bring you cool shit they find.",
  "Slay hella crossword puzzles bro",
  "Take the Jersey Shore challenge: Watch Jersey Shore.",
  "If you're over 25, explain what the internet used to be like back when it was 'real' to an uninterested Gen-Z.",
  "Oh shit was that a tickle in my throat just there? Fuck. Here we go.",
  "Briefly convince yourself that you'll learn to draw. Watch one tutorial and spend too much money on fancy pencils. Get discouraged and drop it immediately.",
  "Fold some laundry you slob.",
  "Drink a glass of water. No joke or intense language for this one it's just a good idea.",
  "Catch up on those webcomics you always forget exist.",
  "Try to make up a punny cover band name for random bands. I've got dibs on 'Fleetwood Snack' and 'Bro Patrol'.",
  "Take a shower you smell like shit right now. I assume.",
  "Come up with a bunch of silly names for Benedict Cumberbatch like Bulbasaur Crumplezone.",
  "Memorize the 'Nate the Snake' joke in its entirety: natethesnake.com",
  "Get real good at prison tattoos.",
  "Go peek at the news again to make sure everything's STILL on fucking fire holy hell what are we doing",
  "Watch a bunch of serial killer documentaries and try not to dwell on how you KNOW you could get away with it if you really had to.",
  "Put on some lotion your skin looks like hell.",
  "When was the last time you fuckin flossed? Not the dance.",
  "Oh man I'm running out of ideas an-JK LOL WASH YOUR STUPID HANDS IDIOT",
  "STAY THE FUCK HOME IT'S REALLY NOT THAT HARD ASSHOLE",
  "Catfish your favorite legislator.",
  "DIY guillotine",
  "Did you know you can just <strong><em>buy</em></strong> a cattle prod?",
  "Uhhhhhhh. Let's see. Got any lightbulbs out in your house you've been putting off changing?",
  "What are the odds you changed your air filter when you were supposed to?",
  "Meditate. Throw on some calming music on Spotify and try not to jump out of your skin when a loud ad plays because you're a cheap prick who won't buy premium.",
  "Kegels.",
  "I wonder how easy it would be to start a cult.",
  "Handstand contest.",
  "Go to bed at a reasonable hour and try <em>real</em> hard not to zone out into your phone scrolling through the same three apps until you can't hold your arm up anymore.",
  "Find some private space and have one really vulnerable, ugly, obnoxious cry sesh. Let that shit out. You'll feel better. Like puking after you drink too much.",
  "Make oobleck out of cornstarch and water and then immediately regret the mess you made with it.",
  "Change your passwords.",
  "Find a new favorite color we're all fucking sick of your current one.",
  "If you have a dog please tell them Mikey said hi. I'll wait.",
  "Deepfake that video of Liz Warren and Kate McKinnon dancing so their faces are swapped.",
  "Rewatch that show you've been thinking about rewatching but for the love of GOD don't bother everyone on Twitter about it.",
  "Hand jive world record attempt.",
  "Let the sweet caress of complacency nuzzle you to sleepyland and don't think about the dumpster fire that is 2020.",
  "Fuck it maybe this is when you'll learn to move shit with your mind.",
  "Think about getting into juggling, realize you don't have anything to juggle, decide you don't feel comfortable living life as a person who once purchased juggling balls.",
  "Nah you'll figure it out, you're on your own for this one.",
  "Submit a pull request to the github repo in the link below, add some more ideas here I'm getting tired of writing them already.",
  "Take up some new language on Duolingo and let that damn owl harass you about being a lazy piece of shit when you don't go back to it.",
  "Pick some random celebrity to hold a massive grudge against. Really dive into it headfirst. Make yourself famous for starting shit someday.",
  "Challenge your neighbors to rock-paper-scissors, wordlessly, through their living room windows.",
  "Try real hard to imagine what your least favorite political figure might actually smell like.",
  "The floor is lava starting immediately. No exceptions.",
  "There's like a twelve minute long youtube video about how aluminum cans are made. It's fascinating enough for me to mention but not enough for me to look it up for you.",
  "Get way into cup stacking and get super defensive when anyone mentions it being a weird hobby.",
  "Might be a good time to start figuring out how to grow your own food.",
  "Just go absolutely overboard trying to cook some ambitious dinner. If you fuck it up oh well you tried.",
  "I *will* learn how to moonwalk goddammit.",
  "Ask if you can, but not if you should.",
  "Share this site on social media. It'll fill the hole in your heart, I swear to god.",
  "Wash. Your. Hands.",
  "Fuck with some origami. Get real peaceful and centered and shit.",
  "Clean your bathroom mirror I bet it's nasty.",
  "Try not to think about what four more years of this shit could be like.",
  "Write a book that your friends will tell you they're going to read but <em>really</em> don't want to and loathe you for asking in the first place.",
  "Hold a plank for like, a real long time or something.",
  "*sigh* I guess I'm buying Skyrim again.",
  "Organize your spice rack. You have <em>how many</em> things of paprika?",
  "Make some good-ass cookies if you've got the stuff around for it.",
  "Learn to knit?"
"Talk to your pet."
"Empty the trash, eeewww!"
"Throw our all the odd socks."
"Play Yu-Gi-Oh online?"
"Look up some lame jokes and bore your quarantine buddies."
"Hide the soap?"
"Make a cuppa?"
"Give yourself a pedicure, your toes are looking like talons!"
"Manicure time, nah, joking wash your manky hands!"
"Watch and learn a crappy TikTok dance!"
"Tidy your wallet, I bet it's full of tatty receipts?"
"Text a friend and just say Hi?"
"Finally cancel that thing you keep forgetting to cancel because you're a fucking space cadet."];
}
