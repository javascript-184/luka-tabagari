from turtle import*

width(8)
color("blue") 

forward(200)  
left(90) 

forward(200) 
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(70)
color("yellow")
left(90) # saxlis dashveba
begin_fill()
forward(100)   # karebis simagle
right(90) # shida diametri karebis

forward(50) # karis siganis diametri

right(90) # shida diametri karebis

end_fill()    
# {
forward(100) # karebis simagle
penup()
goto(200,200)
pendown()
color("red")
begin_fill() # feris minicheba
# }



right(140)
forward(160) # saxiravis erti mxare 
left(100) # saxuravis dashvenbis kutxe
forward(160) # saxiravis me 2 mxare 
end_fill()   # feris minicheba
# {
# kalmis ageba dadeba!
penup()
left(40)
forward(150)
left(90)
forward(10)
pendown()

# }

# pirveli fanjara
# {
width(3)
color("blueviolet")
forward(60)
right(90)
forward(45)
right(90)
forward(60)
right(90)
forward(45)
penup()
right(90)
forward(30)
right(90)
pendown()
forward(45)
penup()
left(180)
forward(20)
pendown()
right(90)
forward(30)
left(180)
forward(60)
# }
# me 3 kalmis ageba{
penup()
right(180)
forward(125)
left(100)
forward(25)
pendown()

right(100)
forward(70)
right(90)
forward(45)
right(90)
forward(70)
right(90)
forward(44)
# }

# me 2 fajara{
penup()
right(90)
forward(40)
right(90)
pendown()
forward(45)
left(180)
forward(20)
right(90)
forward(30)
left(180)
forward(70)
# }

# finnisher{
penup()
goto(250, 200)   
setheading(0)
pendown()

color("yellow")
begin_fill()
circle(100)   # მზის ზომა
end_fill()

# }
exitonclick() 