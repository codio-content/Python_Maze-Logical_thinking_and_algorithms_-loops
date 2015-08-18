
energies = 0
walls = 0

def createEmptyMaze():
  pass

def addPlayer():
  pass

def addWall(x, y):
  global walls
  if (x == 2 and y == 2) or (x == 3 and y == 3) or (x == 4 and y == 4) or (x == 5 and y == 5):
    walls += 1

try:
  execfile('/home/codio/workspace/public/py/py-10.py')
  
  if walls == 4:  
    print 'well done'
    exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
