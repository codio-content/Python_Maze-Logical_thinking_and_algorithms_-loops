The `for` loop is another way of creating a loop. It is, in fact, a preferred way of managing loops in Python as it is more concise.

Take a look at the code on the left hand side. It does exactly the same thing as our earlier `while` loop.

## Explanation
The `for` loop is really good because it handles the 3 things that all loops are interested in.

```python
for [Variable] in range([Start], [End], [Step]):

```

### Variable Initialisation
The first part of the `for` instruction, before the `in` keyword declares a variable that will be updated as we loop. This variable is initialised with the first part of the range of numbers we are going to be looping in, the `Start` value, in this case it is `0`.

### Step
The `Step` part of the loop tells Python to increase `counter` by a certain amount each time we loop. We are using a value of `1`, we can also increase by larger numbers or use negative numbers to step backwards. By default Python will use a `Step` of `1` so we didn't have to specify it for this example.

### End Condition
The loop will terminate when the declared variable's value is no longer within the range defined by `Start` and `End`. Think of it working the same way the while loop codition did, so the loop will termiate when the answer to the question "is `counter < 10`?" is no!
