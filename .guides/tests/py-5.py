
energies = 0
walls = 0

def createEmptyMaze():
  pass

def addPlayer():
  pass

def addWall():
  global walls
  walls += 1

def addEnergy():
  global energies
  energies += 1

try:
  execfile('/home/codio/workspace/public/py/py-5.py')
  
  if walls == 6 and energies == 3:  
    print 'well done'
    exit(0)
  
except (IOError, SyntaxError, ValueError) as e:
  print str(e)
  exit(1)
  
print 'Not quite right, try again!'
exit(1)
