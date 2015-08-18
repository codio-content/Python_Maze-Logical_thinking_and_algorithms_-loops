
{Check It!|assessment}(test-4159971212)

|||guidance
## Solution

There are many possible solutions. For instance the two loops below can be combined into one or the second loop can loop from 6 to 11.

```python

createEmptyMaze()

for i in range(0, 4):
  addWall(i+2, i+2) 
  
for i in range(0, 4):
  addWall(i+6, 5-i) 

addPlayer()

```
|||
