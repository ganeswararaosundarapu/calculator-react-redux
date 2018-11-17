import React from 'react';

const Hint = () => (
  <div>
    <div>
      <h3> Memory Functional Hint </h3>
      MC = Memory Clear sets the memory to 0
      MR = Memory Recall uses the number in memory, acts as if you had keyed in that number yourself
      MS = Memory Store puts the number on the display into the memory
      M+ = Memory Add takes the number on the display, adds it to the memory, and puts the result into memory

      Example:
        5 x 6 = (calculator says 30)
        MS (stores 30 in memory)
        12 x 2 = (calculator says 24)
        M+ (takes 24, adds it to 30, stores result 54 in memory)
        3 x 7 = (21)
        M+ (takes 54, adds 21, stores the result 75)
        MR (displays the result 75)
    </div>
  </div>
)

export default Hint;
