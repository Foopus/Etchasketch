# Etchasketch
A JavaScript project utilising multiple coding techniques to create an Etch-A-Sketch web page. 

In this README Document I will go over the pseudocode and the strategies I will use to
complete this project.

Objectives:

    Create a single webpage with a fixed sized grid of empty divs; the quantity of divs in the grid will be defined by a value entered by the user at the top of the page between 1 and 100.
    i.e "X by X".

    The grid tiles must posess a mouseover property that changes the background colour of tile after hovering over it.

    There should be a functional reset button at the top of the page as well that clears all the tiles and resets the effects.

Bonus Objectives:

    Have each grid passover produce a random RBG colour and subsequent passes on the same tile add
    10% black to the color such that after 10 passes the tile is completely black.

    ** To achieve this I'll have to figure out how to add inline css in my javascript that  determines the rgb values based on randomly generated numbers

Plan:

    The first step will be to creat a basic html boilerplate and several div elements for:

        - The title.
        
        - Instructions.
        
        - A text box to enter the desired grid resolution.
        
        - A button to accept or refuse the selection that utilizes NaN or RegEx to determine the   validity of the entry and then produces the grid if the entry is between 1 - 100 or alerts
        the user to produce another entry if the produced entry does not satisft the aforementioned
        condition.

        - A div container whose size scales with the window that is a square and will contain the grid and have a visible border.

        - Once this is all complete, we will use a looping JS function that adds grid divs with the desired properties within the frame. something like (i = 1, i <= x, i++) where x will be the selected number.

        - We will use inline css properties that will add the mouseover effects that will apply to the identical grid divs.

        - We may also add a keydown listener that disables this effect if a certain key is held down.        
