Javascript select random color
colorInput ~500 val

Generate a random number between 0 & 255
Set R to generated number, subtract R from colorInput

Generate a random number between 0 & 255
IF((colorInput - generated number) >= 0)
Set G to generated number
ELSE
Set G to colorInput

subtract G from colorInput

Set B to colorInput

========

Multiply-filter all images against RGB
Set link color to RGB
Set header bg to RGB