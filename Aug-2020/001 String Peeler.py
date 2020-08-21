# Your goal is to create a function that removes the first and last letters of a string. 
# Strings with two characters or less are considered invalid. 
# You can choose to have your function return null or simply ignore.

def stringPeeler(inputString):
    if len(inputString) > 2:
        return inputString[1:-1]

print(stringPeeler("Hello"))
print(stringPeeler(""))