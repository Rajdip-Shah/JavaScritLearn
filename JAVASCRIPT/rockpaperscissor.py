from random import choice 
user = input ("R, P , S =>")
bot = choice(["R", "P", "S"])

score_database = {
    "R": {'R': 0.5, 'P': 0, 'S':1}, 
    "P": {'R': 1, 'P': 0.5, 'S':0}, 
    'S' : {'R': 0, 'P': 1, 'S':0.5}
 }

score = score_database[user][bot]

win_message = {
    1: "You Win", 
    0.5: "Draw!",
    0: "LooseR!"
}

print (win_message[score])