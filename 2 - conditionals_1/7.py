import math

typeO = input()

if typeO == "square":
    long = float(input())
    face = round(long * long, 3)
    print(face)
elif typeO == "rectangle":
    one = float(input())
    two = float(input())
    face = round(one * two, 3)
    print(face)
elif typeO == "circle":
    one = float(input())
    face = round(math.pi * one * one, 3)
    print(face)
elif typeO == "triangle":
    one = float(input())
    two = float(input())
    face = round((one * two) / 2, 3)
    print(face)
